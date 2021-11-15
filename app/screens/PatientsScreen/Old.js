import React from "react";
import {View, Text, FlatList} from "react-native";
import styles from "./styles";
import {Colors} from "../../config";
import {PatientCard, ListEmpty} from "../../components";
import {usePatientContext} from "../../shared/contexts/PatientContext";

const renderItem = ({item, index}) => (
  <PatientCard data={item} key={index.toString()} />
);

function All() {
  const {patients} = usePatientContext();

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <FlatList
          data={patients.filter(item => item.doctor_data.status == "old")}
          renderItem={renderItem}
          contentContainerStyle={{paddingTop: "5%"}}
          ListEmptyComponent={<ListEmpty type="Patients" />}
        />
      </View>
    </View>
  );
}

export default All;
