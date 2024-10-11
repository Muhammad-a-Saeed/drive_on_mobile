import {View, Text} from 'react-native';
import React from 'react';
import {AppButton, AppScrollView, AppText, AppTextInput, AuthHeader, Screen} from '../../../components';
import {FONTS} from '../../../utils/theme';
import {authCommonStyles} from '../styles';
import globalStyles from '../../../../globalStyles';
import {ROUTES} from '../../../utils/constants';

const ForgotPassword = ({navigation}) => {
  return (
    <Screen>
      <AuthHeader />
      <AppScrollView>
        <AppText secondary fontSize={18} fontFamily={FONTS.medium} style={authCommonStyles.screenHeading}>
          Forgot Password
        </AppText>

        <View style={[globalStyles.inputsGap, globalStyles.flex1]}>
          <AppTextInput label={'Email'} placeholder="jhon@gmail.com" />
        </View>

        <AppButton style={globalStyles.bottomButton} title={'Continue'} onPress={() => navigation.navigate(ROUTES.OTPVerification, {screenType: 'ForgotPasswordVerification'})} />
      </AppScrollView>
    </Screen>
  );
};

export default ForgotPassword;
