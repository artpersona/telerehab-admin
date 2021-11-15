import React, {useState, useContext} from "react";
import {View, Text, TouchableOpacity} from "react-native";
import Icon3 from "react-native-vector-icons/AntDesign";
import EvilIcons from "react-native-vector-icons/EvilIcons";
// import { TouchableOpacity } from "react-native-gesture-handler";
import {useNavigation} from "@react-navigation/native";
import {RFValue} from "react-native-responsive-fontsize";
import {Colors} from "../../config";
import styles from "./styles";

function CustomHeader({
  showBackButton,
  customBackgroundColor,
  customPageTitle,
  showNavButton,
}) {
  const navigation = useNavigation();

  return (
    <View
      style={
        customBackgroundColor
          ? [styles.container, {backgroundColor: customBackgroundColor}]
          : styles.container
      }>
      <View style={styles.wrapper}>
        {customPageTitle && (
          <View
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Text
              style={[
                styles.customPage__title,
                {
                  color: Colors.primary,
                  fontWeight: "bold",
                  fontSize: RFValue(15),
                },
              ]}>
              {customPageTitle}
            </Text>
          </View>
        )}
        <View style={styles.action__wrapper}>
          {showBackButton && (
            <View style={styles.clickable__area}>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => {
                  navigation.goBack();
                }}>
                <Icon3 name="arrowleft" size={RFValue(24)} color="#1D3558" />
              </TouchableOpacity>
            </View>
          )}

          {showNavButton && (
            <View style={[styles.clickable__area]}>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => {
                  navigation.toggleDrawer();
                  console.log("clicked!");
                }}>
                <EvilIcons name="navicon" size={RFValue(24)} color="#1D3558" />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </View>
  );
}

CustomHeader.defaultProps = {
  showBackButton: false,
  isAboutUs: false,
};
export default CustomHeader;
