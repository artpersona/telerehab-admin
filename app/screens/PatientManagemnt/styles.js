import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header__text: {
    textAlign: 'center',
    fontSize: RFValue(20),
    marginTop: '5%',
    marginBottom: '3%',
  },
});
