import {StyleSheet} from "react-native";
import {RFValue} from "react-native-responsive-fontsize";
import {deviceHeight} from "../../utils/device.utility";
import {Colors} from "../../config";
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  image: {
    height: deviceHeight / 4.5,
    width: deviceHeight / 6,
    borderRadius: 20,
  },
  profile__container: {
    flexDirection: "row",
    width: "90%",
    backgroundColor: "white",
    alignSelf: "center",
    padding: "3%",
    borderRadius: 20,

    marginTop: "5%",
  },
  name__text: {
    fontSize: RFValue(18),
    width: "100%",
    color: Colors.secondary,
    marginBottom: "5%",
  },
  info__container: {
    marginLeft: "6%",
  },
  label__text: {
    fontSize: RFValue(10),
    color: Colors.secondary,
    opacity: 0.8,
  },
  text__group: {
    marginBottom: "2%",
    flexDirection: "row",
    alignItems: "center",
  },
  data__text: {
    fontSize: RFValue(10),
    color: Colors.primary,
    position: "absolute",
    right: -20,
  },
  fim__container: {
    width: "80%",
    backgroundColor: "white",
    alignSelf: "center",
    alignItems: "center",
    paddingVertical: "3%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    borderRadius: 15,
    marginTop: "5%",
  },
  fim__header: {
    fontSize: RFValue(16),
    color: Colors.secondary,
  },
  fim__status: {
    fontSize: RFValue(12),
    color: "red",
  },

  requirements__container: {
    flexDirection: "row",
    backgroundColor: "white",
    width: "80%",
    alignSelf: "center",
    paddingHorizontal: "5%",
    paddingVertical: "4%",
    marginVertical: "2%",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    borderRadius: 15,
  },
  file__text: {
    fontSize: RFValue(13),
    color: Colors.primary,
  },
  type__text: {
    fontSize: RFValue(11),
  },
  confirm__button: {
    width: "80%",
    backgroundColor: Colors.secondary,
    alignSelf: "center",
    alignItems: "center",
    paddingVertical: "5%",
    borderRadius: 25,
    marginTop: "10%",
  },
  confirm__text: {
    fontSize: RFValue(20),
    color: "white",
  },

  metrics__container: {
    flexDirection: "row",
    width: "80%",
    alignSelf: "center",
    justifyContent: "space-between",
    marginTop: "3%",
  },
  single__metric: {
    width: "30%",
    backgroundColor: "white",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    paddingVertical: "5%",
    borderRadius: 15,
    justifyContent: "space-between",
  },
  number__text: {
    color: Colors.primary,
    fontSize: RFValue(40),
  },
  metric__text: {
    fontSize: RFValue(13),
    color: Colors.primary,
  },
  total__text: {
    fontSize: RFValue(10),
    color: Colors.secondary,
    paddingBottom: "2%",
    width: "90%",
    textAlign: "center",
  },

  fim__status: {
    textAlign: "center",
    fontWeight: "bold",
  },

  docu__text: {
    marginLeft: "10%",
    color: Colors.secondary,
    marginBottom: 5,
    opacity: 0.8,
  },
});
