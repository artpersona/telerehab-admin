import React from 'react';
import {View, KeyboardAvoidingView} from 'react-native';
import {CustomInput, CustomInputLabel} from '../../../components';
import styles from './styles';
import CollapsibleItem from './CollapsibleItem';
function ProfilePage2({
  setValue,
  errors,
  user,
  control,
  setUploadData,
  uploadData,
}) {
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView>
        <View style={styles.wrapper}>
          <View style={styles.form__row}>
            <View style={styles.width_100}>
              <CustomInputLabel
                isRequired={true}
                labelText={'PRC ID'}
                labelPosition={'left'}
              />

              <CollapsibleItem
                label="Front ID"
                uploadData={uploadData}
                setUploadData={setUploadData}
                data_name="prc_id_front"
              />
              <CollapsibleItem
                label="Back ID"
                uploadData={uploadData}
                setUploadData={setUploadData}
                data_name="prc_id_back"
              />
            </View>
          </View>

          <View style={{marginTop: '5%'}}>
            <View style={styles.form__row}>
              <View style={styles.width_100}>
                <CustomInput
                  placeholder="Input Address "
                  style={styles.placeholder__text}
                  inputContainerStyle={
                    errors?.blk
                      ? [styles.inputContainerStyle, {borderColor: 'red'}]
                      : styles.inputContainerStyle
                  }
                  containerStyle={{width: '100%', margin: 0}}
                  label={
                    <CustomInputLabel
                      isRequired={true}
                      labelText={'Clinic Name'}
                      labelPosition={'left'}
                    />
                  }
                  errorStyle={{margin: 0, height: 10}}
                  onChangeText={input => setValue('blk', input, true)}
                  defaultValue={user?.blk}
                  control={control}
                />
              </View>
            </View>

            <View style={styles.form__row}>
              <View style={styles.width_100}>
                <CustomInput
                  placeholder="Input Street"
                  style={styles.placeholder__text}
                  inputContainerStyle={
                    errors?.street
                      ? [styles.inputContainerStyle, {borderColor: 'red'}]
                      : styles.inputContainerStyle
                  }
                  containerStyle={{width: '100%', margin: 0}}
                  label={
                    <CustomInputLabel
                      isRequired={true}
                      labelText={'Clinic Address'}
                      labelPosition={'left'}
                    />
                  }
                  errorStyle={{margin: 0, height: 10}}
                  onChangeText={input => setValue('street', input, true)}
                  defaultValue={user?.street}
                  control={control}
                />
              </View>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

export default ProfilePage2;
