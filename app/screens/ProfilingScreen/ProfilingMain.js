import React, {useRef, useState, useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {CustomHeader, Slider, Loading} from '../../components';
import ProfilePage1 from './ProfilePages/ProfilingPage1';
import ProfilePage2 from './ProfilePages/ProfilingPage2';
import ProfilePage3 from './ProfilePages/ProfilingPage3';
import {Button} from 'react-native-elements';
import {Themes} from '../../config';
import PagerView from 'react-native-pager-view';
import {useForm} from 'react-hook-form';
import styles from './styles';

import {useAuthContext} from '../../shared/contexts/AuthContext';
function ProfilingMain({navigation}) {
  const pagerRef = useRef(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagesTitle, setPagesTitle] = useState([
    'Basic Information',
    'Address',
    'PRC ID',
  ]);
  const [buttonTitle, setButtonTitle] = useState(['Next', 'Proceed', 'Submit']);
  const handlePageScroll = e => {
    setCurrentPage(e.nativeEvent.position + 1);
  };

  const [loading, setLoading] = useState(false);

  const {updateUserProfile} = useAuthContext();

  const submitProfile = data => {
    if (uploadData.prc_id_back != '' && uploadData.prc_id_front != '') {
      console.log('pasok');

      setLoading(true);
      updateUserProfile(data, uploadData, genderActive).then(() => {
        setLoading(false);
        navigation.navigate('Home');
      });
    } else {
      console.log('pasok sa else');
    }
  };

  const handleNext = () => {
    if (currentPage == 3) {
      console.log('test');
      handleSubmit(submitProfile)();
    } else {
      setCurrentPage(currentPage => currentPage + 1);
    }
    handlePageChange(currentPage);
  };

  const handlePageChange = pageNumber => {
    pagerRef.current.setPage(pageNumber);
  };

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const initialState = {
    prc_id_front: '',
    prc_id_back: '',
  };

  // External Docs

  const [uploadData, setUploadData] = useState(initialState);
  const [genderActive, setGenderActive] = useState('male');

  return (
    <>
      <CustomHeader customBackgroundColor="#E4E9EA" />
      <ScrollView
        contentContainerStyle={{flexGrow: 1, backgroundColor: 'white'}}
        scrollEnabled={true}
        style={styles.container}>
        <View style={styles.grey__container}>
          <View style={styles.profiling__text_container}>
            <Text style={styles.header__text}>Profile Setup</Text>
            <Text style={styles.header__subtext}>
              {pagesTitle[currentPage - 1]}
            </Text>
            <Slider numOfCircles={3} activePosition={currentPage} />
          </View>
        </View>

        <PagerView
          style={styles.pages__container}
          initialPage={0}
          ref={pagerRef}
          onPageSelected={handlePageScroll}
          scrollEnabled={true}>
          <View key="1">
            <ProfilePage1
              control={control}
              errors={errors}
              genderActive={genderActive}
              setGenderActive={setGenderActive}
            />
          </View>

          <View key="2">
            <ProfilePage2 control={control} errors={errors} />
          </View>

          <View key="3">
            <ProfilePage3
              control={control}
              errors={errors}
              uploadData={uploadData}
              setUploadData={setUploadData}
            />
          </View>
        </PagerView>
        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            height: '100%',
            marginTop: '5%',
          }}>
          <Button
            buttonStyle={Themes.buttonPrimary}
            title={buttonTitle[currentPage - 1]}
            titleStyle={Themes.buttonTextPrimary}
            onPress={handleNext}
          />
        </View>
      </ScrollView>
      {loading && <Loading />}
    </>
  );
}

export default ProfilingMain;
