import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {CustomInput, CustomInputLabel, SelectGender} from '../../../components';
import styles from './styles';
function ProfilePage({errors, user, control, genderActive, setGenderActive}) {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.form__row}>
          <View style={styles.width_80}>
            <CustomInput
              placeholder="Input First Name"
              style={styles.placeholder__text}
              inputContainerStyle={
                errors?.first_name
                  ? [styles.inputContainerStyle, {borderColor: 'red'}]
                  : styles.inputContainerStyle
              }
              containerStyle={{width: '100%', margin: 0}}
              label={
                <CustomInputLabel
                  isRequired={true}
                  labelText={'First Name'}
                  labelPosition={'left'}
                />
              }
              errorStyle={{margin: 0, height: 10}}
              control={control}
              name="first_name"
              rules={{
                required: {
                  value: true,
                  message: 'Email is required',
                },
              }}
            />
          </View>
          <View style={styles.width_20}>
            <CustomInput
              style={styles.placeholder__text}
              inputContainerStyle={styles.inputContainerStyle}
              containerStyle={{width: '100%', margin: 0}}
              label={
                <CustomInputLabel
                  isRequired={false}
                  labelText={'M.I'}
                  labelPosition={'center'}
                />
              }
              errorStyle={{margin: 0, height: 10}}
              control={control}
              name="middle_name"
            />
          </View>
        </View>

        <View style={styles.form__row}>
          <View style={styles.width_80}>
            <CustomInput
              placeholder="Input Last Name"
              style={styles.placeholder__text}
              inputContainerStyle={
                errors?.last_name
                  ? [styles.inputContainerStyle, {borderColor: 'red'}]
                  : styles.inputContainerStyle
              }
              containerStyle={{width: '100%', margin: 0}}
              label={
                <CustomInputLabel
                  isRequired={true}
                  labelText={'Last Name'}
                  labelPosition={'left'}
                />
              }
              errorStyle={{margin: 0, height: 10}}
              control={control}
              name="last_name"
              rules={{
                required: {
                  value: true,
                  message: 'Email is required',
                },
              }}
              // defaultValue={user?.last_name}
            />
          </View>
          <View style={styles.width_20}>
            <CustomInput
              style={styles.placeholder__text}
              inputContainerStyle={styles.inputContainerStyle}
              containerStyle={{width: '100%', margin: 0}}
              label={
                <CustomInputLabel
                  isRequired={false}
                  labelText={'Suffix '}
                  labelPosition={'center'}
                />
              }
              errorStyle={{margin: 0, height: 10}}
              control={control}
              name="suffix"
            />
          </View>
        </View>

        <View style={styles.form__row}>
          <View style={styles.width_80}>
            <CustomInput
              placeholder="Input Birth Date"
              style={styles.placeholder__text}
              inputContainerStyle={
                errors?.birthdate
                  ? [styles.inputContainerStyle, {borderColor: 'red'}]
                  : styles.inputContainerStyle
              }
              containerStyle={{width: '100%', margin: 0}}
              label={
                <CustomInputLabel
                  isRequired={true}
                  labelText={'Birthdate'}
                  labelPosition={'left'}
                />
              }
              errorStyle={{margin: 0, height: 10}}
              control={control}
              name="birthdate"
              rules={{
                required: {
                  value: true,
                  message: 'Email is required',
                },
              }}
              // defaultValue={user?.birthdate}
            />
          </View>
          <View style={styles.width_20}>
            <CustomInput
              style={styles.placeholder__text}
              inputContainerStyle={
                errors?.age
                  ? [styles.inputContainerStyle, {borderColor: 'red'}]
                  : styles.inputContainerStyle
              }
              containerStyle={{width: '100%', margin: 0}}
              label={
                <CustomInputLabel
                  isRequired={true}
                  labelText={'Age '}
                  labelPosition={'center'}
                />
              }
              errorStyle={{margin: 0, height: 10}}
              control={control}
              name="age"
              rules={{
                required: {
                  value: true,
                  message: 'Email is required',
                },
              }}
              // defaultValue={user?.age}
            />
          </View>
        </View>

        <View style={styles.form__row}>
          <View style={styles.width_100}>
            <CustomInputLabel
              isRequired={true}
              labelText={'Contact Number'}
              labelPosition={'left'}
            />
            <SelectGender
              genderActive={genderActive}
              setGenderActive={setGenderActive}
            />
          </View>
        </View>

        <View style={styles.form__row}>
          <View style={styles.width_100}>
            <CustomInput
              placeholder="Input Contact Number"
              style={styles.placeholder__text}
              inputContainerStyle={
                errors?.contact_num
                  ? [styles.inputContainerStyle, {borderColor: 'red'}]
                  : styles.inputContainerStyle
              }
              containerStyle={{width: '100%', margin: 0}}
              label={
                <CustomInputLabel
                  isRequired={true}
                  labelText={'Contact Number'}
                  labelPosition={'left'}
                />
              }
              errorStyle={{margin: 0, height: 10}}
              control={control}
              name="contact_num"
              rules={{
                required: {
                  value: true,
                  message: 'Email is required',
                },
              }}
              // defaultValue={user?.contact_num}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

export default ProfilePage;
