import {StyleSheet} from "react-native";
import {RFValue} from "react-native-responsive-fontsize";
import {deviceHeight} from "../../utils/device.utility";
import {Colors} from "../../config";
export default StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "white",
    borderBottomWidth: 2,
    borderColor: "whitesmoke",
    paddingVertical: 5,
  },
  wrapper: {
    width: "90%",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
  },
  image: {
    height: deviceHeight / 8,
    width: deviceHeight / 9,
  },
  text__container: {
    margin: "2%",
  },
  name__text: {
    fontFamily: "OpenSans_medium",
    fontWeight: "bold",
    fontSize: RFValue(13),
    marginBottom: "1%",
  },
  add__indicator: {
    backgroundColor: "whitesmoke",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: "9%",
    paddingVertical: "4%",
  },
  circle__indicator: {
    backgroundColor: "whitesmoke",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: "5%",
    paddingVertical: "5%",
  },
  translated__text: {
    fontSize: RFValue(11),
    textTransform: "uppercase",
    marginTop: "3%",
  },
  edit__text: {
    color: Colors.secondary,
    fontSize: RFValue(10),
  },
});
