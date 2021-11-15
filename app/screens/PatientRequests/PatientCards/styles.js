import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors} from '../../../config';
import {deviceHeight} from '../../../utils/device.utility';
export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '85%',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,

    marginVertical: 10,
    flexDirection: 'row',
    padding: '4%',
    borderRadius: 30,
  },
  image: {
    height: deviceHeight / 7,
    width: deviceHeight / 9,
    borderRadius: 20,
  },
  text__container: {
    marginLeft: '7%',
    marginTop: '7%',
  },
  name__text: {
    fontSize: RFValue(15),
    fontWeight: 'bold',
  },
  sub__text: {
    fontSize: RFValue(12),
    marginTop: '2%',
    color: Colors.lightGray,
  },
});
