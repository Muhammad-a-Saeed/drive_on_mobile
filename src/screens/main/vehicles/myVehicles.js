import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {CarPosts, Header, Screen} from '../../../components';
import {POSTS} from '../../../static';
import {WhitePlusIcon} from '../../../assets/icons';
import {vehicleStyles} from '../styles';
import {ROUTES} from '../../../utils/constants';

const MyVehicles = ({navigation}) => {
  return (
    <Screen>
      <Header title={'My Vehicle'} LeftIcon={true} onPressLeftIcon={() => {}} />
      <CarPosts posts={POSTS} isLikeIconShow={false} onPress={() => navigation.navigate(ROUTES.CarDetail, {screenType: 'ownerCheckProduct'})} />
      <Pressable style={vehicleStyles.addBtnContainer} onPress={() => navigation.navigate(ROUTES.AddVehicle)}>
        <WhitePlusIcon />
      </Pressable>
    </Screen>
  );
};

export default MyVehicles;
