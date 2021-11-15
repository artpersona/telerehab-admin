import React, {createContext, useContext} from "react";
import PropTypes from "prop-types";

import firestore from "@react-native-firebase/firestore";
import storage from "@react-native-firebase/storage";
import firebase from "@react-native-firebase/app";

export const FirebaseContext = createContext();
// export const db = firebase.database();

const FirebaseProvider = ({children}) => {
  const payload = {firestore, storage, firebase};

  return (
    <FirebaseContext.Provider value={payload}>
      {children}
    </FirebaseContext.Provider>
  );
};

FirebaseProvider.defaultProps = {};

FirebaseProvider.propTypes = {
  children: PropTypes.object.isRequired,
};

export default FirebaseProvider;
export const useFirebaseContext = () => useContext(FirebaseContext);
