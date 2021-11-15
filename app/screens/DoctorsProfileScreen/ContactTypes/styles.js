import { StyleSheet, StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "../../../config";
import { deviceHeight } from "../../../utils/device.utility";
export default StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "4%",
  },
  label__text: {
    fontFamily: "Roboto",
    color: Colors.primary,
    fontSize: RFValue(13),
  },
  data__text: {
    fontFamily: "Roboto",
    color: Colors.lightGray,
    fontSize: RFValue(11),
  },
});
