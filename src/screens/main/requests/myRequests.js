import {View, Text, Image} from 'react-native';
import React from 'react';
import {AppButton, AppText, CarPosts, Screen} from '../../../components';
import {RedCarImage} from '../../../assets/images';
import {requestStyles} from '../styles';
import globalStyles from '../../../../globalStyles';
import {FONTS} from '../../../utils/theme';
import {POSTS} from '../../../static';
import {NoDataIcon} from '../../../assets/icons';
import {ROUTES} from '../../../utils/constants';

const MyRequests = ({navigation}) => {
  return (
    <Screen>
      <View style={[requestStyles.profileContainer, globalStyles.screenPadding]}>
        <Image source={RedCarImage} style={requestStyles.profileImage} />
        <View>
          <AppText fontSize={12}>Welcome Back! 👋</AppText>
          <AppText fontFamily={FONTS.semiBold}>John Doe</AppText>
        </View>
      </View>

      <View style={globalStyles.flex1}>
        <AppText fontSize={16} fontFamily={FONTS.semiBold} style={[globalStyles.screenPadding, {marginVertical: 20}]}>
          Requests
        </AppText>
        <CarPosts posts={POSTS} isPicupAndReturnDatesShow={true} onPress={() => navigation.navigate(ROUTES.CarDetail, {screenType: 'orderDetail'})} />
        {/* <NoDataComponent /> */}
      </View>
    </Screen>
  );
};

const NoDataComponent = () => {
  return (
    <View style={requestStyles.nodataContainer}>
      <NoDataIcon />

      <AppText secondary fontSize={22} fontFamily={FONTS.medium} style={{marginBottom: 60, marginTop: 20}}>
        No Data
      </AppText>

      <AppButton title={'Add Vehicle'} style={{width: '60%'}} />
    </View>
  );
};

export default MyRequests;
