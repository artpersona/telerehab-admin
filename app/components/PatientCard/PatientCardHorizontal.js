import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import {Colors} from '../../config';

function PatientCardHorizontal({data}) {
  return (
    <View style={{alignItems: 'center'}}>
      <FastImage
        style={[
          styles.image,
          {borderColor: Colors.primary, marginRight: 0, bottom: -30},
        ]}
        source={{
          uri: data.uri,
          headers: {Authorization: 'someAuthToken'},
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View style={styles.container}>
        <View style={styles.details__container}>
          <Text>{data.name}</Text>
          <Text
            style={
              styles.info__text
            }>{`${data.age} yrs old, ${data.gender}`}</Text>
        </View>
      </View>
    </View>
  );
}

export default PatientCardHorizontal;
