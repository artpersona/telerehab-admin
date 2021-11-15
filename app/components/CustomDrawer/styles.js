import {StyleSheet} from 'react-native';
import {Colors} from '../../config';
import {RFValue} from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  buttonContainer: {
    top: '44%',
    paddingHorizontal: 10,
    position: 'absolute',
    zIndex: 2,
  },
  iconContainer: {
    height: '12%',
  },
  profileContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    alignContent: 'center',
    justifyContent: 'center',
    height: 100,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    marginLeft: 10,
  },
  image__container: {
    paddingVertical: '13%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  closeIcon: {
    marginRight: 10,
    margin: 10,
  },
  drawerItemContainer: {
    width: '70%',
    justifyContent: 'center',
    justifyContent: 'center',
    marginLeft: 15,
  },
  userName: {
    fontSize: RFValue(14),
    fontWeight: '500',
    lineHeight: 23,
    color: Colors.white,
  },
  userClientId: {
    fontSize: RFValue(12),
    fontWeight: 'bold',
    lineHeight: 14,
    color: Colors.white,
    paddingBottom: 35,
  },
  labelStyle: {
    color: 'white',
    fontSize: RFValue(16),
    fontWeight: 'normal',
    opacity: 0.8,
  },
  border: {
    top: 10,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
  },
  loginText: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  logo: {
    width: '60%',
    height: 100,
    resizeMode: 'contain',
    opacity: 0.2,
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },

  sectionContainer: {
    flex: 1,
    marginTop: '2%',
  },
  sectionHeader: {
    color: Colors.white,
    fontSize: RFValue(18),
    lineHeight: 20,
    fontWeight: 'normal',
  },
  sectionLine: {
    backgroundColor: 'white',
    width: '80%',
    height: 1,
    marginVertical: 5,
  },
  doctor__name: {
    fontSize: RFValue(13),
    marginLeft: '5%',
    color: 'white',
    fontWeight: 'bold',
  },
});
