import React from 'react';
import {Animated, View, TouchableOpacity} from 'react-native';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import PatientPending from '../../screens/PatientPendings/PatientPending';
import PatientList from '../../screens/PatientManagemnt/PatientList';
import All from '../../screens/PatientsScreen/All';
import New from '../../screens/PatientsScreen/New';
import Old from '../../screens/PatientsScreen/Old';

import Pending from '../../screens/PatientsScreen/Pending';

import {Colors} from '../../config';
import {CustomHeader} from '../../components';
import styles from './styles';

const Tab = createMaterialTopTabNavigator();
function PatientTab() {
  return (
    <>
      <CustomHeader showNavButton customPageTitle="Patients" />
      <Tab.Navigator
        initialRouteName="Pendings"
        activeColor="red"
        tabBar={props => <MyTabBar {...props} />}>
        <Tab.Screen name="All" component={All} />
        <Tab.Screen name="New" component={New} />
        <Tab.Screen name="Old" component={Old} />
        <Tab.Screen name="Pending" component={Pending} />
      </Tab.Navigator>
    </>
  );
}

function MyTabBar({state, descriptors, navigation, position}) {
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
              type: 'tabPress',
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
              type: 'tabLongPress',
              target: route.key,
            });
          };

          const inputRange = state.routes.map((_, i) => i);
          const borderWidth = position.interpolate({
            inputRange,
            outputRange: inputRange.map(i => (i === index ? 30 : 0)),
            extrapolateRight: 'clamp',
          });

          const textScale = position.interpolate({
            inputRange,
            outputRange: inputRange.map(i => (i === index ? 1.5 : 1)),
            extrapolate: 'clamp',
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
                            fontWeight: 'bold',
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

export default PatientTab;
