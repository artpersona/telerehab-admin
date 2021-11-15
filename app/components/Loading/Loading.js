import LottieView from "lottie-react-native";
import React from "react";

function Loading() {
  return (
    <LottieView
      source={require("../../../assets/animations/loading_animation.json")}
      loop
      autoPlay
      style={{ flex: 1, backgroundColor: "rgba(255, 255, 255, 0.5)" }}
    />
  );
}

export default Loading;
