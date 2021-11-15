import React from "react";
import {View, Text, TouchableOpacity, ScrollView} from "react-native";
import styles from "./styles";
import {CustomHeader} from "../../components";
import FastImage from "react-native-fast-image";
import Icon from "react-native-vector-icons/Feather";
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons";

import {Colors} from "../../config";
function PatientScreen({navigation, route}) {
  const {data, isPending} = route.params;

  const navigateToSessions = () => {
    navigation.navigate("Sessions", {data: data});
  };

  return (
    <>
      <CustomHeader showBackButton />
      <ScrollView style={styles.container}>
        <Text style={styles.fim__status}>COMPLETE INDEPENDENT</Text>

        <View style={styles.profile__container}>
          <FastImage
            style={styles.image}
            source={{
              uri: data.uri,
              headers: {Authorization: "someAuthToken"},
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
          <View style={styles.info__container}>
            <Text
              style={
                styles.name__text
              }>{`${data.first_name} ${data.last_name}`}</Text>
            <View style={styles.text__group}>
              <Text style={styles.label__text}>Age</Text>
              <Text style={styles.data__text}>{`${data.age} Years Old`}</Text>
            </View>

            <View style={styles.text__group}>
              <Text style={styles.label__text}>Address</Text>
              <Text style={styles.data__text}>{data.address}</Text>
            </View>

            <View style={styles.text__group}>
              <Text style={styles.label__text}>Contact Number</Text>
              <Text style={styles.data__text}>{data.contact_num}</Text>
            </View>

            <View style={styles.text__group}>
              <Text style={styles.label__text}>Guardian</Text>
              <Text style={styles.data__text}>{data.guardian}</Text>
            </View>
          </View>
        </View>
        {isPending && (
          <View style={styles.fim__container}>
            <Text style={styles.fim__header}>FIM Questionnaire</Text>
            <Text style={styles.fim__status}>Pending</Text>
          </View>
        )}

        {!isPending && (
          <View style={styles.metrics__container}>
            <View style={styles.single__metric}>
              <Icon name={"calendar"} size={22} color={Colors.secondary} />
              <Text style={styles.total__text}>Schedule</Text>
            </View>
            <TouchableOpacity
              style={styles.single__metric}
              onPress={navigateToSessions}>
              <Icon2 name={"dumbbell"} size={22} color={Colors.secondary} />
              <Text style={styles.total__text}>Session / Exercises</Text>
            </TouchableOpacity>
            <View style={styles.single__metric}>
              <Icon
                name={"message-square"}
                size={22}
                color={Colors.secondary}
              />
              <Text style={styles.total__text}>Message</Text>
            </View>
          </View>
        )}

        <View style={{marginTop: "3%"}}>
          <Text style={styles.docu__text}>Documents</Text>

          <View style={styles.requirements__container}>
            <View style={styles.docu__container}>
              <Text style={styles.file__text}>Medical Record</Text>
              <Text style={styles.type__text}>Document</Text>
            </View>
            <Text style={styles.view__text}>View</Text>
          </View>

          <View style={styles.requirements__container}>
            <View style={styles.docu__container}>
              <Text style={styles.file__text}>Medical Record</Text>
              <Text style={styles.type__text}>Document</Text>
            </View>
            <Text style={styles.view__text}>View</Text>
          </View>

          <View style={styles.requirements__container}>
            <View style={styles.docu__container}>
              <Text style={styles.file__text}>Medical Record</Text>
              <Text style={styles.type__text}>Document</Text>
            </View>
            <Text style={styles.view__text}>View</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.confirm__button}>
          <Text style={styles.confirm__text}>Message</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
}

export default PatientScreen;
