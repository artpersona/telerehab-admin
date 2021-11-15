import {StyleSheet} from "react-native";
import {RFValue} from "react-native-responsive-fontsize";
import {Colors} from "../../config";
import {deviceWidth} from "../../utils/device.utility";
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header__text: {
    fontSize: RFValue(13),
    marginHorizontal: 20,
    color: Colors.lightGray,
  },
  list__container: {
    height: "100%",
    backgroundColor: "white",
  },

  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 20,
    backgroundColor: Colors.primary,
  },

  fab2: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 90,
    backgroundColor: "white",
  },

  header__container: {
    backgroundColor: "white",
    height: 30,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },

  buttonStyle: {
    backgroundColor: Colors.secondary,
    width: "90%",
    borderRadius: 40,
    paddingVertical: "5%",
    marginRight: 0,
    alignSelf: "center",
  },

  buttonStyle2: {
    backgroundColor: Colors.secondary,
    width: deviceWidth / 2.1,
    borderRadius: 40,
    paddingVertical: "5%",
    marginRight: 0,
    alignSelf: "center",
  },

  sessionContainer: {
    width: deviceWidth,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
