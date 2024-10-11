import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import globalStyles from '../../../../globalStyles';
import {RedCarImage} from '../../../assets/images';
import {cardetailStyles, checkoutStyles} from '../styles';
import {ChatIcon, ChevronCircledIcon, HearWhiteIcon, HeartFilledIcon, HeartIcon, RedStarIcon} from '../../../assets/icons';
import {AppButton, AppScrollView, AppText, DeleteVehicleModal, GoogleMap, SignInModal} from '../../../components';
import {FONTS} from '../../../utils/theme';
import StarRating from '../../../components/starRating';
import {ROUTES} from '../../../utils/constants';
import {useAccountType} from '../../../hooks';

const CarDetail = ({navigation, route}) => {
  const {isRenter} = useAccountType();
  const [signInModalShow, setSignInModalShow] = useState(false);
  const [deleteCarModalShow, setDeleteModalShow] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isHandoverComplete, setIsHandOverComplete] = useState(false);

  const {screenType} = route.params || {};
  const isOrderDetailScreen = screenType === 'orderDetail';
  const isOwnerCheckProduct = screenType === 'ownerCheckProduct';
  const isOwnerHandover = screenType === 'handover';

  const specifications = [
    {title: 'Company', description: 'Audi'},
    {title: 'Model', description: 'E-Tron GT'},
    {title: 'Year', description: '2023'},
    {title: 'Car Type', description: 'Sedan'},
    {title: 'Interior Color', description: 'Black'},
    {title: 'Exterior Color', description: 'Grey'},
    {title: 'Transmission', description: 'Automatic'},
    {title: 'Doors', description: '4'},
    {title: 'Mileage', description: '39,300'},
  ];

  const handleLike = () => {
    setIsLiked(p => !p);
  };

  const handleHandOver = () => {
    if (isHandoverComplete) return navigation.navigate(ROUTES.AddReview);
    setIsHandOverComplete(true);
  };

  return (
    <View style={globalStyles.flex1}>
      <Image source={RedCarImage} style={cardetailStyles.image} />
      <ChevronCircledIcon style={cardetailStyles.backButton} onPress={() => navigation.goBack()} />

      <AppScrollView>
        <View style={globalStyles.gap10}>
          <View style={cardetailStyles.rowItem}>
            <AppText fontFamily={FONTS.bold} fontSize={16}>
              Audi E-Tron GT
            </AppText>
            {isRenter && (isLiked ? <HeartFilledIcon onPress={handleLike} width={25} height={25} /> : <HearWhiteIcon onPress={handleLike} width={25} height={25} />)}
          </View>
          <AppText greyText>
            <AppText secondary fontFamily={FONTS.semiBold}>
              $50
            </AppText>
            /Hr
          </AppText>
        </View>

        <View style={[cardetailStyles.rowItem]}>
          <AppText fontFamily={FONTS.semiBold}>
            Reviews{' '}
            <AppText fontFamily={FONTS.regular} fontSize={12}>
              (100+)
            </AppText>
          </AppText>

          <View style={[cardetailStyles.rowItem, {marginTop: 0, gap: 7}]}>
            <StarRating size={14} starContainerStyle={{alignSelf: 'flex-start'}} />
            <AppText greyText>(4.5)</AppText>
          </View>
        </View>

        {(isOrderDetailScreen || isOwnerHandover) && (
          <View style={[cardetailStyles.marginTop20, {gap: 10}]}>
            <AppText fontFamily={FONTS.semiBold}>Renter Detail</AppText>

            <View style={cardetailStyles.profileContainer}>
              <Image source={RedCarImage} style={cardetailStyles.userPic} />
              <View style={globalStyles.flex1}>
                <AppText>Jhon Doe</AppText>
                <View style={[cardetailStyles.rowItem1]}>
                  <StarRating size={14} />
                  <AppText greyText>(4.5)</AppText>
                </View>
              </View>

              <ChatIcon />
            </View>
          </View>
        )}

        {isOwnerCheckProduct && (
          <View style={[cardetailStyles.rowItem]}>
            <AppText fontFamily={FONTS.semiBold} fontSize={16}>
              Rental T & C
            </AppText>
            <ChevronCircledIcon transform={[{rotate: '180deg'}]} />
          </View>
        )}

        <View style={[cardetailStyles.marginTop20, {gap: 10}]}>
          <AppText fontFamily={FONTS.semiBold}>Description</AppText>
          <AppText greyText>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </AppText>
        </View>

        {(isOrderDetailScreen || isOwnerHandover) && (
          <View style={[cardetailStyles.marginTop20, {gap: 10}]}>
            <AppText fontFamily={FONTS.semiBold}>Pick & Return Time & Date</AppText>

            <View style={[checkoutStyles.timingContainer, {marginTop: 5}]}>
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
          </View>
        )}

        {(isRenter || isOwnerCheckProduct) && (
          <View style={[cardetailStyles.marginTop20, {gap: 10}]}>
            <AppText fontFamily={FONTS.semiBold}>Specification</AppText>

            <View style={cardetailStyles.specContainer}>
              {specifications.map((spec, index) => (
                <View key={index} style={cardetailStyles.rowItemOfSpec}>
                  <AppText>{spec.title}</AppText>
                  <AppText>{spec.description}</AppText>
                </View>
              ))}
            </View>
          </View>
        )}

        {isRenter && (
          <View style={[cardetailStyles.marginTop20, {gap: 10}]}>
            <AppText fontFamily={FONTS.semiBold}>Location</AppText>
            <AppText greyText>ABC, New York</AppText>
            <GoogleMap style={cardetailStyles.maplocation} />
          </View>
        )}

        {isRenter && <AppButton title={'Book Car'} style={globalStyles.bottomButton} onPress={() => navigation.navigate(ROUTES.RentalTermsAndConditions)} />}
        {isOwnerHandover && <AppButton title={isHandoverComplete ? 'Add Review to Renter' : 'Handover'} style={globalStyles.bottomButton} onPress={handleHandOver} />}
      </AppScrollView>

      {isOrderDetailScreen && (
        <View style={cardetailStyles.actionBtnContainer}>
          <AppButton title={'Decline'} whiteButton style={cardetailStyles.actionBtn} />
          <AppButton title={'Accept'} style={cardetailStyles.actionBtn} onPress={() => navigation.navigate(ROUTES.DriverInfo)} />
        </View>
      )}

      {isOwnerCheckProduct && (
        <View style={cardetailStyles.actionBtnContainer}>
          <AppButton title={'Delete'} whiteButton style={cardetailStyles.actionBtn} onPress={() => setDeleteModalShow(true)} />
          <AppButton title={'Edit'} style={cardetailStyles.actionBtn} onPress={() => {}} />
        </View>
      )}

      <SignInModal isVisible={signInModalShow} setIsVisible={setSignInModalShow} />
      <DeleteVehicleModal isVisible={deleteCarModalShow} setIsVisible={setDeleteModalShow} onPressNo={() => setDeleteModalShow(false)} onPressYes={() => setDeleteModalShow(false)} />
    </View>
  );
};

export default CarDetail;
