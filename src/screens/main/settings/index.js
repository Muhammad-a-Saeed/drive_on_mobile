import {View, Text, Image, Pressable} from 'react-native';
import React, {useState} from 'react';
import {AppScrollView, AppText, Header, Screen} from '../../../components';
import {RedCarImage} from '../../../assets/images';
import {settingStyles} from '../styles';
import {COLORS, FONTS} from '../../../utils/theme';
import {ChevronIcon, DeleteBasketIcon, ExitIcon} from '../../../assets/icons';
import globalStyles from '../../../../globalStyles';
import ToggleSwitch from 'toggle-switch-react-native';
import {ROUTES} from '../../../utils/constants';
import {useAccountType} from '../../../hooks';

const Settings = ({navigation}) => {
  const {isOwner, isRenter} = useAccountType();
  const [isNotification, setIsNotification] = useState(false);

  return (
    <Screen>
      <Header title={'Settings'} LeftIcon={true} onPressLeftIcon={() => {}} />
      <AppScrollView>
        <Pressable onPress={() => navigation.navigate(ROUTES.Auth, {screen: ROUTES.CompleteProfile, params: {prevScreen: 'settings'}})} style={settingStyles.userProfileContainer}>
          <Image source={RedCarImage} style={settingStyles.image} />
          <View style={settingStyles.userNameContainer}>
            <AppText fontFamily={FONTS.bold}>Jhon Doe</AppText>
            <AppText greyText>jhon@mail.com</AppText>
          </View>
        </Pressable>

        <View style={[globalStyles.gap15, {marginTop: 20}]}>
          {isRenter ? (
            <Pressable onPress={() => navigation.navigate(ROUTES.MyReviews)} style={settingStyles.menuItemContainer}>
              <AppText>My Reviews</AppText>
              <ChevronIcon width={20} height={20} />
            </Pressable>
          ) : (
            <Pressable onPress={() => navigation.navigate(ROUTES.Wallet)} style={settingStyles.menuItemContainer}>
              <AppText>Wallet</AppText>
              <ChevronIcon width={20} height={20} />
            </Pressable>
          )}
          <Pressable onPress={() => navigation.navigate(ROUTES.ChangePassword)} style={settingStyles.menuItemContainer}>
            <AppText>Change password</AppText>
            <ChevronIcon width={20} height={20} />
          </Pressable>
          <View style={settingStyles.menuItemContainer}>
            <AppText>Notifications</AppText>
            <ToggleSwitch isOn={isNotification} disabled={false} onColor={COLORS.primary} offColor={COLORS.grey3} size="small" onToggle={setIsNotification} />
          </View>
          <Pressable onPress={() => navigation.navigate(ROUTES.PrivacyPolicy)} style={settingStyles.menuItemContainer}>
            <AppText>Privacy Policy</AppText>
            <ChevronIcon width={20} height={20} />
          </Pressable>

          <Pressable onPress={() => navigation.navigate(ROUTES.TermsAndConditions)} style={settingStyles.menuItemContainer}>
            <AppText>Terms Of Use</AppText>
            <ChevronIcon width={20} height={20} />
          </Pressable>

          <Pressable onPress={() => navigation.navigate(ROUTES.AboutUs)} style={settingStyles.menuItemContainer}>
            <AppText>About App</AppText>
            <ChevronIcon width={20} height={20} />
          </Pressable>

          <Pressable onPress={() => navigation.navigate(ROUTES.ContactUs)} style={settingStyles.menuItemContainer}>
            <AppText>Contact Us</AppText>
            <ChevronIcon width={20} height={20} />
          </Pressable>

          <Pressable onPress={() => navigation.replace(ROUTES.Auth)} style={settingStyles.rowItem}>
            <ExitIcon />
            <AppText secondary>Logout</AppText>
          </Pressable>

          <Pressable onPress={() => navigation.navigate(ROUTES.DeleteAccount)} style={settingStyles.rowItem}>
            <DeleteBasketIcon />
            <AppText secondary>Delete my Account</AppText>
          </Pressable>
        </View>
      </AppScrollView>
    </Screen>
  );
};

export default Settings;
