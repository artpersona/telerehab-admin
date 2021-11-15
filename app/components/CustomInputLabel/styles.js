import { StyleSheet } from "react-native";
import { Colors } from "../../config";
import { RFValue } from "react-native-responsive-fontsize";
export default StyleSheet.create({
  label__text: {
    color: Colors.secondary,
    fontSize: RFValue(12),
    fontFamily: "Roboto_light",
  },
});
