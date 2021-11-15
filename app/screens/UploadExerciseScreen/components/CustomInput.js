import React from 'react';
import {Input} from 'react-native-elements';
import {View, Text} from 'react-native';
import styles from '../styles.js';
function CustomInput({label, value, setValue, error}) {
  return (
    <View style={styles.form__group}>
      <Text style={styles.form__label}>{label}</Text>
      <Input
        containerStyle={{
          paddingHorizontal: 0,
        }}
        inputContainerStyle={
          error
            ? [styles.inputContainerStyle, {borderColor: 'red'}]
            : styles.inputContainerStyle
        }
        autoCapitalize="none"
        value={value}
        onChangeText={text => setValue(text)}
      />
    </View>
  );
}

export default CustomInput;
