import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles.js';
import Foundation from 'react-native-vector-icons/Foundation';
import {Colors} from '../../config';
function SelectGender({genderActive, setGenderActive}) {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.gender__group}>
          <TouchableOpacity
            style={
              genderActive == 'male'
                ? [styles.gender__container, styles.gender__active]
                : styles.gender__container
            }
            onPress={() => setGenderActive('male')}>
            <Foundation
              name="male-symbol"
              size={23}
              color={genderActive == 'male' ? 'white' : Colors.darkGray}
            />
          </TouchableOpacity>
          <Text style={styles.gender__text}>Male</Text>
        </View>

        <View style={styles.gender__group}>
          <TouchableOpacity
            style={
              genderActive == 'female'
                ? [styles.gender__container, styles.gender__active]
                : styles.gender__container
            }
            onPress={() => setGenderActive('female')}>
            <Foundation
              name="female-symbol"
              size={23}
              color={genderActive == 'female' ? 'white' : Colors.darkGray}
            />
          </TouchableOpacity>
          <Text style={styles.gender__text}>Female</Text>
        </View>
      </View>
    </View>
  );
}

export default SelectGender;
