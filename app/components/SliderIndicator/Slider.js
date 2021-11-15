import React from "react";
import { View, Text } from "react-native";
import SliderItem from "./SliderItem";
import styles from "./styles";
function Slider({ numOfCircles, activePosition }) {
  const circles = new Array(numOfCircles).fill(0);
  circles.map((item) => console.log("render"));
  return (
    <View style={styles.slider__container}>
      {circles.map((item, index) => (
        <SliderItem isActive={index < activePosition} key={index.toString()} />
      ))}
    </View>
  );
}
// activePosition >= index
export default Slider;
