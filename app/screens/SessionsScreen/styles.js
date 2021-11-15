import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors} from '../../config';
export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  header__text: {
    fontSize: RFValue(13),
    marginHorizontal: 20,
    color: Colors.lightGray,
  },
  list__container: {
    width: '100%',
    alignSelf: 'center',
  },

  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 20,
    backgroundColor: Colors.primary,
  },

  header__container: {
    backgroundColor: 'white',
    height: 30,
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
});
