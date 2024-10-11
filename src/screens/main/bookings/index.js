import {View, Pressable} from 'react-native';
import React, {useState} from 'react';
import {AppText, CarPosts, Header, Screen} from '../../../components';
import globalStyles from '../../../../globalStyles';
import {COLORS, FONTS} from '../../../utils/theme';
import {bookingsStyles} from '../styles';
import {POSTS} from '../../../static';
import {ROUTES} from '../../../utils/constants';
import {useAccountType} from '../../../hooks';

const Bookings = ({navigation}) => {
  const [activeTab, setActiveTab] = useState('reserved');
  const {isRenter, isOwner} = useAccountType();
  const handlePressPost = () => {
    if (isOwner) {
      navigation.navigate(ROUTES.CarDetail, {screenType: 'handover'});
    } else {
      navigation.navigate(ROUTES.Checkout, {prevScreen: 'bookings'});
    }
  };

  return (
    <Screen>
      <Header title={'Bookings'} LeftIcon={true} onPressLeftIcon={() => {}} />

      <View style={[{marginBottom: 20}]}>
        <View style={[bookingsStyles.tabContainer, globalStyles.screenPadding]}>
          <Pressable onPress={() => setActiveTab('reserved')} style={[bookingsStyles.tab, {borderColor: activeTab === 'reserved' ? COLORS.white : undefined}]}>
            <AppText fontFamily={FONTS.medium} greyText={activeTab !== 'reserved'}>
              Reserved
            </AppText>
          </Pressable>

          {isRenter ? (
            <Pressable onPress={() => setActiveTab('picked')} style={[bookingsStyles.tab, {borderColor: activeTab === 'picked' ? COLORS.white : undefined}]}>
              <AppText fontFamily={FONTS.medium} greyText={activeTab !== 'picked'}>
                Picked
              </AppText>
            </Pressable>
          ) : (
            <Pressable onPress={() => setActiveTab('handovered')} style={[bookingsStyles.tab, {borderColor: activeTab === 'handovered' ? COLORS.white : undefined}]}>
              <AppText fontFamily={FONTS.medium} greyText={activeTab !== 'handovered'}>
                Handovered
              </AppText>
            </Pressable>
          )}
        </View>
      </View>

      <CarPosts posts={POSTS} isLikeIconShow={false} isPicupAndReturnDatesShow={true} onPress={handlePressPost} />
    </Screen>
  );
};

export default Bookings;
