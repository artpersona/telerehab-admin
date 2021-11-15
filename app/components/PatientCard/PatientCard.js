import React from "react";
import {View, Text, TouchableOpacity} from "react-native";
import FastImage from "react-native-fast-image";
import styles from "./styles";
import {Colors} from "../../config";
import Icon from "react-native-vector-icons/AntDesign";
import {useNavigation} from "@react-navigation/native";
import {usePatientContext} from "../../shared/contexts/PatientContext";
function PatientCard({data}) {
  const borderColor =
    data.doctor_data.status == "pending"
      ? Colors.red
      : data.status == "new"
      ? Colors.secondary
      : Colors.primary;
  const navigation = useNavigation();

  const navigateToPatientScreen = () =>
    navigation.navigate("PatientScreen", {data: data, isPending: false});

  const {handlePatientRequest} = usePatientContext();
  const handleAcceptPatient = () => {
    handlePatientRequest("accept", data);
  };

  const handleRejectPatient = () => {
    handlePatientRequest("reject", data);
  };

  console.log("data is: ", data.uri);
  return (
    <TouchableOpacity
      style={styles.patient__container}
      onPress={navigateToPatientScreen}
      disabled={data.doctor_data.status == "pending"}>
      <View style={styles.wrapper}>
        <View style={styles.image__container}>
          <FastImage
            style={[styles.image, {borderColor: borderColor}]}
            source={{
              uri: data.uri,
              headers: {Authorization: "someAuthToken"},
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
          <View>
            <Text>{`${data.last_name}, ${data.first_name}`}</Text>
            <Text
              style={
                styles.info__text
              }>{`${data.age} yrs old, ${data.sex}`}</Text>
          </View>
        </View>
        {data.doctor_data.status == "pending" ? (
          <View style={styles.button__group}>
            <TouchableOpacity
              style={[styles.button, {backgroundColor: Colors.secondary}]}
              onPress={handleAcceptPatient}>
              <Text style={[styles.text__button, {color: "white"}]}>
                Confirm
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, {backgroundColor: "whitesmoke"}]}
              onPress={handleRejectPatient}>
              <Text style={[styles.text__button, {color: Colors.secondary}]}>
                Decline
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity style={styles.add__indicator}>
            <Icon name={"plus"} size={22} color={Colors.secondary} />
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
}

export default PatientCard;
