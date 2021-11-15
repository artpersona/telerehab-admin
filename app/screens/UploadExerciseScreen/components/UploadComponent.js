import React, {useState} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Icon2 from 'react-native-vector-icons/AntDesign';
import {ImagePickerModal} from '../../../components';
import styles from './styles';
import {Colors} from '../../../config';
function UploadComponent({data_name, setUploadData, uploadData}) {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <TouchableOpacity
        style={[styles.upload__container]}
        onPress={() => setVisible(true)}>
        <Text style={styles.upload__text}>
          {uploadData[data_name] != ''
            ? 'Reselect Document'
            : 'Upload Document'}
        </Text>
        {uploadData[data_name] != '' ? (
          <Icon2
            name={'checkcircle'}
            size={17}
            color={Colors.success}
            style={styles.upload__icon}
          />
        ) : (
          <Icon2
            name={'upload'}
            size={15}
            color={Colors.secondary}
            style={styles.upload__icon}
          />
        )}
      </TouchableOpacity>

      <ImagePickerModal
        visible={visible}
        setVisible={setVisible}
        data_name={data_name}
        setUploadData={setUploadData}
        uploadData={uploadData}
      />
    </>
  );
}

export default UploadComponent;
