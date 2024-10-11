import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {AppButton, AppScrollView, AppText, AuthHeader, Header, Screen} from '../../../components';
import {COLORS, FONTS} from '../../../utils/theme';
import globalStyles from '../../../../globalStyles';
import {authCommonStyles, signInStyles} from '../styles';
import OTPTextInput from 'react-native-otp-textinput';
import {ROUTES} from '../../../utils/constants';

const OTPVerification = ({navigation, route}) => {
  const [otp, setOtp] = useState('');
  const {screenType} = route.params || {};
  const isVerificationTypeForgotPassword = screenType === 'ForgotPasswordVerification';
  const isPrevScreenDeleteAccount = screenType === 'deleteAccount';

  const handleVerify = () => {
    if (isVerificationTypeForgotPassword) {
      return navigation.navigate(ROUTES.CreatePassword);
    } else if (isPrevScreenDeleteAccount) {
      return navigation.goBack();
    }

    navigation.navigate(ROUTES.CompleteProfile);
  };

  return (
    <Screen>
      {isPrevScreenDeleteAccount ? <Header title={'OTP'} /> : <AuthHeader />}
      <AppScrollView>
        {!isPrevScreenDeleteAccount && (
          <AppText style={authCommonStyles.screenHeading} secondary fontSize={18} fontFamily={FONTS.medium}>
            OTP
          </AppText>
        )}

        <View style={[globalStyles.inputsGap, globalStyles.flex1]}>
          <OTPTextInput autoFocus tintColor={COLORS.white} textInputStyle={signInStyles.otpInput} handleTextChange={setOtp} />

          <AppText style={signInStyles.accountRelatedText}>
            {'Didn’t get code?'}{' '}
            <AppText secondary style={signInStyles.underlineAndMediumText} onPress={() => {}}>
              {'Resend code'}
            </AppText>
          </AppText>
        </View>

        <AppButton style={globalStyles.bottomButton} title={'Verify'} onPress={handleVerify} />
      </AppScrollView>
    </Screen>
  );
};

export default OTPVerification;
