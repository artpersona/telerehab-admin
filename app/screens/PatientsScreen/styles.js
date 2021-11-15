import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors} from '../../config';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  wrapper: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },

  indicators__container: {
    flexDirection: 'row',
    width: '60%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginTop: '10%',
  },

  circle__container: {
    width: 14,
    height: 14,
    borderRadius: 100,
    marginRight: 10,
  },

  indicator: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  indicator__text: {
    fontSize: RFValue(12),
    color: Colors.lightGray,
  },
});
