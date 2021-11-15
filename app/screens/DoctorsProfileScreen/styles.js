import {StyleSheet, StatusBar} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors} from '../../config';
import {deviceHeight, deviceWidth} from '../../utils/device.utility';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  wrapper: {
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  top__container: {
    width: '100%',
    backgroundColor: 'white',
  },
  image: {
    height: deviceHeight / 7.5,
    width: deviceHeight / 7.5,
    borderRadius: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  gradient__border: {
    height: deviceHeight / 7.6,
    width: deviceHeight / 7.6,
    borderRadius: 100,
    alignItems: 'center',
  },
  profpic__container: {
    alignItems: 'center',
    marginTop: '5%',
  },
  name__container: {
    marginTop: '7%',
    alignItems: 'center',
    marginBottom: '4%',
  },
  name__text: {
    fontFamily: 'Roboto',
    fontSize: RFValue(18),
    marginBottom: '4%',
    color: Colors.primary,
  },
  type__text: {
    fontFamily: 'Roboto',
    fontSize: RFValue(12.5),
    color: Colors.lightGray,
  },

  badges__container: {
    flexDirection: 'row',
    width: '95%',
    justifyContent: 'space-between',
  },
  bottom__container: {
    width: '90%',
    alignSelf: 'center',
    marginTop: '5%',
  },
  section__container: {
    marginVertical: '2%',
  },
  section__header: {
    fontFamily: 'Roboto',
    color: Colors.primary,
    fontSize: RFValue(15),
    marginBottom: '2%',
  },
  subText: {
    fontFamily: 'Roboto',
    fontSize: RFValue(12),
    color: Colors.lightGray,
  },
  edit__text: {
    position: 'absolute',
    left: 0,
    color: Colors.secondary,
    fontFamily: 'OpenSans',
    fontSize: RFValue(13),
  },
});
