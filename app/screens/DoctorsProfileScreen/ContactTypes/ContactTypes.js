import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
function ContactTypes({Icon, label, data}) {
  return (
    <View style={styles.container}>
      {Icon}
      <View>
        <Text style={styles.label__text}>{label}</Text>
        <Text style={styles.data__text}>{data}</Text>
      </View>
    </View>
  );
}

export default ContactTypes;
