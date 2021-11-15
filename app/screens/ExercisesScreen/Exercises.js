import React, {useEffect, useState} from "react";
import {View, Text, FlatList} from "react-native";
import {CustomHeader} from "../../components";
import {FAB} from "react-native-paper";
import styles from "./styles";
import FilteredExercises from "./FilteredExercises/FilteredExercises";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import {MyTabBar} from "../../navigators/SessionManagementTab/SessionTab";
import {MenuProvider} from "react-native-popup-menu";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
import {useExerciseContext} from "../../shared/contexts/ExerciseContext";
import {Button} from "react-native-elements";
const Tab = createMaterialTopTabNavigator();

const ExercisesWithProvider = ({route, navigation}) => {
  return (
    <MenuProvider>
      <Exercises navigation={navigation} route={route} />
    </MenuProvider>
  );
};

function Exercises({route, navigation}) {
  const {privateExercises, activeExercises} = useExerciseContext();
  const navigateToCreateExercise = () => {
    navigation.navigate("Create Exercises");
  };
  const navigateToConfirm = () => {
    navigation.navigate("Confirm Screen", {
      data: route.params.data,
    });
  };
  const filterByType = () => {};

  const [displayExercises, setDisplayExercises] = useState([]);
  useEffect(() => {
    const tempExercises = [...privateExercises];
    setDisplayExercises(tempExercises);
  }, [privateExercises]);
  return (
    <View style={{flex: 1, backgroundColor: "white"}}>
      <CustomHeader showNavButton />
      <Tab.Navigator
        initialRouteName="Pendings"
        activeColor="red"
        tabBar={props => <MyTabBar {...props} />}>
        <Tab.Screen
          name="All"
          children={() => (
            <FilteredExercises
              filter="All"
              DATA={displayExercises}
              setDisplayExercises={setDisplayExercises}
            />
          )}
        />
        <Tab.Screen
          name="Upper"
          children={() => (
            <FilteredExercises
              filter="Upper"
              DATA={displayExercises}
              setDisplayExercises={setDisplayExercises}
            />
          )}
        />
        <Tab.Screen
          name="Lower"
          children={() => (
            <FilteredExercises
              filter="Lower"
              DATA={displayExercises}
              setDisplayExercises={setDisplayExercises}
            />
          )}
        />
      </Tab.Navigator>

      {/* <Menu>
        <MenuTrigger style={{}}>
          <FAB
            style={styles.fab2}
            icon="filter-variant"
            // onPress={navigateToCreateExercise}
          /> 

        <View style={styles.fab2}>
            <MaterialCommunityIcons
              name="filter-variant"
              size={20}
              color={Colors.primary}
            />
          </View> 
          <Text>Hello</Text>
        </MenuTrigger>
        <MenuOptions
          optionsContainerStyle={{
            position: "absolute",
            right: 0,
            bottom: 100,
          }}>
          <MenuOption onSelect={() => alert(`Save`)} text="Save" />
          <MenuOption onSelect={() => alert(`Delete`)}>
            <Text style={{color: "red"}}>Delete</Text>
          </MenuOption>
          <MenuOption
            onSelect={() => alert(`Not called`)}
            disabled={true}
            text="Disabled"
          />
        </MenuOptions>
      </Menu> */}
      {route?.params?.type != "add" ? (
        <FAB
          style={styles.fab}
          icon="plus"
          onPress={navigateToCreateExercise}
        />
      ) : (
        <View
          style={{
            height: 120,
            backgroundColor: "white",
            justifyContent: "center",
            borderTopWidth: 1,
            borderColor: "whitesmoke",
          }}>
          <Button
            title="Confirm Exercises"
            titleStyle={{fontSize: 13}}
            buttonStyle={styles.buttonStyle}
            icon={
              <View
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 100,
                  backgroundColor: "white",
                  position: "absolute",
                  right: 20,
                  alignItems: "center",
                  justifyContent: "center",
                  borderWidth: 2,
                  borderColor: "whitesmoke",
                }}>
                <Text>{activeExercises.length}</Text>
              </View>
            }
            onPress={navigateToConfirm}
          />
        </View>
      )}
    </View>
  );
}

export default ExercisesWithProvider;
