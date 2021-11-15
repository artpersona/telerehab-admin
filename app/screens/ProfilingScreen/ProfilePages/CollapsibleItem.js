import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Colors} from '../../../config';
import styles from './styles';
import Icon2 from 'react-native-vector-icons/AntDesign';
import {ImagePickerModal} from '../../../components';
function CollapsibleItem({label, data_name, setUploadData, uploadData}) {
  const [visible, setVisible] = useState(false);
  console.log('data name is: ', data_name);
  return (
    <View style={styles.row}>
      {label && (
        <View style={styles.upload__label}>
          <Text style={styles.label__text}>{label}</Text>
        </View>
      )}

      <TouchableOpacity
        style={[styles.upload__container]}
        onPress={() => setVisible(true)}>
        <Text style={styles.upload__text}>
          {uploadData[data_name] != ''
            ? 'Reselect Document'
            : 'Update Document'}
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
    </View>
  );
}

export default CollapsibleItem;
