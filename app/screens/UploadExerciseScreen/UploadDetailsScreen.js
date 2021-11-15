import React, {useState} from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import styles from "./styles";
import CustomInput from "./components/CustomInput";
import {Picker} from "@react-native-picker/picker";
import {useIsFocused} from "@react-navigation/native";

function UploadDetailsScreen({
  formData,
  setFormData,
  setActiveScreen,
  borgRate,
  setBorgRate,
  name,
  setName,
  extremity,
  setExtremity,
  type,
  setType,
  repetition,
  setRepetition,
  set,
  setSet,
  nameError,
  repetitionError,
  setError,
  duration,
  setDuration,
}) {
  const borgValues = [
    {name: "Rest", value: 0},
    {name: "Really Easy", value: 1},

    {name: "Easy", value: 2},

    {name: "Moderate", value: 3},

    {name: "Sort of Hard", value: 4},

    {name: "Hard", value: 5},
    {name: "Really Hard", value: 6},
    {name: "Really, Really Hard", value: 7},

    {name: "Hardest", value: 8},
  ];

  const durationValues = [
    {name: "30", value: 30},
    {name: "60", value: 60},
    {name: "90", value: 90},
    {name: "120", value: 120},
    {name: "150", value: 150},
    {name: "180", value: 180},
  ];

  const selectExtremity = data => {
    setExtremity(data);
  };

  const selectType = data => {
    setType(data);
  };

  const isFocused = useIsFocused();
  if (isFocused) setActiveScreen(0);

  return (
    <View style={styles.upload__container}>
      <View style={styles.upload__wrapper}>
        <CustomInput
          label="Exercise Name"
          value={name}
          setValue={setName}
          error={nameError}
          placeHolder="Exercise Name"
        />

        <View style={styles.form__group}>
          <Text style={styles.form__label}>Extremitiy</Text>
          <View style={{flexDirection: "row", justifyContent: "space-between"}}>
            <TouchableOpacity
              style={
                extremity == "Upper"
                  ? [styles.selection__container, styles.selection__active]
                  : styles.selection__container
              }
              onPress={() => selectExtremity("Upper")}>
              <Text
                style={
                  extremity == "Upper"
                    ? [styles.selection__text, {color: "white"}]
                    : styles.selection__text
                }>
                Upper
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={
                extremity == "Lower"
                  ? [styles.selection__container, styles.selection__active]
                  : styles.selection__container
              }
              onPress={() => selectExtremity("Lower")}>
              <Text
                style={
                  extremity == "Lower"
                    ? [styles.selection__text, {color: "white"}]
                    : styles.selection__text
                }>
                Lower
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.form__group}>
          <Text style={styles.form__label}>Type of Exercise</Text>
          <View style={{flexDirection: "row", justifyContent: "space-between"}}>
            <TouchableOpacity
              style={
                type == "stretch"
                  ? [styles.type__container, styles.selection__active]
                  : styles.type__container
              }>
              <Text
                style={
                  type == "stretch"
                    ? [styles.selection__text, {color: "white"}]
                    : styles.selection__text
                }
                onPress={() => selectType("stretch")}>
                Stretching {"\n"}Exercisse
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={
                type == "muscular"
                  ? [styles.type__container, styles.selection__active]
                  : styles.type__container
              }
              onPress={() => selectType("muscular")}>
              <Text
                style={
                  type == "muscular"
                    ? [styles.selection__text, {color: "white"}]
                    : styles.selection__text
                }>
                Muscular {"\n"} Strengthening
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={
                type == "functional"
                  ? [styles.type__container, styles.selection__active]
                  : styles.type__container
              }
              onPress={() => selectType("functional")}>
              <Text
                style={
                  type == "functional"
                    ? [styles.selection__text, {color: "white"}]
                    : styles.selection__text
                }>
                Functional {"\n"} Exercise
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.repetition__group}>
          <View style={styles.repetition__container}>
            <Text style={styles.repetition__label}>Repetition/s</Text>
            <TextInput
              containerStyle={{
                paddingHorizontal: 0,
              }}
              autoCapitalize="none"
              style={
                repetitionError
                  ? [
                      styles.repetition__input,
                      {borderWidth: 1, borderColor: "red"},
                    ]
                  : styles.repetition__input
              }
              value={repetition}
              onChangeText={text => setRepetition(text)}
            />
          </View>

          <View style={styles.repetition__container}>
            <Text style={styles.repetition__label}>Set/s</Text>
            <TextInput
              containerStyle={{
                paddingHorizontal: 0,
              }}
              autoCapitalize="none"
              style={
                setError
                  ? [
                      styles.repetition__input,
                      {borderWidth: 1, borderColor: "red"},
                    ]
                  : styles.repetition__input
              }
              value={set}
              onChangeText={text => setSet(text)}
            />
          </View>
        </View>

        <View style={styles.borg__container}>
          <Text style={styles.repetition__label}>Borg Scale</Text>
          <View style={styles.picker__container}>
            <Picker
              selectedValue={borgRate}
              onValueChange={(itemValue, itemIndex) => setBorgRate(itemValue)}
              mode="dropdown"
              style={styles.dropdown__text}
              itemStyle={styles.dropdown__text}>
              {borgValues.map(item => (
                <Picker.Item
                  label={item.name}
                  value={item.name}
                  key={item.name}
                />
              ))}
            </Picker>
          </View>
        </View>

        <View style={styles.borg__container}>
          <Text style={styles.repetition__label}>Duration (seconds)</Text>
          <View style={styles.picker__container2}>
            <Picker
              selectedValue={duration}
              onValueChange={(itemValue, itemIndex) => setDuration(itemValue)}
              mode="dropdown"
              style={styles.dropdown__text}
              itemStyle={styles.dropdown__text}>
              {durationValues.map(item => (
                <Picker.Item
                  label={item.name}
                  value={item.name}
                  key={item.name}
                />
              ))}
            </Picker>
          </View>
        </View>
      </View>
    </View>
  );
}

export default UploadDetailsScreen;
