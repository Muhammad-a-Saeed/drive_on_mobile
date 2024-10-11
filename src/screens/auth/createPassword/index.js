import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {AppButton, AppScrollView, AppText, AppTextInput, AuthHeader, Screen, SuccessModal} from '../../../components';
import {FONTS} from '../../../utils/theme';
import {authCommonStyles} from '../styles';
import globalStyles from '../../../../globalStyles';
import {ROUTES} from '../../../utils/constants';

const CreatePassword = ({navigation}) => {
  const [passwordCreateModal, setPasswordCreateModal] = useState(false);

  const handleContinue = () => {
    setPasswordCreateModal(true);
    setTimeout(() => {
      setPasswordCreateModal(false);
      navigation.popToTop();
    }, 3000);
  };

  return (
    <Screen>
      <AuthHeader />
      <AppScrollView>
        <AppText secondary fontSize={18} fontFamily={FONTS.medium} style={authCommonStyles.screenHeading}>
          Create Password
        </AppText>

        <View style={[globalStyles.inputsGap, globalStyles.flex1]}>
          <AppTextInput label={'New Password'} placeholder="●●●●●●●" />
          <AppTextInput label={'Confirm Password'} placeholder="●●●●●●●" />
        </View>

        <AppButton style={globalStyles.bottomButton} title={'Continue'} onPress={handleContinue} />
      </AppScrollView>

      <SuccessModal title={'Password Created'} isVisible={passwordCreateModal} setIsVisible={setPasswordCreateModal} />
    </Screen>
  );
};

export default CreatePassword;
