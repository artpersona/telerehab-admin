import React from 'react';
import {Input} from 'react-native-elements';
import {useController} from 'react-hook-form';

const CustomInput = props => {
  const {control, name, rules} = props;

  const {field} = useController({
    control,
    defaultValue: '',
    name,
    rules: rules,
  });
  return (
    <Input
      {...props}
      containerStyle={{
        paddingHorizontal: 0,
      }}
      autoCapitalize="none"
      value={field.value}
      onChangeText={field.onChange}
    />
  );
};

export default CustomInput;
