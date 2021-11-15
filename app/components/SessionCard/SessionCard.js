import React from "react";
import {View, Text, TouchableOpacity} from "react-native";
import FastImage from "react-native-fast-image";
import styles from "./styles";
import {Colors} from "../../config";
import Icon from "react-native-vector-icons/AntDesign";
import {useNavigation} from "@react-navigation/native";
import ProgressCircle from "react-native-progress-circle";

function SessionCard({data, index, onPress}) {
  const borderColor =
    data.status == "pending"
      ? Colors.red
      : data.status == "new"
      ? Colors.secondary
      : Colors.primary;

  return (
    <TouchableOpacity style={styles.patient__container} onPress={onPress}>
      <View style={styles.wrapper}>
        <View style={styles.image__container}>
          <View style={{marginHorizontal: 10}}>
            <Text>Session {index + 1}</Text>
            <Text style={styles.info__text}>
              {data.exercises.length} EXERCISES
            </Text>
          </View>
        </View>
        {data.status == "pending" ? (
          <View style={styles.button__group}>
            <View style={[styles.button, {backgroundColor: Colors.secondary}]}>
              <Text style={[styles.text__button, {color: "white"}]}>
                Confirm
              </Text>
            </View>

            <View style={[styles.button, {backgroundColor: "whitesmoke"}]}>
              <Text style={[styles.text__button, {color: Colors.secondary}]}>
                Decline
              </Text>
            </View>
          </View>
        ) : (
          <TouchableOpacity>
            <ProgressCircle
              percent={
                data.completion_percentage ? data.completion_percentage : 0
              }
              radius={25}
              borderWidth={5}
              color={Colors.success}
              shadowColor={Colors.primary}
              bgColor="whitesmoke">
              <Text style={styles.percent__text}>
                {data.completion_percentage
                  ? data.completion_percentage.toFixed(2)
                  : 0}
                %
              </Text>
            </ProgressCircle>
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
}

export default SessionCard;
