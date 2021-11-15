import React from "react";
import {View, Text, TouchableOpacity} from "react-native";
import styles from "./styles";
import FastImage from "react-native-fast-image";
import Icon from "react-native-vector-icons/AntDesign";
import {Colors} from "../../config";
import {useExerciseContext} from "../../shared/contexts/ExerciseContext";
function ExerciseCard({
  data,
  type,
  displayExercises,
  setDisplayExercises,
  index,
  screen,
}) {
  const {activeExercises, setActiveExercises} = useExerciseContext();
  let color =
    data.type == "stretch"
      ? "#FA6E5A"
      : data.type == "muscular"
      ? "#33C2CF"
      : "#80B996";
  let text =
    data.type == "stretch"
      ? "Stretching"
      : data.type == "muscular"
      ? "Muscular Strenghtening"
      : "Functional Exercise";

  const selectExercise = () => {
    console.log("pasok");
    let tempExercises = [...displayExercises];
    let tempActives = [...activeExercises];
    if (data.selected) {
      tempExercises = tempExercises.map(item => {
        if (item.name == data.name) item.selected = false;
        return item;
      });
      tempActives = tempActives.filter(item => item.name != data.name);
    } else {
      tempExercises = tempExercises.map(item => {
        if (item.name == data.name) item.selected = true;
        return item;
      });
      tempActives.push(data);
    }
    setDisplayExercises(tempExercises);
    setActiveExercises(tempActives);
  };
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={{flexDirection: "row", alignItems: "center"}}>
          <FastImage
            style={styles.image}
            source={{
              uri: data.visuals[0].url,
              headers: {Authorization: "someAuthToken"},
              priority: FastImage.priority.normal,
            }}
            // resizeMode={FastImage.resizeMode.contain}
          />
          <View style={styles.text__container}>
            <Text style={styles.name__text}>{data.name}</Text>
            <Text style={[styles.translated__text, {color: color}]}>
              {text}
            </Text>
          </View>
        </View>

        {screen !== "session" ? (
          <TouchableOpacity style={styles.add__indicator}>
            <Text style={styles.edit__text}>Edit</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={
              data.selected
                ? [styles.circle__indicator, {backgroundColor: Colors.red}]
                : styles.circle__indicator
            }
            onPress={selectExercise}>
            <Icon
              name={data.selected ? "minus" : "plus"}
              size={18}
              color={data.selected ? "white" : Colors.primary}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

export default ExerciseCard;
