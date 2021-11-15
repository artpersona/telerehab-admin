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
        <View style={styles.indicators__container}>
          <View style={styles.indicator}>
            <View
              style={[styles.circle__container, {backgroundColor: Colors.red}]}
            />
            <Text style={styles.indicator__text}>Pending</Text>
          </View>
          <View style={styles.indicator}>
            <View
              style={[
                styles.circle__container,
                {backgroundColor: Colors.secondary},
              ]}
            />
            <Text style={styles.indicator__text}>New</Text>
          </View>

          <View style={styles.indicator}>
            <View
              style={[
                styles.circle__container,
                {backgroundColor: Colors.primary},
              ]}
            />
            <Text style={styles.indicator__text}>Old</Text>
          </View>
        </View>

        <FlatList
          data={patients}
          renderItem={renderItem}
          contentContainerStyle={{paddingTop: "5%"}}
          ListEmptyComponent={<ListEmpty type="Patients" />}
        />
      </View>
    </View>
  );
}

export default All;
