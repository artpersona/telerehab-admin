import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {CustomHeader, CustomModal} from '../../components';
import {Themes} from '../../config';
import FastImage from 'react-native-fast-image';
import Badge from './Badge/Badge';
import ContactTypes from './ContactTypes/ContactTypes';
import LinearGradient from 'react-native-linear-gradient';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/Feather';
import Icon3 from 'react-native-vector-icons/Fontisto';
import {Colors} from '../../config';

import styles from './styles';
function DoctorsProfile({navigation, route}) {
  // const { data } = route.params;
  const [confirmationModal, setConfirmationModal] = useState(false);
  const [proceedModal, setProceedModal] = useState(false);
  const onConfirmPress = () => {
    // setConfirmationModal(false);
    setProceedModal(true);
  };

  const onProceedPress = () => {
    console.log('facker');
    navigation.navigate('Pending');
  };
  return (
    <>
      <CustomHeader showNavButton />
      <View style={styles.container}>
        <View style={styles.top__container}>
          <View style={styles.wrapper}>
            <Text style={styles.edit__text}>Edit Profile</Text>
            <View style={styles.profpic__container}>
              <LinearGradient
                colors={['#FFFFFF', '#D8D8D8']}
                start={{x: 0.0, y: 1.0}}
                end={{x: 1.0, y: 1.0}}
                style={styles.gradient__border}>
                <FastImage
                  style={styles.image}
                  source={{
                    uri: 'https://thumbs.dreamstime.com/b/portrait-happy-young-handsome-indian-man-doctor-smiling-studio-shot-against-white-background-137823661.jpg',
                    headers: {Authorization: 'someAuthToken'},
                    priority: FastImage.priority.normal,
                  }}
                  resizeMode={FastImage.resizeMode.cover}
                />
              </LinearGradient>

              <View style={styles.name__container}>
                <Text style={styles.name__text}>Dr. Raymond Gonzaga</Text>
                <Text style={styles.type__text}>Vascular Neurologist</Text>
              </View>
            </View>
            <View style={styles.badges__container}>
              <Badge
                Icon={
                  <Icon
                    name={'md-people-outline'}
                    size={22}
                    color={Colors.primary}
                  />
                }
                iconContainerColor={'rgba(122, 206, 250, 0.15)'}
              />
              <Badge
                Icon={
                  <Icon
                    name={'md-ribbon-outline'}
                    size={22}
                    color={Colors.primary}
                  />
                }
                iconContainerColor={'rgba(253, 241, 243, 0.5)'}
              />
              <Badge
                Icon={<Icon2 name={'star'} size={22} color={Colors.primary} />}
                iconContainerColor={'rgba(254, 246, 236, 0.4)'}
              />
            </View>
          </View>
        </View>
        <View style={styles.bottom__container}>
          <View style={styles.section__container}>
            <Text style={styles.section__header}>About Doctor</Text>
            <Text style={styles.subText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              eget eros auctor, vulputate augue et, lacinia orci. Quisque vel
              felis.
            </Text>
          </View>

          <View style={styles.section__container}>
            <Text style={styles.section__header}>Working Time</Text>
            <Text style={styles.subText}>Mon - Sat (08:30 AM</Text>
          </View>

          <View style={styles.section__container}>
            <Text style={styles.section__header}>Communication</Text>
            <ContactTypes
              Icon={
                <Icon3
                  name={'email'}
                  size={25}
                  color={Colors.primary}
                  style={{marginRight: '5%'}}
                />
              }
              label="Email Address"
              data="jp11perez@gmail.com"
            />
            <ContactTypes
              Icon={
                <Icon2
                  name={'phone'}
                  size={25}
                  color={Colors.primary}
                  style={{marginRight: '5%'}}
                />
              }
              label="Telephone Number"
              data="(02) 888 8171"
            />
          </View>
        </View>
        <View style={{marginTop: '3%', width: '90%', alignSelf: 'center'}}>
          <Button
            buttonStyle={Themes.buttonPrimary}
            title={'SELECT'}
            titleStyle={Themes.buttonTextPrimary}
            onPress={() => setConfirmationModal(true)}
          />
        </View>
      </View>
    </>
  );
}

export default DoctorsProfile;
