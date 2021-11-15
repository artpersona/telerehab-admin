import {StyleSheet} from 'react-native';
import {Colors} from '../../../config';
import {RFValue} from 'react-native-responsive-fontsize';
export default StyleSheet.create({
  upload__container: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: Colors.inputBackground,
    alignItems: 'center',
    padding: '5%',
    borderRadius: 20,
  },
  upload__icon: {
    position: 'absolute',
    right: 30,
  },
  upload__text: {
    fontSize: RFValue(12),
    fontFamily: 'Roboto',
    color: Colors.secondary,
  },
});
