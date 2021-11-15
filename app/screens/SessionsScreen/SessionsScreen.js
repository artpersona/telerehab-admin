import React, {useState, useEffect} from "react";
import {View, Text, FlatList} from "react-native";
import {CustomHeader, SessionCard} from "../../components";
import styles from "./styles";
import {FAB} from "react-native-paper";
import {usePatientContext} from "../../shared/contexts/PatientContext";
function SessionsScreen({route, navigation}) {
  const {data} = route.params;
  const {fetchSessions} = usePatientContext();
  const renderItem = ({item, index}) => (
    <SessionCard
      data={item}
      index={index}
      key={index.toString()}
      onPress={() => handleEditSession(item)}
    />
  );

  const [patientSessions, setPatientSessions] = useState([]);

  const fetchPatientSessions = async () => {
    let item = await fetchSessions(data);
    setPatientSessions(item);
  };

  const handleCreateSession = () => {
    navigation.navigate("Session Exercises", {
      data: data,
      type: "add",
      pageTitle: "Create Sessions",
    });
  };

  const handleEditSession = item => {
    navigation.navigate("Session Exercises", {
      data: item,
      type: "edit",
      pageTitle: "Edit Session",
      email: data.email,
    });
  };

  useEffect(() => {
    fetchPatientSessions();
  }, [route.params]);

  return (
    <>
      <CustomHeader customPageTitle="Sessions" showBackButton />
      <View style={styles.container}>
        <View style={styles.header__container}>
          <Text style={styles.header__text}>
            {patientSessions.length} Sessions
          </Text>
        </View>
        <View style={styles.list__container}>
          <FlatList
            data={patientSessions}
            renderItem={renderItem}
            contentContainerStyle={{paddingBottom: "7%"}}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>

      <FAB style={styles.fab} icon="plus" onPress={handleCreateSession} />
    </>
  );
}

export default SessionsScreen;
