import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {CustomHeader, CustomInput} from '../../../components';
import {Button} from 'react-native-elements';
import {Themes} from '../../../config';
import styles from './styles';
import {useAuthContext} from '../../../shared/contexts/AuthContext';
import {useForm} from 'react-hook-form';

function Login({navigation}) {
  const {loginWithGoogle} = useAuthContext();

  const nagivateToRegister = () => {
    navigation.navigate('Register');
  };
  const navigateToProfiling = () => {
    setMoveProfileLoading(true);
    setTimeout(() => {
      setMoveProfileLoading(false);
      navigation.navigate('Profiling');
    }, 1000);
  };

  const [moveProfileLoading, setMoveProfileLoading] = useState(false);

  const {control, handleSubmit} = useForm();

  return (
    <>
      <CustomHeader />
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={styles.welcome__text}>Welcome Back!</Text>
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
            // loading={isSigningUpGoogle}
            onPress={loginWithGoogle}
          />

          <View style={styles.withEmail__container}>
            <Text style={styles.login__text}>OR LOG IN WITH EMAIL</Text>
            <CustomInput
              placeholder="Email Address"
              style={styles.placeholder__text}
              inputContainerStyle={styles.inputContainerStyle}
              containerStyle={{width: '100%', margin: 0}}
              control={control}
              name="email"
            />
            <CustomInput
              placeholder="Password"
              style={styles.placeholder__text}
              inputContainerStyle={styles.inputContainerStyle}
              control={control}
              name="password"
            />
            <Text style={styles.forgot__text}>Forgot Password?</Text>
          </View>
          <View style={{marginTop: '20%'}}>
            <Button
              buttonStyle={Themes.buttonPrimary}
              title="LOG IN"
              titleStyle={Themes.buttonTextPrimary}
              onPress={navigateToProfiling}
              loading={moveProfileLoading}
            />
          </View>

          <View style={styles.footer__text_container}>
            <Text style={styles.footer__text}>DON'T HAVE AN ACCOUNT? </Text>
            <TouchableOpacity onPress={nagivateToRegister}>
              <Text style={styles.footer__link}>SIGN UP</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}

export default Login;
