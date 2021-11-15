import React, {useState, useMemo, useEffect} from 'react';
import {View, Text, KeyboardAvoidingView, Image, Alert} from 'react-native';
import {CustomHeader, CustomInput} from '../../../components';
import {Button, colors} from 'react-native-elements';
import {Colors, Themes} from '../../../config';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useAuthContext} from '../../../shared/contexts/AuthContext';
import {useForm} from 'react-hook-form';
import {Schema} from './Schema';
import styles from './styles';
function Register({navigation}) {
  const {registerUserViaEmail} = useAuthContext();

  const [icon, setIcon] = useState('eye-off-outline');
  const [hidePassword, setHidePassword] = useState(true);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const EMAIL_REGEX =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/;

  // useEffect(() => {
  //   Schema.map(field => register({name: field.name}, {...field.validations}));
  // }, [register]);

  const handleEmailRegister = data => {
    const {userName, password, email} = data;
    registerUserViaEmail(userName, email, password)
      .then(() => {
        console.log('Success!');
      })
      .catch(err => Alert.alert(err));
  };

  const iconChange = () => {
    setHidePassword(hidePassword => !hidePassword);
    setIcon(icon =>
      icon == 'eye-off-outline' ? 'eye-outline' : 'eye-off-outline',
    );
  };

  return (
    <>
      <CustomHeader showBackButton />
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <KeyboardAvoidingView
            behavior="position"
            keyboardVerticalOffset={styles.keyboardVerticalOffset}>
            <Text style={styles.welcome__text}>Create your account</Text>
            <Button
              title="CONTINUE WITH GOOGLE"
              buttonStyle={Themes.buttonGoogle}
              containerStyle={styles.googleButton}
              titleStyle={styles.titleStyle}
              icon={
                <Image
                  source={require('../../../../assets/images/social_google.png')}
                  width={25}
                  height={25}
                />
              }
            />

            <View style={styles.withEmail__container}>
              <Text style={styles.login__text}>OR SIGN UP WITH EMAIL</Text>
              <CustomInput
                placeholder="Username"
                style={styles.placeholder__text}
                containerStyle={{width: '100%', margin: 0}}
                inputContainerStyle={
                  errors?.userName
                    ? [
                        styles.inputContainerStyle,
                        {borderColor: 'red', borderWidth: 1},
                      ]
                    : [styles.inputContainerStyle, {borderBottomWidth: 0}]
                }
                errorMessage={errors.userName?.message}
                control={control}
                name="userName"
                rules={{
                  required: {
                    value: true,
                    message: 'Username is required',
                  },
                }}
              />
              <CustomInput
                placeholder="Email Address"
                style={styles.placeholder__text}
                inputContainerStyle={
                  errors?.email
                    ? [
                        styles.inputContainerStyle,
                        {borderColor: 'red', borderWidth: 1},
                      ]
                    : [styles.inputContainerStyle, {borderBottomWidth: 0}]
                }
                containerStyle={{width: '100%', margin: 0}}
                control={control}
                name="email"
                errorMessage={errors.email?.message}
                rules={{
                  required: {
                    value: true,
                    message: 'Email is required',
                  },
                  pattern: {
                    value: EMAIL_REGEX,
                    message: 'Invalid email format',
                  },
                }}
              />
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                }}>
                <CustomInput
                  placeholder="Password"
                  style={styles.placeholder__text}
                  inputContainerStyle={
                    errors?.password
                      ? [
                          styles.inputContainerStyle,
                          {borderColor: 'red', borderWidth: 1},
                        ]
                      : [styles.inputContainerStyle, {borderBottomWidth: 0}]
                  }
                  secureTextEntry={hidePassword}
                  errorMessage={errors.password?.message}
                  control={control}
                  name="password"
                  rules={{
                    required: {
                      value: true,
                      message: 'Password is required',
                    },
                  }}
                />
                <Icon
                  name={icon}
                  size={25}
                  style={styles.icon__style}
                  color={Colors.primary}
                  onPress={iconChange}
                />
              </View>
            </View>
            <View style={{marginTop: '20%'}}>
              <Button
                buttonStyle={Themes.buttonPrimary}
                title="GET STARTED"
                titleStyle={Themes.buttonTextPrimary}
                onPress={handleSubmit(handleEmailRegister)}
              />
            </View>
          </KeyboardAvoidingView>
        </View>
      </View>
    </>
  );
}

export default Register;
