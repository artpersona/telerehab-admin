import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

function PatientCards({data}) {
  const navigation = useNavigation();

  const navigateToPatientScreen = () =>
    navigation.navigate('PatientScreen', {data: data, isPending: true});
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={navigateToPatientScreen}>
      <View style={{flexDirection: 'row', width: '88%'}}>
        <View style={styles.image__container}>
          <FastImage
            style={styles.image}
            source={{
              uri: data.uri,
              headers: {Authorization: 'someAuthToken'},
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
        </View>

        <View style={styles.text__container}>
          <Text style={styles.name__text}>{data.name}</Text>
          <Text
            style={
              styles.sub__text
            }>{`${data.age} yrs old, ${data.gender}`}</Text>
        </View>
      </View>
      <Icon
        name={'chevron-right'}
        size={40}
        color="black"
        style={{width: '10%', alignSelf: 'center'}}
      />
    </TouchableOpacity>
  );
}

export default PatientCards;
