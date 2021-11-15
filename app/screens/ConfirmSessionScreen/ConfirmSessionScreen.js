import React, {useState} from "react";
import {View, Text, FlatList} from "react-native";
import {useExerciseContext} from "../../shared/contexts/ExerciseContext";
import {usePatientContext} from "../../shared/contexts/PatientContext";
import {ExerciseCard, CustomHeader, Loading} from "../../components";
import {Button} from "react-native-elements";
import styles from "./styles";

function ConfirmSessionScreen({route, navigation}) {
  const {activeExercises, setActiveExercises, privateExercises} =
    useExerciseContext();
  const {uploadPatientSessions, updatePatientSessions} = usePatientContext();
  const [loading, setLoading] = useState(false);
  const {setDisplayExercises, type, data, email} = route.params;
  const renderItem = ({item, index}) => {
    return (
      <ExerciseCard
        data={item}
        type="confirm_session"
        key={index.toString()}
        displayExercises={activeExercises}
        setDisplayExercises={setActiveExercises}
      />
    );
  };

  const handlePatientSession = () => {
    setLoading(true);

    if (type != "update") {
      const patient_email = route?.params.data.email;
      uploadPatientSessions(patient_email, activeExercises)
        .then(() => {
          setActiveExercises([]);
          setDisplayExercises([]);
          setLoading(false);

          navigation.navigate("Sessions", {data: data});
        })
        .catch(err => console.log(err));
    } else {
      updatePatientSessions(data.id, email, activeExercises)
        .then(() => {
          setActiveExercises([]);
          setDisplayExercises([]);
          setLoading(false);

          navigation.navigate("Sessions", {data: data});
        })
        .catch(err => console.log(err));
    }
  };
  return (
    <>
      <CustomHeader showBackButton customPageTitle="Confirm Session" />
      <View style={styles.container}>
        <View style={styles.header__container}>
          <Text style={styles.header__text}>
            {activeExercises.length} Exercises
          </Text>
        </View>
        <View style={styles.list__container}>
          <FlatList data={activeExercises} renderItem={renderItem} />
        </View>
        <View
          style={{
            height: 120,
            backgroundColor: "white",
            justifyContent: "center",
            borderTopWidth: 1,
            borderColor: "whitesmoke",
            position: "absolute",
            bottom: 0,
            width: "100%",
          }}>
          <Button
            title="Confirm Session"
            titleStyle={{fontSize: 13}}
            buttonStyle={styles.buttonStyle}
            onPress={handlePatientSession}
          />
        </View>
      </View>

      {loading && <Loading />}
    </>
  );
}

export default ConfirmSessionScreen;
