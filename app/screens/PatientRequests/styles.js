import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header__container: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    backgroundColor: 'white',
    width: '75%',
    alignSelf: 'center',
    alignItems: 'center',
    paddingVertical: '4%',
    borderRadius: 20,
    borderWidth: 5,
    borderColor: 'whitesmoke',
    marginVertical: '5%',
  },
  request__text: {
    fontSize: RFValue(11),
  },
});
