import {StyleSheet, Dimensions, StatusBar} from "react-native";

import {RFValue} from "react-native-responsive-fontsize";
import {Colors} from "../../config";
import {isTablet, deviceWidth, deviceHeight} from "../../utils/device.utility";
const d = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    zIndex: 4,
    height: isTablet ? 90 : 55,
    backgroundColor: "white",
    justifyContent: "center",
    // marginTop: StatusBar.currentHeight,
  },
  wrapper: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    alignItems: "center",
    paddingTop: "2%",
  },
  action__wrapper: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  noBackground: {
    zIndex: 4,
    height: 70,
    justifyContent: "center",
  },
  textWelcome: {
    fontSize: RFValue(24),
    color: "black",
    fontWeight: "500",
    lineHeight: 42,
    height: 42,
    alignSelf: "baseline",
    justifyContent: "flex-end",
  },

  clickable__area: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },

  right_most: {
    position: "absolute",
    right: 0,
    zIndex: -11,
  },
  customPage__title: {
    fontFamily: "Roboto_light",
    color: Colors.darkGray,
    fontSize: RFValue(21),
  },
});
