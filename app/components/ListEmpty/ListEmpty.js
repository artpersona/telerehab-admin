import React from "react";
import {View, Text} from "react-native";
import styles from "./styles";
function ListEmpty({type}) {
  return (
    <View style={styles.container}>
      <Text style={styles.empty__text}>No {type} found!</Text>
    </View>
  );
}

export default ListEmpty;
