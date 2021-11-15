import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';

function PatientCard({data}) {
  const navigation = useNavigation();

  const navigateToPatientScreen = () =>
    navigation.navigate('PatientScreen', {data: data, isPending: false});
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={navigateToPatientScreen}>
      <FastImage
        style={styles.image}
        source={{
          uri: data.uri,
          headers: {Authorization: 'someAuthToken'},
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View style={styles.text__container}>
        <Text style={styles.name__text}>{data.name}</Text>
        <Text
          style={
            styles.info__text
          }>{`${data.age} yrs old, ${data.gender}`}</Text>
        <Text style={styles.session__text}>Session 3/4 exercise 3/10</Text>
      </View>
    </TouchableOpacity>
  );
}

export default PatientCard;
