import { StyleSheet, Dimensions, StatusBar } from "react-native";

import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "../../../config";
import { deviceHeight } from "../../../utils/device.utility";
const d = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  wrapper: {
    width: "85%",
    height: "100%",
    alignSelf: "center",
  },

  welcome__text: {
    fontFamily: "Roboto_medium",
    fontSize: RFValue(26),
    alignSelf: "center",
    marginTop: deviceHeight / 19,
  },

  googleButton: {
    marginTop: deviceHeight / 10,
  },
  titleStyle: {
    fontSize: RFValue(13),
    fontFamily: "Roboto",
    color: "#3F414E",
  },

  footer__text_container: {
    position: "absolute",
    bottom: 30,
    alignSelf: "center",
    flexDirection: "row",
  },
  footer__text: {
    fontFamily: "Roboto",
    fontSize: RFValue(12.5),
    color: Colors.lightGray,
  },
  footer__link: {
    fontFamily: "Roboto",
    fontSize: RFValue(12.5),
    textDecorationLine: "underline",
  },
  withEmail__container: {
    marginTop: d.height / 19,
    alignItems: "center",
  },
  login__text: {
    fontFamily: "Roboto_medium",
    fontSize: RFValue(12),
    color: Colors.lightGray,
    fontWeight: "bold",
    marginBottom: "10%",
  },
  placeholder__text: {
    fontFamily: "Roboto_light",
    fontSize: RFValue(13),
    marginLeft: 30,
  },
  inputContainerStyle: {
    backgroundColor: Colors.inputBackground,
    borderRadius: RFValue(25),
    paddingVertical: 5,
    borderBottomWidth: 0,
  },
  forgot__text: {
    fontFamily: "Roboto",
    fontSize: RFValue(13),
    color: Colors.primary,
  },
});
