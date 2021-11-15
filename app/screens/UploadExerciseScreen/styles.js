import {StyleSheet} from "react-native";
import {RFValue} from "react-native-responsive-fontsize";
import {Colors} from "../../config";

export default StyleSheet.create({
  container: {
    backgroundColor: "white",
  },

  tab__container: {
    backgroundColor: "white",
    height: 60,
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

  tab__wrapper: {
    width: "93%",
    flexDirection: "row",
    flex: 1,
    alignSelf: "center",
  },

  tab__text: {
    textAlign: "center",
  },

  tab__content: {
    flex: 1,
    justifyContent: "center",
    paddingBottom: 5,
  },
  tab__indicator: {
    backgroundColor: Colors.secondary,
    position: "absolute",
    bottom: 0,
    borderRadius: 100,
    alignSelf: "center",
    height: 3,
    width: 2,
  },

  button: {
    backgroundColor: Colors.secondary,
    paddingVertical: "5%",
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    width: "85%",
    alignItems: "center",
  },

  button__text: {
    fontSize: RFValue(15),
    color: "white",
  },

  upload__container: {
    flex: 1,
    backgroundColor: "white",
  },

  inputContainerStyle: {
    backgroundColor: Colors.inputBackground,
    borderRadius: RFValue(10),
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: Colors.inputBackground,
    height: 50,
  },
  textAreaContainerStyle: {
    backgroundColor: Colors.inputBackground,
    borderRadius: RFValue(10),
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: Colors.inputBackground,
  },
  upload__wrapper: {
    width: "85%",
    alignSelf: "center",
    height: "100%",
    marginTop: "5%",
  },

  form__group: {
    marginBottom: "5%",
  },
  form__label: {
    marginBottom: "3%",
    color: Colors.lightGray,
  },

  selection__container: {
    backgroundColor: Colors.inputBackground,
    width: "48%",
    padding: "5%",
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: RFValue(10),
  },

  selection__active: {
    backgroundColor: Colors.primary,
  },

  selection__text: {
    textAlign: "center",
    color: Colors.secondary,
    fontSize: RFValue(10),
  },

  type__container: {
    width: "32%",
    borderWidth: 1,
    padding: "4%",
    borderColor: "whitesmoke",
    borderRadius: 5,
    alignItems: "center",
  },
  repetition__label: {
    textAlign: "center",
    color: Colors.lightGray,
    marginRight: "5%",
  },
  repetition__container: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: "10%",
  },

  repetition__group: {
    flexDirection: "row",
    width: "100%",
  },

  repetition__input: {
    backgroundColor: Colors.inputBackground,
    borderRadius: RFValue(10),
    borderWidth: 1,
    borderColor: Colors.inputBackground,
    height: 50,
    width: 70,
  },

  borg__container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "7%",
  },

  picker__container: {
    width: "70%",
    backgroundColor: Colors.inputBackground,
    borderRadius: 10,
    height: 50,
  },

  picker__container2: {
    width: "53%",
    backgroundColor: Colors.inputBackground,
    borderRadius: 10,
    height: 50,
  },
  dropdown__text: {
    color: Colors.primary,
  },

  lineSeparator: {
    width: "100%",
    borderWidth: 1,
    marginVertical: "7%",
    borderColor: "whitesmoke",
  },

  addStep__text: {
    textAlign: "center",
    fontSize: RFValue(12),
    fontWeight: "bold",
    color: Colors.secondary,
  },
});
