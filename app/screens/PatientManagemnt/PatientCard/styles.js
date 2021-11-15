import {StyleSheet} from 'react-native';
import {deviceHeight} from '../../../utils/device.utility';
import {Colors} from '../../../config';
import {RFValue} from 'react-native-responsive-fontsize';
export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '80%',
    alignSelf: 'center',
    marginVertical: '4%',
    flexDirection: 'row',
    paddingVertical: '5%',
    paddingHorizontal: '4%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,

    borderRadius: 15,
  },
  image: {
    height: deviceHeight / 12,
    width: deviceHeight / 12,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  text__container: {
    marginLeft: '4%',
  },
  name__text: {
    fontSize: RFValue(14),
  },
  info__text: {
    fontSize: RFValue(11),
    color: Colors.lightGray,
  },
  session__text: {
    fontSize: RFValue(12),
    color: Colors.lightGray,
    marginTop: '4%',
  },
});
