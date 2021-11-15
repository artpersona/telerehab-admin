import React from 'react';
import {View, Text} from 'react-native';
import Icon2 from 'react-native-vector-icons/Ionicons';

import styles from './styles';
function Badge({data, iconContainerColor, Icon, numberText, scalesText}) {
  return (
    <View style={styles.container}>
      <View
        style={[styles.icon__container, {backgroundColor: iconContainerColor}]}>
        {Icon}
      </View>
      <Text style={styles.number__text}>1000+</Text>
      <Text style={styles.scales__text}>Patients</Text>
    </View>
  );
}

export default Badge;
