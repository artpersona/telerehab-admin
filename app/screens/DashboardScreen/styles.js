import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors} from '../../config';
import {deviceWidth} from '../../utils/device.utility';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  wrapper: {
    width: '90%',
    alignSelf: 'center',
    flex: 1,
  },
  welcome__text: {
    fontSize: RFValue(25),
    fontWeight: 'bold',
    color: Colors.primary,
  },
  name__text: {
    fontSize: RFValue(20),
    color: Colors.secondary,
  },
  reminder__container: {
    marginTop: '5%',
  },
  reminder__header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  reminder__text: {
    color: Colors.lightGray,
    fontSize: RFValue(13),
  },
  all__text: {
    color: Colors.secondary,
    fontSize: RFValue(13),
  },
  meeting__container: {
    width: deviceWidth / 1.3,
    backgroundColor: Colors.primary,
    marginHorizontal: 10,
    height: deviceWidth / 2.7,
    borderRadius: 20,
  },
  meeting__wrapper: {
    width: '80%',
    alignSelf: 'center',
  },

  meeting__text: {
    fontSize: RFValue(22),
    color: 'white',
    fontWeight: 'bold',
    marginVertical: '5%',
  },

  patient__text: {
    color: 'white',
    marginVertical: '3%',
  },

  time__text: {
    color: 'white',
  },

  actions__container: {
    backgroundColor: 'white',
    width: '95%',
    alignSelf: 'center',
    paddingVertical: '3%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,

    borderRadius: 40,
    marginTop: '5%',
  },

  actions__wrapper: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  icon__container: {
    alignItems: 'center',
  },
  icon: {
    padding: 15,
    borderRadius: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    backgroundColor: 'white',
  },
  icon__text: {
    paddingVertical: '2%',
    fontSize: RFValue(11),
    color: Colors.lightGray,
  },
  new__patients: {
    marginTop: -10,
  },

  addEx__container: {
    marginHorizontal: 15,
    marginTop: '5%',
  },

  question__text: {
    fontSize: RFValue(14),
    color: Colors.primary,
    fontWeight: 'bold',
  },

  add__container: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
    borderRadius: 30,
    marginTop: '5%',
  },
});
