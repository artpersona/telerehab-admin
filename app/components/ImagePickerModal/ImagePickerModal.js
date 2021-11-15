import React from 'react';
import {View, Text, Modal, TouchableOpacity, ToastAndroid} from 'react-native';
import styles from './styles';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
function ImagePickerModal({
  visible,
  setVisible,
  data_name,
  setUploadData,
  uploadData,
}) {
  const cameraOptions = {
    mediaType: 'photo',
    cameraType: 'front',
  };

  const handleLaunchCamera = () => {
    launchCamera(cameraOptions, photoCallBack);
  };

  const handleLaunchLibrary = () => {
    launchImageLibrary(cameraOptions, photoCallBack);
  };

  const photoCallBack = data => {
    if (data.didCancel) {
      console.log('Action Cancelled');
    } else if (data.error) {
      console.log('Error encountered: ', data.error);
    } else {
      const {uri} = data.assets[0];

      let tempObj = {...uploadData};
      tempObj[data_name] = uri;
      setUploadData(tempObj);
      ToastAndroid.show('Document Added', ToastAndroid.LONG);
      setVisible(false);
    }
  };

  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.wrapper}>
            <Text style={[styles.text, styles.header__text]}>Select Image</Text>
            <TouchableOpacity onPress={handleLaunchCamera}>
              <Text style={styles.text}>Take Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLaunchLibrary}>
              <Text style={styles.text}>Choose from Library</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{alignSelf: 'flex-end', position: 'absolute', bottom: 0}}
              onPress={() => setVisible(false)}>
              <Text style={styles.cancel__text}>CANCEL</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default ImagePickerModal;
