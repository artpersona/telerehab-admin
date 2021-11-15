import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {CustomHeader} from '../../components';
import PatientCards from './PatientCards/PatientCards';
import styles from './styles';

const DATA = [
  {
    id: 1,
    name: 'Marshall Eriksen',
    age: 60,
    gender: 'Male',
    address: 'Davao City',
    guardian: 'Paul Perez',
    contact_num: '0927110900',
    uri: 'https://i.pinimg.com/originals/c2/68/73/c26873991a131ba181f91fb258354bf7.jpg',
  },
  {
    id: 2,
    name: 'Ted Mosby',
    age: 55,
    gender: 'Male',
    address: 'Davao City',
    guardian: 'Paul Perez',
    contact_num: '0927110900',
    uri: 'https://upload.wikimedia.org/wikipedia/en/e/e0/Ted_Mosby.jpg',
  },
  {
    id: 3,
    name: 'Barney Stinson',
    age: 30,
    gender: 'Male',
    address: 'Davao City',
    guardian: 'Paul Perez',
    contact_num: '0927110900',
    uri: 'https://ca-times.brightspotcdn.com/dims4/default/18fecfd/2147483647/strip/true/crop/350x450+0+0/resize/350x450!/quality/90/?url=https%3A%2F%2Fwww.trbimg.com%2Fimg-5305c0c8%2Fturbine%2Fzap-barney-stinson-quotes-intro',
  },
];

function PatientRequests() {
  const renderItem = ({item}) => <PatientCards data={item} />;
  return (
    <>
      <CustomHeader showNavButton />
      <View style={styles.container}>
        <View style={styles.header__container}>
          <Text style={styles.request__text}>New Patient Request</Text>
        </View>
        <FlatList data={DATA} renderItem={renderItem} />
      </View>
    </>
  );
}

export default PatientRequests;
