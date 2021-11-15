import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors} from '../../config';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },

  tab__container: {
    backgroundColor: 'white',
    height: 60,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },

  tab__wrapper: {
    width: '93%',
    flexDirection: 'row',
    flex: 1,
    alignSelf: 'center',
  },

  tab__text: {
    textAlign: 'center',
  },

  tab__content: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 5,
  },
  tab__indicator: {
    backgroundColor: Colors.secondary,
    position: 'absolute',
    bottom: 0,
    borderRadius: 100,
    alignSelf: 'center',
    height: 3,
    width: 2,
  },

  button: {
    backgroundColor: Colors.secondary,
    paddingVertical: '5%',
    paddingHorizontal: '40%',
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },

  button__text: {
    fontSize: RFValue(15),
    color: 'white',
  },
});
