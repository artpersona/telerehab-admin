import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors} from '../../../config';
export default StyleSheet.create({
  container: {
    width: '92%',
    height: '99%',
    borderRadius: 40,
    justifyContent: 'center',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    alignSelf: 'center',
  },
  wrapper: {
    width: '95%',
    height: '90%',
    alignSelf: 'center',
  },
  form__row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    margin: 0,
    padding: 0,
  },
  width_100: {
    width: '95%',
  },
  width_80: {
    width: '70%',
  },

  width_50: {
    width: '50%',
  },

  width_20: {
    width: '20%',
  },

  placeholder__text: {
    fontFamily: 'Roboto_light',
    fontSize: RFValue(13),
    marginLeft: 15,
  },

  inputContainerStyle: {
    backgroundColor: Colors.inputBackground,
    borderRadius: RFValue(15),
    borderWidth: 1,
    borderColor: Colors.inputBackground,
    height: 40,
  },

  container__collapsible: {
    backgroundColor: 'red',
    flexGrow: 1,
    width: '92%',
    alignSelf: 'center',
  },
  contentContainer: {
    width: '100%',
    height: 600,
    backgroundColor: 'green',
  },

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
  row: {
    marginVertical: 10,
  },
  upload__label: {
    alignItems: 'center',
    paddingBottom: '2%',
  },
  label__text: {
    fontFamily: 'Roboto',
    fontSize: RFValue(12),
    color: Colors.lightGray,
  },
});
