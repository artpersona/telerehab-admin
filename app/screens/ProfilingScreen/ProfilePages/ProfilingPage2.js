import React from 'react';
import {View, KeyboardAvoidingView} from 'react-native';
import {CustomInput, CustomInputLabel} from '../../../components';
import styles from './styles';
function ProfilePage2({setValue, errors, user, control}) {
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView>
        <View style={styles.wrapper}>
          <View style={styles.form__row}>
            <View style={styles.width_100}>
              <CustomInput
                placeholder="Input Province"
                style={styles.placeholder__text}
                inputContainerStyle={
                  errors?.province
                    ? [styles.inputContainerStyle, {borderColor: 'red'}]
                    : styles.inputContainerStyle
                }
                containerStyle={{width: '100%', margin: 0}}
                label={
                  <CustomInputLabel
                    isRequired={true}
                    labelText={'Province'}
                    labelPosition={'left'}
                  />
                }
                errorStyle={{margin: 0, height: 10}}
                onChangeText={input => setValue('province', input, true)}
                defaultValue={user?.province}
                control={control}
                name="province"
                rules={{
                  required: {
                    value: true,
                    message: 'Email is required',
                  },
                }}
              />
            </View>
          </View>

          <View style={styles.form__row}>
            <View style={styles.width_100}>
              <CustomInput
                placeholder="Input Province"
                style={styles.placeholder__text}
                inputContainerStyle={
                  errors?.city
                    ? [styles.inputContainerStyle, {borderColor: 'red'}]
                    : styles.inputContainerStyle
                }
                containerStyle={{width: '100%', margin: 0}}
                label={
                  <CustomInputLabel
                    isRequired={true}
                    labelText={'City/Municipality'}
                    labelPosition={'left'}
                  />
                }
                errorStyle={{margin: 0, height: 10}}
                onChangeText={input => setValue('city', input, true)}
                defaultValue={user?.city}
                control={control}
                name="city"
                rules={{
                  required: {
                    value: true,
                    message: 'Email is required',
                  },
                }}
              />
            </View>
          </View>

          <View style={styles.form__row}>
            <View style={styles.width_100}>
              <CustomInput
                placeholder="Input Baranggay"
                style={styles.placeholder__text}
                inputContainerStyle={
                  errors?.baranggay
                    ? [styles.inputContainerStyle, {borderColor: 'red'}]
                    : styles.inputContainerStyle
                }
                containerStyle={{width: '100%', margin: 0}}
                label={
                  <CustomInputLabel
                    isRequired={true}
                    labelText={'Baranggay'}
                    labelPosition={'left'}
                  />
                }
                errorStyle={{margin: 0, height: 10}}
                onChangeText={input => setValue('baranggay', input, true)}
                defaultValue={user?.baranggay}
                control={control}
                name="baranggay"
                rules={{
                  required: {
                    value: true,
                    message: 'Email is required',
                  },
                }}
              />
            </View>
          </View>

          <View style={styles.form__row}>
            <View style={styles.width_100}>
              <CustomInput
                placeholder="Input Address "
                style={styles.placeholder__text}
                inputContainerStyle={
                  errors?.blk
                    ? [styles.inputContainerStyle, {borderColor: 'red'}]
                    : styles.inputContainerStyle
                }
                containerStyle={{width: '100%', margin: 0}}
                label={
                  <CustomInputLabel
                    isRequired={true}
                    labelText={'Blk/Lot/Unit/Bldg'}
                    labelPosition={'left'}
                  />
                }
                errorStyle={{margin: 0, height: 10}}
                onChangeText={input => setValue('blk', input, true)}
                defaultValue={user?.blk}
                control={control}
                name="blk"
                rules={{
                  required: {
                    value: true,
                    message: 'Email is required',
                  },
                }}
              />
            </View>
          </View>

          <View style={styles.form__row}>
            <View style={styles.width_100}>
              <CustomInput
                placeholder="Input Street"
                style={styles.placeholder__text}
                inputContainerStyle={
                  errors?.street
                    ? [styles.inputContainerStyle, {borderColor: 'red'}]
                    : styles.inputContainerStyle
                }
                containerStyle={{width: '100%', margin: 0}}
                label={
                  <CustomInputLabel
                    isRequired={true}
                    labelText={'Street'}
                    labelPosition={'left'}
                  />
                }
                errorStyle={{margin: 0, height: 10}}
                onChangeText={input => setValue('street', input, true)}
                defaultValue={user?.street}
                control={control}
                name="street"
                rules={{
                  required: {
                    value: true,
                    message: 'Email is required',
                  },
                }}
              />
            </View>
          </View>

          <View style={styles.form__row}>
            <View style={styles.width_100}>
              <CustomInput
                placeholder="Input Zipcode"
                style={styles.placeholder__text}
                inputContainerStyle={
                  errors?.zip_code
                    ? [styles.inputContainerStyle, {borderColor: 'red'}]
                    : styles.inputContainerStyle
                }
                containerStyle={{width: '100%', margin: 0}}
                label={
                  <CustomInputLabel
                    isRequired={true}
                    labelText={'Zipcode'}
                    labelPosition={'left'}
                  />
                }
                errorStyle={{margin: 0, height: 10}}
                onChangeText={input => setValue('zip_code', input, true)}
                defaultValue={user?.zip_code}
                control={control}
                name="zip_code"
                rules={{
                  required: {
                    value: true,
                    message: 'Email is required',
                  },
                }}
              />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

export default ProfilePage2;
