import React from "react";
import { View } from "react-native";
import styles from "./styles";
function SliderItem({ isActive }) {
  return (
    <View
      style={
        isActive ? [styles.sliderItem, styles.isActive] : styles.sliderItem
      }
    />
  );
}

export default SliderItem;
