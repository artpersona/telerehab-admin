import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
function CustomInputLabel({ isRequired, labelText, labelPosition }) {
  if (isRequired) {
    return (
      <View
        style={
          labelPosition === "center"
            ? { flexDirection: "row", alignSelf: "center" }
            : { flexDirection: "row", marginLeft: "2%" }
        }
      >
        <Text style={styles.label__text}>{labelText}</Text>
        <Text style={{ color: "red" }}> *</Text>
      </View>
    );
  } else {
    return (
      <View>
        <Text
          style={
            labelPosition === "center"
              ? [styles.label__text, { alignSelf: "center" }]
              : styles.label__text
          }
        >
          {labelText}
        </Text>
      </View>
    );
  }
}

export default CustomInputLabel;
