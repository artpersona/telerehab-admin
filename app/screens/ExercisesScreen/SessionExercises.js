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
import AntDesign from "react-native-vector-icons/AntDesign";
import {Colors} from "../../config";
const Tab = createMaterialTopTabNavigator();

const ExercisesWithProvider = ({route, navigation}) => {
  return (
    <MenuProvider>
      <Exercises navigation={navigation} route={route} />
    </MenuProvider>
  );
};

function Exercises({route, navigation}) {
  const {privateExercises, activeExercises, setActiveExercises} =
    useExerciseContext();
  const {data, type, pageTitle, email} = route.params;
  const [displayExercises, setDisplayExercises] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  const navigateToConfirm = () => {
    navigation.navigate("Confirm Screen", {
      data: data,
      setDisplayExercises,
    });
  };
  const navigateToUpdate = () => {
    navigation.navigate("Confirm Screen", {
      type: "update",
      data: data,
      setDisplayExercises,
      email: email,
    });
  };

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  const filterByType = () => {};

  useEffect(() => {
    let tempExercises = [];
    if (isEditing) {
      let tempPrivate = JSON.parse(JSON.stringify(privateExercises));
      let tempActive = JSON.parse(JSON.stringify(data.exercises));
      tempExercises = tempPrivate.map(item => {
        tempActive.map(data => {
          if (item.name == data.name) {
            item.selected = true;
          }
        });
        return item;
      });
    } else {
      tempExercises = JSON.parse(JSON.stringify(data.exercises));
    }
    setDisplayExercises(tempExercises);
    setActiveExercises(data.exercises);
  }, [privateExercises, isEditing]);

  return (
    <View style={{flexGrow: 1, backgroundColor: "white"}}>
      <CustomHeader showBackButton customPageTitle={pageTitle} />
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
              screen="session"
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
              screen="session"
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
              screen="session"
            />
          )}
        />
      </Tab.Navigator>

      <View
        style={{
          height: 120,
          backgroundColor: "white",
          justifyContent: "center",
          borderTopWidth: 1,
          borderColor: "whitesmoke",
        }}>
        {type === "edit" ? (
          <>
            {!isEditing ? (
              <Button
                title="Edit Exercises"
                titleStyle={{fontSize: 13}}
                buttonStyle={styles.buttonStyle}
                icon={
                  <AntDesign
                    name="edit"
                    size={20}
                    color="white"
                    style={{position: "absolute", right: 40}}
                  />
                }
                onPress={toggleEditing}
              />
            ) : (
              <View style={styles.sessionContainer}>
                <Button
                  title="Update"
                  titleStyle={{fontSize: 12}}
                  buttonStyle={styles.buttonStyle2}
                  style={{marginRight: 0}}
                  onPress={navigateToUpdate}
                  containerStyle={{padding: 0, margin: 0}}
                  icon={
                    <View
                      style={{
                        width: 25,
                        height: 25,
                        borderRadius: 100,
                        backgroundColor: "white",
                        position: "absolute",
                        right: 20,
                        alignItems: "center",
                        justifyContent: "center",
                        borderWidth: 2,
                        borderColor: "whitesmoke",
                      }}>
                      <Text style={{fontSize: 11}}>
                        {activeExercises.length}
                      </Text>
                    </View>
                  }
                />

                <Button
                  title="Discard Changes"
                  titleStyle={{fontSize: 12}}
                  buttonStyle={[
                    styles.buttonStyle2,
                    {backgroundColor: Colors.red},
                  ]}
                  containerStyle={{margin: 0}}
                  onPress={() => {
                    setIsEditing(false);
                    setActiveExercises(data.exercises);
                  }}
                />
              </View>
            )}
          </>
        ) : (
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
        )}
      </View>
    </View>
  );
}

export default ExercisesWithProvider;
