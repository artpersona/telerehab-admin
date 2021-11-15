import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors} from '../../config';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: 80,
  },

  wrapper: {
    flexDirection: 'row',
    width: '40%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginTop: '2%',
  },
  gender__container: {
    width: 40,
    height: 40,
    borderRadius: 1000,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F7F9',
  },

  gender__active: {
    backgroundColor: Colors.secondary,
  },

  gender__text: {
    color: Colors.secondary,
    fontSize: RFValue(11),
    textAlign: 'center',
    marginTop: '15%',
  },
});
