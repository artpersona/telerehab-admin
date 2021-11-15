import React, {useState, useEffect} from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  ToastAndroid,
  KeyboardAvoidingView,
} from "react-native";
import {CustomHeader, Loading} from "../../components";

import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import UploadDetailsScreen from "./UploadDetailsScreen";
import UploadVisualsScreen from "./UploadVisualsScreen";
import styles from "./styles";
import {Colors} from "../../config";
import {useExerciseContext} from "../../shared/contexts/ExerciseContext";
const Tab = createMaterialTopTabNavigator();

function UploadExerciseScreen({navigation, route}) {
  const initialState = {
    img1: "",
    img2: "",
  };

  const formState = {
    name: "",
    extremity: "",
    type: "",
    repetitions: "",
    sets: "",
    borg_scale: "",
    duration: "",
    materials__needed: [],
    visuals: [
      {step_num: 1, description: "", name: "img1"},
      {step_num: 2, description: "", name: "img2"},
    ],
  };

  const {uploadExercise} = useExerciseContext();
  const [borgRate, setBorgRate] = useState("");
  const [name, setName] = useState("");
  const [extremity, setExtremity] = useState("");
  const [type, setType] = useState("");
  const [repetition, setRepetition] = useState("");
  const [set, setSet] = useState("");
  const [nameError, setNameError] = useState(false);
  const [repetitionError, setRepetitionError] = useState(false);
  const [setError, setSetError] = useState(false);
  const [duration, setDuration] = useState("");
  const [uploadData, setUploadData] = useState(initialState);

  const [formData, setFormData] = useState(formState);

  const [activeScreen, setActiveScreen] = useState(0);

  const [loading, setLoading] = useState(false);
  const checkFormDisabled = () => {
    let status = false;
    if (name == "") {
      setNameError(true);
      status = true;
    }
    if (extremity == "") {
      status = true;
    }
    if (type == "") {
      status = true;
    }
    if (repetition == "") {
      status = true;

      setRepetitionError(true);
    }

    if (set == "") {
      status = true;

      setSetError(true);
    }
    if (borgRate == "") {
      status = true;
    }
    return status;
  };

  const checkUploadDisable = () => {
    let disabled = false;
    formData.visuals.map(item => {
      if (item.description == "") disabled = true;
    });

    Object.entries(uploadData).forEach(([key, value]) => {
      if (value == "") disabled = true;
    });

    return disabled;
  };

  const onButtonPress = () => {
    if (activeScreen == 0) {
      if (checkFormDisabled()) {
        ToastAndroid.showWithGravity(
          "Fill all fields",
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );
      } else {
        navigation.navigate("Visual");
      }
    } else {
      if (checkUploadDisable()) {
        ToastAndroid.showWithGravity(
          "Fill all fields or Finish all Uploads",
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );
      } else {
        setLoading(true);

        let tempData = {...formData};
        tempData.borg_scale = borgRate;
        tempData.extremity = extremity;
        tempData.name = name;
        tempData.repetitions = repetition;
        tempData.sets = set;
        tempData.type = type;
        tempData.duration = duration;

        uploadExercise(uploadData, tempData)
          .then(() => {
            setLoading(false);
            navigation.navigate("Exercises");
          })
          .catch(err => {
            console.log(err);
            setLoading(false);
            ToastAndroid.showWithGravity(
              "Error Encountered",
              ToastAndroid.SHORT,
              ToastAndroid.CENTER,
            );
          });
      }
    }
  };

  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <CustomHeader showBackButton customPageTitle="Upload Exercise " />
      <Tab.Navigator
        initialRouteName="Pendings"
        activeColor="red"
        // tabBar={props => <MyTabBar {...props} />}
      >
        <Tab.Screen
          name="Details"
          children={({navigation, route}) => (
            <UploadDetailsScreen
              formData={formData}
              setFormData={setFormData}
              navigation={navigation}
              setActiveScreen={setActiveScreen}
              name={name}
              setName={setName}
              extremity={extremity}
              setExtremity={setExtremity}
              type={type}
              setType={setType}
              repetition={repetition}
              setRepetition={setRepetition}
              set={set}
              setSet={setSet}
              borgRate={borgRate}
              setBorgRate={setBorgRate}
              nameError={nameError}
              repetitionError={repetitionError}
              setError={setError}
              duration={duration}
              setDuration={setDuration}
            />
          )}
        />
        <Tab.Screen
          name="Visual"
          children={({navigation, route}) => (
            <UploadVisualsScreen
              uploadData={uploadData}
              setUploadData={setUploadData}
              formData={formData}
              setFormData={setFormData}
              navigation={navigation}
              setActiveScreen={setActiveScreen}
            />
          )}
        />
      </Tab.Navigator>

      <View
        style={{
          height: 90,
          backgroundColor: "white",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,

          elevation: 3,
          justifyContent: "center",
          alignItems: "center",
        }}>
        <TouchableOpacity style={styles.button} onPress={onButtonPress}>
          <Text style={styles.button__text}>
            {activeScreen == 0 ? "Next" : "Submit"}
          </Text>
        </TouchableOpacity>
      </View>

      {loading && <Loading />}
    </KeyboardAvoidingView>
  );
}

function MyTabBar({state, descriptors, navigation, position}) {
  return (
    <View style={styles.tab__container}>
      <View style={styles.tab__wrapper}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({name: route.name, merge: true});
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          const inputRange = state.routes.map((_, i) => i);
          const borderWidth = position.interpolate({
            inputRange,
            outputRange: inputRange.map(i => (i === index ? 30 : 0)),
            extrapolateRight: "clamp",
          });

          const opacity = position.interpolate({
            inputRange,
            outputRange: inputRange.map(i => (i === index ? 1 : 0)),
          });

          return (
            <>
              <TouchableOpacity
                accessibilityRole="button"
                accessibilityState={isFocused ? {selected: true} : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={styles.tab__content}>
                <Animated.Text
                  style={
                    isFocused
                      ? [
                          styles.tab__text,
                          {
                            fontWeight: "bold",
                            color: Colors.secondary,
                          },
                        ]
                      : styles.tab__text
                  }>
                  {label}
                </Animated.Text>
                {/* <Animated.View
                      style={
                        isFocused
                          ? [
                              styles.tab__indicator,
                              {transform: [{scaleX: borderWidth}]},
                            ]
                          : [styles.tab__indicator]
                      }
                    /> */}
              </TouchableOpacity>
            </>
          );
        })}
      </View>
    </View>
  );
}

export default UploadExerciseScreen;
