import {View, Text} from 'react-native';
import React from 'react';
import {AppScrollView, AppText, Header, Screen} from '../../../../components';
import {ChatBlackIcon} from '../../../../assets/icons';
import {contactUsStyles} from '../../styles';
import {FONTS} from '../../../../utils/theme';
import globalStyles from '../../../../../globalStyles';

const ContactUs = () => {
  return (
    <Screen>
      <Header title={'Contact Us'} />

      <AppScrollView>
        <View style={{gap: 20}}>
          <View style={contactUsStyles.rowItem}>
            <ChatBlackIcon />
            <View style={globalStyles.gap5}>
              <AppText fontFamily={FONTS.bold}>Chat to us</AppText>
              <AppText fontSize={12}>Our friendly team is here to help.</AppText>
              <AppText>help@apparelhub.com</AppText>
            </View>
          </View>

          <View style={contactUsStyles.rowItem}>
            <ChatBlackIcon />
            <View style={globalStyles.gap5}>
              <AppText fontFamily={FONTS.bold}>Call to us</AppText>
              <AppText fontSize={12}>Our friendly team is here to help.</AppText>
              <AppText>+555586868969</AppText>
            </View>
          </View>
        </View>
      </AppScrollView>
    </Screen>
  );
};

export default ContactUs;
