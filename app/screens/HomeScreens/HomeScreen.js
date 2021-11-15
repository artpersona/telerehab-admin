import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {createDrawerNavigator} from "@react-navigation/drawer";

import ProfileScreen from "../ProfileScreen/ProfileScreen";
import DoctorsProfile from "../DoctorsProfileScreen/DoctorsProfile";
import PatientRequests from "../PatientRequests/PatientRequests";
import PatientScreen from "../PatientScreen/PatientScreen";
import PatientTab from "../../navigators/PatientManagementTab/PatientTab";
import SessionTab from "../../navigators/SessionManagementTab/SessionTab";
import DashboardScreen from "../DashboardScreen/Dashboard";
import ExercisesScreen from "../ExercisesScreen/Exercises";
import SessionExercises from "../ExercisesScreen/SessionExercises";
import SessionsScreen from "../SessionsScreen/SessionsScreen";
import ConfirmSessionScreen from "../ConfirmSessionScreen/ConfirmSessionScreen";
import {CustomDrawerContent} from "../../components";
import {Text} from "react-native";
const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();

const HomeStackScreen = props => {
  return (
    <HomeStack.Navigator
      screenOptions={{animationEnabled: true, headerShown: false}}>
      <HomeStack.Screen name="Patient Test1">
        {page => <ProfileScreen {...page} />}
      </HomeStack.Screen>
      <HomeStack.Screen name="Patient Test2">
        {page => <ProfileScreen {...page} />}
      </HomeStack.Screen>
      <HomeStack.Screen name="Test12">
        {page => <ProfileScreen {...page} />}
      </HomeStack.Screen>
      <HomeStack.Screen name="Test13" component={ProfileScreen} />
      <HomeStack.Screen name="Test14" component={ProfileScreen} />
    </HomeStack.Navigator>
  );
};

const PatientRequestStackScreen = props => {
  return (
    <HomeStack.Navigator
      screenOptions={{animationEnabled: true, headerShown: false}}
      initialRouteName="Requests">
      <HomeStack.Screen name="Requests">
        {page => <PatientRequests {...page} />}
      </HomeStack.Screen>
      <HomeStack.Screen name="PatientScreen">
        {page => <PatientScreen {...page} />}
      </HomeStack.Screen>
    </HomeStack.Navigator>
  );
};

const PatientManagementStackScreen = props => {
  return (
    <HomeStack.Navigator
      screenOptions={{animationEnabled: true, headerShown: false}}
      initialRouteName="PatientTab">
      <HomeStack.Screen name="PatientTab">
        {page => <PatientTab {...page} />}
      </HomeStack.Screen>
      <HomeStack.Screen name="PatientScreen">
        {page => <PatientScreen {...page} />}
      </HomeStack.Screen>
      <HomeStack.Screen name="Sessions">
        {page => <SessionsScreen {...page} />}
      </HomeStack.Screen>

      <HomeStack.Screen name="Create Session">
        {page => <SessionTab {...page} />}
      </HomeStack.Screen>

      <HomeStack.Screen name="Confirm Screen">
        {page => <ConfirmSessionScreen {...page} />}
      </HomeStack.Screen>

      <HomeStack.Screen name="Session Exercises">
        {page => <SessionExercises {...page} />}
      </HomeStack.Screen>
    </HomeStack.Navigator>
  );
};

export default HomeScreen = ({navigation, route}) => {
  return (
    <Drawer.Navigator
      options={{
        unmountInactiveRoutes: true,
      }}
      drawerPosition={"left"}
      defaultStatus={true}
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{animationEnabled: true, headerShown: false}}
      initialRouteName="Dashboard">
      <Drawer.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          drawerLabel: "Dashboard",
        }}
      />

      <Drawer.Screen
        name="Patient Management"
        options={{
          drawerLabel: "Patient Management",
        }}>
        {page => <PatientManagementStackScreen {...page} />}
      </Drawer.Screen>

      <Drawer.Screen
        name="Exercises"
        options={{
          drawerLabel: "Exercises",
        }}>
        {page => <ExercisesScreen {...page} />}
      </Drawer.Screen>

      <Drawer.Screen
        name="Messages"
        options={{drawerLabel: "Messages"}}
        component={ProfileScreen}
      />

      <Drawer.Screen
        name="Profile"
        options={{drawerLabel: "Profile"}}
        component={DoctorsProfile}
      />
    </Drawer.Navigator>
  );
};
