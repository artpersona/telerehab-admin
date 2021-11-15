import { StyleSheet, Dimensions, StatusBar } from "react-native";

import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "../../config";
import { deviceHeight } from "../../utils/device.utility";

export default StyleSheet.create({
  grey__container: {
    backgroundColor: Colors.greyBackground,
    width: "100%",
    height: "25%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  profiling__text_container: {
    alignSelf: "center",
    alignItems: "center",
  },
  header__text: {
    fontFamily: "Roboto_medium",
    color: Colors.primary,
    fontSize: RFValue(34),
    marginBottom: "1%",
  },
  header__subtext: {
    color: Colors.secondary,
    fontFamily: "Roboto_light",
    fontSize: RFValue(14),
    marginBottom: "2%",
  },
  pages__container: {
    width: "100%",
    alignSelf: "center",
    marginTop: "-16%",
    height: deviceHeight / 1.6,
  },
});
