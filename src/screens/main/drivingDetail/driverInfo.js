import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {AppButton, AppScrollView, AppText, Header, Screen, SeperatorLine} from '../../../components';
import {driverInfoStyles} from '../styles';
import {AvatarCircledIcon, IdCardIcon, PaymentCardIcon, PhoneIcon, TickMarkedIcon} from '../../../assets/icons';
import {FONTS} from '../../../utils/theme';
import globalStyles from '../../../../globalStyles';
import {ROUTES} from '../../../utils/constants';
import {useAccountType} from '../../../hooks';

const DriverInfo = ({navigation}) => {
  const {isOwner, isRenter} = useAccountType();

  const info = [
    {
      icon: AvatarCircledIcon,
      title: 'Your Profile',
      description: 'Lorem ipsum dolor sit amet consectetur. Pellentesque tincidunt eu convallis pharetra',
    },
    {
      icon: PhoneIcon,
      title: 'Phone Number',
      description: 'Lorem ipsum dolor sit amet consectetur. Pellentesque tincidunt eu convallis pharetra',
    },
    {
      icon: IdCardIcon,
      title: 'Driver License',
      description: 'Lorem ipsum dolor sit amet consectetur. Pellentesque tincidunt eu convallis pharetra',
    },
    {
      icon: PaymentCardIcon,
      title: 'Payment Method',
      description: 'Lorem ipsum dolor sit amet consectetur. Pellentesque tincidunt eu convallis pharetra',
    },
  ];

  const handleItemPress = (item, index) => {
    let screenName = ROUTES.DriverPhoto;

    if (item.title === 'Your Profile') screenName = ROUTES.DriverPhoto;
    else if (item.title === 'Phone Number') screenName = ROUTES.DriverPhoneNumber;
    else if (item.title === 'Driver License') screenName = ROUTES.DriverLicense;
    else if (item.title === 'Payment Method') screenName = '';

    navigation.navigate(screenName);
  };

  return (
    <Screen>
      <Header title={isRenter ? 'Get Approved to Drive' : 'Renter Detail'} />
      <AppScrollView>
        <AppText>Lorem ipsum dolor sit amet consectetur. Pellentesque tincidunt eu convallis pharetra</AppText>

        <View style={driverInfoStyles.infoContainer}>
          {info.map((i, index) => (
            <Pressable key={i.title} onPress={() => handleItemPress(i, index)}>
              <View style={driverInfoStyles.infoItem}>
                <View>
                  <i.icon width={30} height={30} />
                  <TickMarkedIcon style={driverInfoStyles.iconTick} width={12} />
                </View>
                <View style={driverInfoStyles.infoItemcontent}>
                  <AppText fontFamily={FONTS.medium}>{i.title}</AppText>
                  <AppText fontSize={12}>{i.description}</AppText>
                </View>
              </View>
              {index !== info.length - 1 && <SeperatorLine />}
            </Pressable>
          ))}
        </View>

        <View style={globalStyles.flex1} />

        {isRenter && <AppButton title={'Make Reservation'} disabled={false} style={globalStyles.bottomButton} onPress={() => navigation.navigate(ROUTES.Checkout)} />}
      </AppScrollView>
    </Screen>
  );
};

export default DriverInfo;
