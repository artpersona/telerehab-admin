import {StyleSheet} from 'react-native';
import {Colors} from '../../config';
import {deviceHeight} from '../../utils/device.utility';
import {RFValue} from 'react-native-responsive-fontsize';
export default StyleSheet.create({
  patient__container: {
    width: '100%',
    backgroundColor: 'white',
    borderBottomWidth: 2,
    borderColor: 'whitesmoke',
    paddingVertical: 10,
  },

  image: {
    borderWidth: 3,
    height: deviceHeight / 12,
    width: deviceHeight / 12,
    borderRadius: 100,
    borderWidth: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    marginRight: 10,
  },

  image__container: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  name__text: {
    fontSize: RFValue(14),
  },
  info__text: {
    fontSize: RFValue(11),
    color: Colors.lightGray,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '95%',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },

  button__group: {
    flexDirection: 'row',
  },
  button: {
    marginHorizontal: 3,
    backgroundColor: 'red',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
  },
  text__button: {
    fontSize: RFValue(12),
  },
  add__indicator: {
    width: 50,
    height: 50,
    backgroundColor: 'whitesmoke',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 5,
    borderColor: Colors.secondary,
  },

  percent__text: {
    fontSize: RFValue(10),
    color: Colors.primary,
  },
});
