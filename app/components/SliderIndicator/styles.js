import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "../../config";
export default StyleSheet.create({
  slider__container: {
    flexDirection: "row",
  },
  sliderItem: {
    width: RFValue(10),
    height: RFValue(10),
    borderRadius: 100,
    borderWidth: 1.5,
    borderColor: Colors.secondary,
    marginHorizontal: 3,
  },

  isActive: {
    backgroundColor: Colors.primary,
  },
});
