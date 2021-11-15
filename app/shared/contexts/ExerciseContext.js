import React, {createContext, useContext, useState, useEffect} from "react";
import PropTypes from "prop-types";
import {useFirebaseContext} from "./FirebaseContext";
import {useAuthContext} from "./AuthContext";
export const ExerciseContext = createContext();
// export const db = firebase.database();

const ExerciseProvider = ({children}) => {
  const {user, uploadDocuments} = useAuthContext();
  const {firestore, storage} = useFirebaseContext();
  const [privateExercises, setPrivateExercises] = useState([]);
  const [activeExercises, setActiveExercises] = useState([]);
  useEffect(() => {
    fetchPrivateExercises();
  }, []);

  const uploadExercise = (uploadData, formData) => {
    return new Promise(async (resolve, reject) => {
      let urls = await uploadDocuments(uploadData);
      console.log(urls);
      let data = formData;
      data.visuals.map(item => {
        urls.map(data => {
          if (data.doc_name == item.name) {
            item.url = data.url;
          }
        });
      });

      firestore()
        .collection("Doctors")
        .doc(user.email.trim())
        .collection("exercises")
        .doc(data.name)
        .set(data)
        .then(() => resolve())
        .catch(err => reject(err));
    });
  };

  const fetchPrivateExercises = async () => {
    const snapshot = await firestore()
      .collection("Doctors")
      .doc(user.email.trim())
      .collection("exercises")
      .onSnapshot(snapshot => {
        let data = snapshot.docs.map(doc => doc.data());
        setPrivateExercises(data);
      });
  };

  const payload = {
    uploadExercise,
    privateExercises,
    activeExercises,
    setActiveExercises,
  };

  return (
    <ExerciseContext.Provider value={payload}>
      {children}
    </ExerciseContext.Provider>
  );
};

ExerciseProvider.defaultProps = {};

ExerciseProvider.propTypes = {
  children: PropTypes.object.isRequired,
};

export default ExerciseProvider;
export const useExerciseContext = () => useContext(ExerciseContext);
