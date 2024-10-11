import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from '../../utils/constants';
import {Bookings, ChatHead, ChatHeads, Explore, FavoritePosts, MyRequests, MyVehicles, Settings} from '../../screens/main';

const Stack = createNativeStackNavigator();
const screenOptions = {
  headerShown: false,
};

// EACH TAB HAS INDIVIDUAL STACK

export const ExploreStack = () => {
  return (
    <Stack.Navigator initialRouteName={ROUTES.Explore} screenOptions={screenOptions}>
      <Stack.Screen name={ROUTES.Explore} component={Explore} />
    </Stack.Navigator>
  );
};

export const RequestsStack = () => {
  return (
    <Stack.Navigator initialRouteName={ROUTES.Explore} screenOptions={screenOptions}>
      <Stack.Screen name={ROUTES.Explore} component={MyRequests} />
    </Stack.Navigator>
  );
};

export const BookingStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={ROUTES.Bookings} component={Bookings} />
    </Stack.Navigator>
  );
};

export const FavoriteStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={ROUTES.FavoritePosts} component={FavoritePosts} />
    </Stack.Navigator>
  );
};

export const MyVehiclesStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={ROUTES.MyVehicles} component={MyVehicles} />
    </Stack.Navigator>
  );
};

export const ChatStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={ROUTES.ChatHeads} component={ChatHeads} />
    </Stack.Navigator>
  );
};

export const SettingsStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={ROUTES.Settings} component={Settings} />
    </Stack.Navigator>
  );
};
