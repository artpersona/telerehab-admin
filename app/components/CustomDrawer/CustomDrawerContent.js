import React, {useContext, useState} from "react";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";

import {Button} from "native-base";
import {View, Image, Text} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import styles from "./styles";
import {TouchableOpacity} from "react-native-gesture-handler";
import {useAuthContext} from "../../shared/contexts/AuthContext";

function CustomDrawerContent(props) {
  const {state, descriptors, navigation, style} = props;
  const {user} = useAuthContext();
  return (
    <View style={styles.container}>
      <View style={styles.image__container}>
        <Image
          style={styles.image}
          source={{
            uri: "https://thumbs.dreamstime.com/b/portrait-happy-young-handsome-indian-man-doctor-smiling-studio-shot-against-white-background-137823661.jpg",
          }}
          resizeMode="cover"
        />
        <Text style={styles.doctor__name}>
          Dr. {`${user.first_name} ${user.last_name}`}
        </Text>
      </View>
      <DrawerContentScrollView {...props}>
        {state.routes.map((route, index) => {
          const {drawerLabel, activeTintColor, groupName} =
            descriptors[route.key].options;
          return (
            <DrawerItem
              label={drawerLabel}
              onPress={() => navigation.navigate(route.name)}
              labelStyle={styles.labelStyle}
              key={route.key.toString()}
            />
          );
        })}
      </DrawerContentScrollView>
    </View>
  );
}

export default CustomDrawerContent;
