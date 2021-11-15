import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './app/screens/Main/MainNavigation';
import FirebaseProvider from './app/shared/contexts/FirebaseContext';
import AuthProvider from './app/shared/contexts/AuthContext';
function Main() {
  return (
    <NavigationContainer>
      <FirebaseProvider>
        <AuthProvider>
          <MainNavigation />
        </AuthProvider>
      </FirebaseProvider>
    </NavigationContainer>
  );
}

export default Main;
