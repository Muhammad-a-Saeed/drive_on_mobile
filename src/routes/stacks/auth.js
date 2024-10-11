import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from '../../utils/constants';
import {AccountType, CompleteProfile, CreatePassword, ForgotPassword, OTPVerification, Onboarding, SignIn, SignUp, Splash} from '../../screens/auth';

const Stack = createNativeStackNavigator();
const screenOptions = {
  headerShown: false,
};

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName={ROUTES.Splash} screenOptions={screenOptions}>
      <Stack.Screen name={ROUTES.Splash} component={Splash} />
      <Stack.Screen name={ROUTES.Onboarding} component={Onboarding} />
      <Stack.Screen name={ROUTES.AccountType} component={AccountType} />
      <Stack.Screen name={ROUTES.SignIn} component={SignIn} />
      <Stack.Screen name={ROUTES.SignUp} component={SignUp} />
      <Stack.Screen name={ROUTES.OTPVerification} component={OTPVerification} />
      <Stack.Screen name={ROUTES.ForgotPassword} component={ForgotPassword} />
      <Stack.Screen name={ROUTES.CompleteProfile} component={CompleteProfile} />
      <Stack.Screen name={ROUTES.CreatePassword} component={CreatePassword} />
    </Stack.Navigator>
  );
};

export default AuthStack;
