import {View} from 'react-native';
import React, {useState} from 'react';
import {AppButton, AppScrollView, AppText, Header, Screen} from '../../../components';
import {drivingLicenseStyles} from '../styles';
import {FONTS} from '../../../utils/theme';
import {CardBackIcon, CardFrontIcon} from '../../../assets/icons';
import globalStyles from '../../../../globalStyles';
import {useAccountType} from '../../../hooks';

const DriverLicense = ({navigation}) => {
  const {isOwner, isRenter} = useAccountType();
  const [cardPicState, setCardPicState] = useState('front');

  const handleContinue = () => {
    if (cardPicState === 'back') return navigation.goBack();
    setCardPicState('back');
  };

  return (
    <Screen>
      <Header title={'Driving License'} />

      <AppScrollView>
        {isRenter && (
          <View style={[drivingLicenseStyles.topTextContent, globalStyles.flex1]}>
            <AppText fontFamily={FONTS.semiBold}>Place front side of your card on the Red box</AppText>
            <AppText fontSize={16} style={drivingLicenseStyles.countText}>
              {cardPicState === 'front' ? '1/2' : '2/2'}
            </AppText>

            {cardPicState === 'front' ? <CardFrontIcon style={drivingLicenseStyles.card} /> : <CardBackIcon style={drivingLicenseStyles.card} />}
          </View>
        )}

        {isOwner && (
          <View style={{alignItems: 'center', gap: 20}}>
            <View style={{gap: 10}}>
              <AppText fontFamily={FONTS.semiBold}>Front</AppText>
              <CardFrontIcon />
            </View>

            <View style={{gap: 10}}>
              <AppText fontFamily={FONTS.semiBold}>Back</AppText>
              <CardBackIcon />
            </View>
          </View>
        )}

        {isRenter && <AppButton title={'Continue'} style={globalStyles.bottomButton} onPress={handleContinue} />}
      </AppScrollView>
    </Screen>
  );
};

export default DriverLicense;
