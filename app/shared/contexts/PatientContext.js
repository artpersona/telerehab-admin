import React, {createContext, useContext, useState, useEffect} from "react";
import PropTypes from "prop-types";
import {useFirebaseContext} from "./FirebaseContext";
import {useAuthContext} from "./AuthContext";
export const PatientContext = createContext();
// export const db = firebase.database();

const PatientProvider = ({children}) => {
  const {user, uploadDocuments} = useAuthContext();
  const {firebase, firestore, storage} = useFirebaseContext();
  const [patients, setPatients] = useState([]);
  const [activeSessions, setActiveSessions] = useState([]);

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    await firestore()
      .collection("Doctors")
      .doc(user.email.trim())
      .collection("patients")
      .onSnapshot(snapshot => {
        let data = snapshot.docs.map(doc => doc.data());
        setPatients(data);
      });
  };

  const handlePatientRequest = (type, patient) => {
    return new Promise((resolve, reject) => {
      if (type == "accept") {
        firestore()
          .collection("Doctors")
          .doc(user.email.trim())
          .collection("patients")
          .doc(patient.email.trim())
          .update({
            "doctor_data.status": "new",
          })
          .then(() => {
            resolve();
          });
      } else {
        deletePatient(patient.email.trim())
          .then(() => {
            firestore()
              .collection("Users")
              .doc(patient.email.trim())
              .set(
                {
                  doctor_data: firestore.FieldValue.delete(),
                  profileData: {
                    doctor_data: firestore.FieldValue.delete(),
                    profile_complete: firestore.FieldValue.delete(),
                  },
                },
                {merge: true},
              );
          })
          .catch(err => console.log(err));
      }
    });
  };

  const deletePatient = email => {
    return new Promise((resolve, reject) => {
      firestore()
        .collection("Doctors")
        .doc(user.email.trim())
        .collection("patients")
        .doc(email.trim())
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
          resolve();
        })
        .catch(error => {
          console.error("Error removing document: ", error);
        });
    });
  };

  const fetchSessions = async data => {
    const snapshot = await firestore()
      .collection("Users")
      .doc(data.email.trim())
      .collection("sessions")
      .orderBy("createdAt")
      .get();

    let sessions = await snapshot.docs.map(doc => doc.data());
    console.log(sessions);
    return sessions;
  };

  const uploadPatientSessions = (patient_email, exercises) => {
    return new Promise((resolve, reject) => {
      firestore()
        .collection("Users")
        .doc(patient_email.trim())
        .collection("sessions")
        .add({createdAt: firestore.FieldValue.serverTimestamp(), exercises})
        .then(() => {
          console.log("Document successfully added!");
          updatePatientStatus(patient_email);
          resolve();
        })
        .catch(error => {
          console.error("Error adding document: ", error);
        });
    });
  };

  const updatePatientSessions = (id, patient_email, exercises) => {
    let doneTotal = 0;
    exercises.map(item => {
      if (item.done) doneTotal++;
    });

    let percentage = (doneTotal / exercises.length) * 100;
    console.log(percentage);
    return new Promise((resolve, reject) => {
      firestore()
        .collection("Users")
        .doc(patient_email.trim())
        .collection("sessions")
        .doc(id)
        .set(
          {
            exercises: exercises,
            completion_percentage: percentage,
          },
          {merge: true},
        )
        .then(() => {
          console.log("Document successfully added!");
          updatePatientStatus(patient_email);
          resolve();
        })
        .catch(error => {
          console.error("Error adding document: ", error);
          reject(err);
        });
    });
  };

  const updatePatientStatus = patient_email => {
    firestore()
      .collection("Doctors")
      .doc(user.email.trim())
      .collection("patients")
      .doc(patient_email.trim())
      .update({
        "doctor_data.status": "old",
      });
  };

  const payload = {
    patients,
    handlePatientRequest,
    fetchSessions,
    activeSessions,
    setActiveSessions,

    uploadPatientSessions,
    updatePatientSessions,

    updatePatientStatus,
  };

  return (
    <PatientContext.Provider value={payload}>
      {children}
    </PatientContext.Provider>
  );
};

PatientProvider.defaultProps = {};

PatientProvider.propTypes = {
  children: PropTypes.object.isRequired,
};

export default PatientProvider;
export const usePatientContext = () => useContext(PatientContext);
