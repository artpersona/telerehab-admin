import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
function MeetingCard({data}) {
  return (
    <View style={styles.meeting__container}>
      <View style={styles.meeting__wrapper}>
        <Text style={styles.meeting__text}>Meeting</Text>
        <Text style={styles.patient__text}>{data.patient}</Text>
        <Text style={styles.time__text}>{data.time}</Text>
      </View>
    </View>
  );
}

export default MeetingCard;
