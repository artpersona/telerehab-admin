import React, {createContext, useContext, useState, useEffect} from "react";
import auth from "@react-native-firebase/auth";
import {GoogleSignin} from "@react-native-google-signin/google-signin";
import {useFirebaseContext} from "./FirebaseContext";

// configs here!
GoogleSignin.configure({
  scopes: ["profile", "email"],
  webClientId:
    "458043458571-tdu4ggp5g3ldhp9bh74ukp4qs1mhg2g8.apps.googleusercontent.com",
});

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [initializing, setInitializing] = useState(true);
  const {firebase, firestore, storage} = useFirebaseContext();

  const registerUserViaEmail = (userName, email, password) => {
    console.log("pasok sa functions");
    console.log("password: ", password);
    return new Promise((resolve, reject) => {
      auth()
        .createUserWithEmailAndPassword(email.trim(), password)
        .then(() => {
          createUserProfile(userName, email).then(() => resolve());
        })
        .catch(error => {
          if (error.code === "auth/email-already-in-use") {
            reject("That email address is already in use!");
          }

          if (error.code === "auth/invalid-email") {
            reject("That email address is invalid!");
          }
        });
    });
  };

  const createUserProfile = (userName, email) => {
    return new Promise((resolve, reject) => {
      firestore()
        .collection("Doctors")
        .doc(email.trim())
        .set({
          profileData: {
            userName: userName,
            email: email.trim(),
          },
          email: email.trim(),
          userName: userName,
        })
        .then(() => {
          const user = {
            userName,
            email,
          };
          setUser(user);
          resolve();
        });
    });
  };

  const updateUserProfile = (data, uploadData, genderActive) => {
    return new Promise(async (resolve, reject) => {
      console.log("gender active is: ", genderActive);
      console.log("upload data: ", uploadData);
      let prcUrls = await uploadDocuments(uploadData);
      console.log("prc urls: ", prcUrls);
      data.prc_id_front = prcUrls[0].url;
      data.pric_id_back = prcUrls[1].url;
      data.email = user.email;
      data.userName = user.userName;
      data.profiling_done = true;
      data.gender = genderActive;

      console.log("data is: ", data);
      firestore()
        .collection("Doctors")
        .doc(user.email.trim())
        .update({
          profileData: data,
        })
        .then(() => resolve())
        .catch(err => reject(err));
    });
  };

  const loginWithEmail = (email, password) => {
    return new Promise((resolve, reject) => {
      auth()
        .signInWithEmailAndPassword(email.trim(), password)
        .then(userCredential => {
          const user = userCredential.user;
          getUserProfile(email.trim())
            .then(() => resolve(user))
            .catch(err => console.log("get user profile error"));
        })
        .catch(err => {
          console.log("error is: ", err);
          reject(err);
        });
    });
  };

  const getUserProfile = email => {
    return new Promise((resolve, reject) => {
      firestore()
        .collection("Doctors")
        .where("email", "==", "tesya@gmail.com")
        .onSnapshot(doc => {
          if (doc?.docs) {
            setUser(doc.docs[0].data().profileData);
            resolve(doc.docs[0].data().profileData);
          }
        });
    });
  };

  const logoutUser = callback => {
    auth()
      .signOut()
      .then(() => {
        setUser(null);
        callback();
      });
  };

  const loginWithGoogle = async () => {
    const {idToken} = await GoogleSignin.signIn();
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth()
      .signInWithCredential(googleCredential)
      .then(data => console.log("data is: ", data))
      .catch(err => console.log("error: ", err));
  };

  function onAuthStateChanged(user) {
    if (initializing) {
      if (user) {
        console.log("email: ", user.email.trim());
        getUserProfile(user.email);
      }
      setTimeout(function () {
        setInitializing(false);
      }, 2000);
    }
  }

  const uploadDocuments = async (uploadData, setUploadData) => {
    let headerPath = `/medical_documents/${user.email.trim()}/`;
    return await uploadHelper(headerPath, uploadData);
  };

  const uploadHelper = async (headerPath, uploadData) => {
    let uploadedUrls = [];
    await Promise.all(
      Object.entries(uploadData).map(async ([key, value]) => {
        if (value != "") {
          let path = headerPath + `/${key}`;
          let url = await uploadDocuToStorage(path, value, key);
          console.log("pushed");
          return uploadedUrls.push({doc_name: key, url: url});
        }
      }),
    );

    return uploadedUrls;
  };

  const uploadDocuToStorage = async (filepath, uri, data_name) => {
    console.log("pasok");

    const docuRef = storage().ref(filepath);
    await docuRef.putFile(uri);
    return await docuRef.getDownloadURL();
  };

  // Use Effects

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const payload = {
    registerUserViaEmail,
    loginWithGoogle,
    loginWithEmail,
    updateUserProfile,

    user,
    initializing,
    setUser,

    logoutUser,
    uploadDocuments,
  };

  return (
    <AuthContext.Provider value={payload}>{children}</AuthContext.Provider>
  );
};

export default React.memo(AuthProvider);
export const useAuthContext = () => useContext(AuthContext);
