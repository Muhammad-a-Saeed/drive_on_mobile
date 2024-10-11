import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import {AppButton, AppScrollView, AppText, Header, Screen, SuccessModal} from '../../../components';
import StarRating from '../../../components/starRating';
import {checkoutStyles} from '../styles';
import {FONTS} from '../../../utils/theme';
import {RedCarImage} from '../../../assets/images';
import globalStyles from '../../../../globalStyles';
import {RedStarIcon} from '../../../assets/icons';
import {ROUTES} from '../../../utils/constants';

const Checkout = ({navigation, route}) => {
  const [reservedModalShow, setReservedModalShow] = useState(false);
  const {prevScreen} = route.params || {};
  const isPrevScreenIsBookings = prevScreen === 'bookings';

  const handleContinue = () => {
    if (isPrevScreenIsBookings) navigation.navigate(ROUTES.AddReview);
  };

  return (
    <Screen>
      <Header title={'Checkout'} />
      <AppScrollView>
        <View style={checkoutStyles.topContentContainer}>
          <View style={[globalStyles.flex1, checkoutStyles.content]}>
            <AppText fontSize={20} fontFamily={FONTS.bold}>
              Audi E-Tron GT
            </AppText>
            <View style={checkoutStyles.ratingContainer}>
              <StarRating size={14} />
              <AppText>(4.5)</AppText>
            </View>
          </View>

          <Image source={RedCarImage} style={checkoutStyles.carImage} />
        </View>

        <View style={checkoutStyles.timingContainer}>
          <View style={globalStyles.gap5}>
            <AppText fontFamily={FONTS.bold} fontSize={16}>
              Sat,Apr 6
            </AppText>
            <AppText fontFamily={FONTS.semiBold}>10:00 Am</AppText>
          </View>

          <RedStarIcon width={20} height={20} />

          <View style={globalStyles.gap5}>
            <AppText fontFamily={FONTS.bold} fontSize={16}>
              Tue,Apr 6
            </AppText>
            <AppText fontFamily={FONTS.semiBold}> 10:00 Am</AppText>
          </View>
        </View>

        <View style={[checkoutStyles.itemsContainer, globalStyles.gap15]}>
          <View style={checkoutStyles.itemContainer}>
            <AppText>$35.33 x 3 days</AppText>
            <AppText fontFamily={FONTS.bold}>$106.00</AppText>
          </View>
          <View style={checkoutStyles.itemContainer}>
            <AppText>Trip Fee</AppText>
            <AppText fontFamily={FONTS.bold}>$55.15</AppText>
          </View>
          <View style={checkoutStyles.itemContainer}>
            <AppText>Minimum Protection</AppText>
            <AppText fontFamily={FONTS.bold}>$30.00</AppText>
          </View>
        </View>

        <View style={[checkoutStyles.itemsContainer, globalStyles.gap15]}>
          <View style={checkoutStyles.itemContainer}>
            <AppText fontFamily={FONTS.bold}>Total</AppText>
            <AppText fontFamily={FONTS.bold}>$106.00</AppText>
          </View>
        </View>

        <View style={globalStyles.flex1} />

        <AppButton title={'Continue'} disabled={false} style={globalStyles.bottomButton} onPress={handleContinue} />
      </AppScrollView>

      <SuccessModal title={'Car Reserved'} isVisible={reservedModalShow} setIsVisible={setReservedModalShow} />
    </Screen>
  );
};
export default Checkout;
