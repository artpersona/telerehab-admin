import React from 'react';
import {View, ScrollView, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import UploadEntry from './components/UploadEntry';
import {useIsFocused} from '@react-navigation/native';

function UploadVisualsScreen({
  uploadData,
  setUploadData,
  formData,
  setFormData,
  setActiveScreen,
}) {
  // visuals: [
  //   {step_num: 1, description: '', name: 'img1'},
  //   {step_num: 2, description: '', name: 'img2'},
  // ],

  const addStep = () => {
    let stepNum = formData.visuals.length + 1;
    let addFormData = {
      step_num: stepNum,
      description: '',
      name: `img${stepNum}`,
    };
    let tempFormData = {...formData};
    tempFormData.visuals.push(addFormData);

    let tempUploadData = {...uploadData};
    tempUploadData[`img${stepNum}`] = '';

    console.log('form: ', tempFormData);
    console.log('upload: ', tempUploadData);

    setFormData(tempFormData);
    setUploadData(tempUploadData);
  };

  const removeStep = () => {
    let stepNum = formData.visuals.length;

    let tempFormData = {...formData};
    tempFormData.visuals.pop();
    setFormData(tempFormData);

    let tempUploadData = {...uploadData};
    const modif = omit(tempUploadData, [`img${stepNum}`]);
    setUploadData(modif);

    console.log('form: ', tempFormData);
    console.log('upload: ', modif);
  };

  const omit = (source = {}, omitKeys = []) =>
    Object.keys(source).reduce(
      (output, key) =>
        omitKeys.includes(key) ? output : {...output, [key]: source[key]},
      {},
    );

  const isFocused = useIsFocused();
  if (isFocused) setActiveScreen(1);

  return (
    <ScrollView
      style={styles.upload__container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: '5%'}}>
      <View style={styles.upload__wrapper}>
        {formData.visuals.map((item, index) => {
          return (
            <>
              <UploadEntry
                uploadData={uploadData}
                setUploadData={setUploadData}
                data_name={item.name}
                index={index}
                step_num={item.step_num}
                key={item.step_num}
                formData={formData}
                setFormData={setFormData}
                description={item.description}
              />
              {index != formData.visuals.length - 1 && (
                <View style={styles.lineSeparator} />
              )}

              {index == formData.visuals.length - 1 && (
                <View
                  style={{
                    flexDirection: 'row',
                    width: '50%',
                    alignSelf: 'center',
                    justifyContent: 'space-between',
                    marginVertical: '5%',
                  }}>
                  <TouchableOpacity onPress={addStep}>
                    <Text style={styles.addStep__text}>Add Step</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={removeStep}>
                    <Text style={[styles.addStep__text, {color: 'red'}]}>
                      Remove Step
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </>
          );
        })}
      </View>
    </ScrollView>
  );
}

export default UploadVisualsScreen;
