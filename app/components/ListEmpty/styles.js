import {StyleSheet} from "react-native";
import {RFValue} from "react-native-responsive-fontsize";
import {Colors} from "../../config";
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  empty__text: {
    fontSize: RFValue(13),
    color: Colors.lightGray,
  },
});
