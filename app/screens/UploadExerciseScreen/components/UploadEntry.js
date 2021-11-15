import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from '../styles';
import UploadComponent from './UploadComponent';
function UploadEntry({
  step_num,
  data_name,
  setUploadData,
  uploadData,
  formData,
  setFormData,
  index,
  description,
}) {
  const changeDescription = text => {
    let tempData = {...formData};
    tempData.visuals[index].description = text;
    setFormData(tempData);
  };
  return (
    <View>
      <Text style={styles.form__label}>Step {step_num}</Text>
      <View style={{marginBottom: '3%'}}>
        <UploadComponent
          setUploadData={setUploadData}
          uploadData={uploadData}
          data_name={data_name}
        />
      </View>

      <Text style={styles.form__label}>Description</Text>
      <TextInput
        multiline={true}
        numberOfLines={5}
        onChangeText={changeDescription}
        value={description}
        style={styles.textAreaContainerStyle}
      />
    </View>
  );
}

export default UploadEntry;
