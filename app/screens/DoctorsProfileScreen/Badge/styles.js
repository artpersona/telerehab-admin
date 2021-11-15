import { StyleSheet, StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "../../../config";
import { deviceHeight } from "../../../utils/device.utility";
export default StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
    height: deviceHeight / 6.5,
    width: deviceHeight / 8,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  icon__container: {
    height: deviceHeight / 14,
    justifyContent: "flex-end",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    paddingHorizontal: "10%",
    paddingBottom: "4%",
  },
  number__text: {
    fontFamily: "Roboto",
    fontSize: RFValue(15),
    color: Colors.primary,
    marginTop: "17%",
  },
  scales__text: {
    fontFamily: "Roboto_thin",
    fontSize: RFValue(11),
    color: Colors.lightGray,
  },
});
