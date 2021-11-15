import React from "react";
import {View, Text, TouchableOpacity, Animated} from "react-native";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import {CustomHeader} from "../../components";
import styles from "./styles";
import {Colors} from "../../config";
import SessionExercises from "./SessionExercises";
const Tab = createMaterialTopTabNavigator();

function SessionTab() {
  return (
    <>
      <CustomHeader showBackButton customPageTitle="Create Session" />
      <Tab.Navigator
        initialRouteName="Pendings"
        activeColor="red"
        tabBar={props => <MyTabBar {...props} />}>
        <Tab.Screen name="All" component={SessionExercises} />
        <Tab.Screen name="Upper" component={SessionExercises} />
        <Tab.Screen name="Lower" component={SessionExercises} />
      </Tab.Navigator>
      <View
        style={{
          height: 90,
          backgroundColor: "white",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,

          elevation: 3,
          justifyContent: "center",
          alignItems: "center",
        }}>
        <View style={styles.button}>
          <Text style={styles.button__text}>Done</Text>
        </View>
      </View>
    </>
  );
}

export function MyTabBar({state, descriptors, navigation, position}) {
  return (
    <View style={styles.tab__container}>
      <View style={styles.tab__wrapper}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({name: route.name, merge: true});
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          const inputRange = state.routes.map((_, i) => i);
          const borderWidth = position.interpolate({
            inputRange,
            outputRange: inputRange.map(i => (i === index ? 30 : 0)),
            extrapolateRight: "clamp",
          });

          const textScale = position.interpolate({
            inputRange,
            outputRange: inputRange.map(i => (i === index ? 1.5 : 1)),
            extrapolate: "clamp",
          });

          const opacity = position.interpolate({
            inputRange,
            outputRange: inputRange.map(i => (i === index ? 1 : 0)),
          });

          return (
            <>
              <TouchableOpacity
                accessibilityRole="button"
                accessibilityState={isFocused ? {selected: true} : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={styles.tab__content}>
                <Animated.Text
                  style={
                    isFocused
                      ? [
                          styles.tab__text,
                          {
                            transform: [{scale: textScale}],
                            fontWeight: "bold",
                            color: Colors.secondary,
                          },
                        ]
                      : styles.tab__text
                  }>
                  {label}
                </Animated.Text>
                {/* <Animated.View
                    style={
                      isFocused
                        ? [
                            styles.tab__indicator,
                            {transform: [{scaleX: borderWidth}]},
                          ]
                        : [styles.tab__indicator]
                    }
                  /> */}
              </TouchableOpacity>
            </>
          );
        })}
      </View>
    </View>
  );
}

export default SessionTab;
