import {StyleSheet} from "react-native";
import {Colors} from "../../config";
import {deviceHeight, deviceWidth} from "../../utils/device.utility";
import {RFValue} from "react-native-responsive-fontsize";
export default StyleSheet.create({
  patient__container: {
    width: "100%",
    backgroundColor: "white",
    borderBottomWidth: 2,
    borderColor: "whitesmoke",
    paddingVertical: 10,
  },

  image: {
    borderWidth: 3,
    height: deviceHeight / 12,
    width: deviceHeight / 12,
    borderRadius: 100,
    borderWidth: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 4,
    marginRight: 10,
    zIndex: 9999,
  },

  image__container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  name__text: {
    fontSize: RFValue(14),
  },
  info__text: {
    fontSize: RFValue(11),
    color: Colors.lightGray,
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    width: "95%",
    alignSelf: "center",
    justifyContent: "space-between",
  },

  button__group: {
    flexDirection: "row",
  },
  button: {
    marginHorizontal: 3,
    backgroundColor: "red",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
  },
  text__button: {
    fontSize: RFValue(12),
  },
  add__indicator: {
    width: 50,
    height: 50,
    backgroundColor: "whitesmoke",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },

  container: {
    marginHorizontal: 10,
    alignItems: "center",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 1,
    width: deviceWidth / 3.5,
    borderWidth: 1,
    borderColor: "whitesmoke",
    zIndex: -1,
    borderRadius: 20,
    height: deviceWidth / 3.3,
  },

  details__container: {
    alignItems: "center",
    paddingTop: 40,
  },
});
