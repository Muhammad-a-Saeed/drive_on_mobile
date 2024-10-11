import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {NavigationTheme} from '../utils/theme';
import {ROUTES} from '../utils/constants';
import AuthStack from './stacks/auth';
import BottomTab from './bottomTab';
import {
  AboutUs,
  AddRentalTermsAndConditions,
  AddReview,
  AddVehicle,
  CarDetail,
  CarFilter,
  ChangePassword,
  ChatRoom,
  Checkout,
  ContactUs,
  DeleteAccount,
  DriverInfo,
  DriverLicense,
  DriverPhoneNumber,
  DriverPhoto,
  LocationBasedSearch,
  MyReviews,
  PickUpInfo,
  PickupAndReturnInfo,
  PrivacyPolicy,
  RentalTermsAndConditions,
  SearchedPosts,
  SelectLocationOnMap,
  TermsAndConditions,
  TransactionHistory,
  Wallet,
  WithdrawInfo,
} from '../screens/main';

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
};

const Routes = () => {
  return (
    <NavigationContainer theme={NavigationTheme}>
      <Stack.Navigator initialRouteName={ROUTES.Auth} screenOptions={screenOptions}>
        {/* AUTH SCREENS */}

        <Stack.Screen name={ROUTES.Auth} component={AuthStack} />
        <Stack.Screen name={ROUTES.CarFilter} component={CarFilter} />
        <Stack.Screen name={ROUTES.CarDetail} component={CarDetail} />
        <Stack.Screen name={ROUTES.RentalTermsAndConditions} component={RentalTermsAndConditions} />
        <Stack.Screen name={ROUTES.PickupAndReturnInfo} component={PickupAndReturnInfo} />
        <Stack.Screen name={ROUTES.DriverInfo} component={DriverInfo} />
        <Stack.Screen name={ROUTES.Checkout} component={Checkout} />
        <Stack.Screen name={ROUTES.DriverPhoto} component={DriverPhoto} />
        <Stack.Screen name={ROUTES.DriverPhoneNumber} component={DriverPhoneNumber} />
        <Stack.Screen name={ROUTES.DriverLicense} component={DriverLicense} />
        <Stack.Screen name={ROUTES.LocationBasedSearch} component={LocationBasedSearch} />
        <Stack.Screen name={ROUTES.SelectLocationOnMap} component={SelectLocationOnMap} />
        <Stack.Screen name={ROUTES.SearchedPosts} component={SearchedPosts} />
        <Stack.Screen name={ROUTES.AddReview} component={AddReview} />
        <Stack.Screen name={ROUTES.ChatRoom} component={ChatRoom} />
        <Stack.Screen name={ROUTES.ChangePassword} component={ChangePassword} />
        <Stack.Screen name={ROUTES.TermsAndConditions} component={TermsAndConditions} />
        <Stack.Screen name={ROUTES.PrivacyPolicy} component={PrivacyPolicy} />
        <Stack.Screen name={ROUTES.AboutUs} component={AboutUs} />
        <Stack.Screen name={ROUTES.ContactUs} component={ContactUs} />
        <Stack.Screen name={ROUTES.DeleteAccount} component={DeleteAccount} />
        <Stack.Screen name={ROUTES.MyReviews} component={MyReviews} />
        <Stack.Screen name={ROUTES.AddVehicle} component={AddVehicle} />
        <Stack.Screen name={ROUTES.AddRentalTermsAndConditions} component={AddRentalTermsAndConditions} />
        <Stack.Screen name={ROUTES.Wallet} component={Wallet} />
        <Stack.Screen name={ROUTES.TransactionHistory} component={TransactionHistory} />
        <Stack.Screen name={ROUTES.WithdrawInfo} component={WithdrawInfo} />

        {/* WITH BOTTOM TAB SCREENS PLEASE ADD IT IN BOTTOMTAB STACK */}
        <Stack.Screen name={ROUTES.Main} component={BottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
