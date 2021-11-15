import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "../HomeScreens/HomeScreen";
import Login from "../AuthScreens/Login/Login";
import Register from "../AuthScreens/Register/Register";

import {useAuthContext} from "../../shared/contexts/AuthContext";
import ProfilingMain from "../ProfilingScreen/ProfilingMain";
import UploadExerciseScreen from "../UploadExerciseScreen/UploadExerciseScreen";
import ExerciseProvider from "../../shared/contexts/ExerciseContext";
import PatientProvider from "../../shared/contexts/PatientContext";
const Stack = createStackNavigator();

function MainNavigation() {
  const {user} = useAuthContext();
  return (
    <Stack.Navigator
      screenOptions={{animationEnabled: true, headerShown: false}}>
      {!user ? (
        <Stack.Screen name="Auth">
          {props => <AuthStack {...props} />}
        </Stack.Screen>
      ) : (
        <Stack.Screen name="HomeStack">
          {props => <HomeStack {...props} />}
        </Stack.Screen>
      )}
    </Stack.Navigator>
  );
}

const HomeStack = () => {
  const {user} = useAuthContext();

  return (
    <PatientProvider>
      <ExerciseProvider>
        <Stack.Navigator
          screenOptions={{animationEnabled: true, headerShown: false}}>
          {user.profiling_done ? (
            <>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen
                name="Create Exercises"
                component={UploadExerciseScreen}
              />
            </>
          ) : (
            <Stack.Screen name="Profiling" component={ProfilingMain} />
          )}

          {/* <Stack.Screen name="Notifications" component={Login} /> */}
        </Stack.Navigator>
      </ExerciseProvider>
    </PatientProvider>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{animationEnabled: true, headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
