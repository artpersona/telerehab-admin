import { StyleSheet } from "react-native";
import Colors from "./Colors";

import { RFValue } from "react-native-responsive-fontsize";
const buttonBorderRadius = RFValue(25);
const buttonHeight = RFValue(50);

export default StyleSheet.create({
  buttonPrimary: {
    height: buttonHeight,
    borderRadius: buttonBorderRadius,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTextPrimary: {
    fontSize: RFValue(13),
    color: "white",
  },

  buttonGoogle: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: buttonBorderRadius,
    height: buttonHeight,
    borderWidth: 1,
    borderColor: "lightgrey",
    justifyContent: "space-evenly",
  },
});
