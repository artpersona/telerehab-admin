import { StyleSheet } from "react-native";
import { deviceHeight } from "../../utils/device.utility";
import { RFValue } from "react-native-responsive-fontsize";
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    height: "100%",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: deviceHeight / 3,
    height: deviceHeight / 3.4,
    justifyContent: "center",
  },

  wrapper: {
    width: "80%",
    height: "80%",
    alignSelf: "center",
  },

  text: {
    paddingVertical: 10,
    fontFamily: "Roboto",
    fontSize: RFValue(13.5),
  },
  header__text: {
    fontFamily: "Roboto_bold",
    fontSize: RFValue(14),
    marginBottom: 10,
  },

  cancel__text: {
    fontFamily: "Roboto_bold",
    fontSize: RFValue(12),
  },
});
