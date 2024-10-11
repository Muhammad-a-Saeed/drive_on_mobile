import {View, Pressable} from 'react-native';
import React, {useState} from 'react';
import {AppButton, AppScrollView, AppText, AppTextInput, AuthHeader, Screen} from '../../../components';
import {FONTS} from '../../../utils/theme';
import globalStyles from '../../../../globalStyles';
import {AppleIcon, FacebookIcon, GoogleIcon, ShowEyeIcon, TickMarkedIcon, TickUnMarkedIcon} from '../../../assets/icons';
import {accountTypeStyles, authCommonStyles, signInStyles} from '../styles';
import {ROUTES} from '../../../utils/constants';

const SignUp = ({navigation}) => {
  const handleSignup = () => {
    navigation.navigate(ROUTES.OTPVerification);
  };

  return (
    <Screen>
      <AuthHeader LeftIcon={false} />
      <AppScrollView>
        <AppText secondary fontSize={18} fontFamily={FONTS.medium} style={authCommonStyles.screenHeading}>
          Sign Up
        </AppText>

        <View style={[globalStyles.inputsGap, globalStyles.flex1]}>
          <AppTextInput label={'Email'} placeholder="jhon@gmail.com" />
          <AppTextInput label={'Password'} placeholder="●●●●●●●" RightIcon={ShowEyeIcon} />
          <AppTextInput label={'Confirm Password'} placeholder="●●●●●●●" RightIcon={ShowEyeIcon} />
        </View>

        <View style={[signInStyles.bottomContent, globalStyles.bottomButton]}>
          <AppButton title={'Sign Up'} onPress={handleSignup} />
          <AppText fontFamily={FONTS.semiBold} fontSize={16} style={{alignSelf: 'center'}}>
            OR
          </AppText>
          <View style={signInStyles.socialContainer}>
            <Pressable style={signInStyles.socialIconContainer}>
              <AppleIcon />
            </Pressable>
            <Pressable style={signInStyles.socialIconContainer}>
              <GoogleIcon />
            </Pressable>
            <Pressable style={signInStyles.socialIconContainer}>
              <FacebookIcon />
            </Pressable>
          </View>

          <View style={accountTypeStyles.alreadyAccountText}>
            <AppText fontFamily={FONTS.medium}>
              Already have an account?{' '}
              <AppText onPress={() => navigation.goBack()} secondary style={accountTypeStyles.signInText}>
                Sign In
              </AppText>
            </AppText>
          </View>
        </View>
      </AppScrollView>
    </Screen>
  );
};

export default SignUp;
