import {View, Pressable} from 'react-native';
import React, {useState} from 'react';
import {AppButton, AppScrollView, AppText, AppTextInput, AuthHeader, Screen} from '../../../components';
import {FONTS} from '../../../utils/theme';
import globalStyles from '../../../../globalStyles';
import {AppleIcon, FacebookIcon, GoogleIcon, ShowEyeIcon, TickMarkedIcon, TickUnMarkedIcon} from '../../../assets/icons';
import {accountTypeStyles, authCommonStyles, signInStyles} from '../styles';
import {ROUTES} from '../../../utils/constants';
import {useAccountType} from '../../../hooks';

const SignIn = ({navigation}) => {
  const [isRememberMe, setIsRememberMe] = useState(false);
  const {isOwner, isRenter} = useAccountType();

  const handleRemember = () => {
    setIsRememberMe(p => !p);
  };

  const handleSignIn = () => {
    navigation.replace(ROUTES.Main);
  };

  return (
    <Screen>
      <AuthHeader LeftIcon={false} />
      <AppScrollView>
        <AppText secondary fontSize={18} fontFamily={FONTS.medium} style={authCommonStyles.screenHeading}>
          Sign In
        </AppText>

        <View style={[globalStyles.inputsGap, globalStyles.flex1]}>
          <AppTextInput label={'Email'} placeholder="jhon@gmail.com" />
          <AppTextInput label={'Password'} placeholder="●●●●●●●" RightIcon={ShowEyeIcon} />

          <View style={signInStyles.rememberForgotContainer}>
            <Pressable style={signInStyles.rememberMeContainer} onPress={handleRemember}>
              {isRememberMe ? <TickUnMarkedIcon width={25} height={25} /> : <TickMarkedIcon width={25} height={25} />}
              <AppText>Remember Me</AppText>
            </Pressable>

            <AppText onPress={() => navigation.navigate(ROUTES.ForgotPassword)}>Forgot password?</AppText>
          </View>
        </View>

        <View style={[signInStyles.bottomContent, globalStyles.bottomButton]}>
          <AppButton title={'Sign In'} onPress={handleSignIn} />
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
              Don't have an account?{' '}
              <AppText onPress={() => navigation.navigate(ROUTES.SignUp)} secondary style={accountTypeStyles.signInText}>
                Sign Up
              </AppText>
            </AppText>
          </View>
        </View>
      </AppScrollView>
    </Screen>
  );
};

export default SignIn;
