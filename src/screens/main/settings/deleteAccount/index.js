import {View} from 'react-native';
import React from 'react';
import {AppButton, AppScrollView, AppText, AppTextInput, Header, Screen} from '../../../../components';
import {ROUTES} from '../../../../utils/constants';
import globalStyles from '../../../../../globalStyles';
import {deleteAccountStyles} from '../../styles';
import {ShowEyeIcon} from '../../../../assets/icons';

const DeleteAccount = ({navigation}) => {
  return (
    <Screen>
      <Header title={'Delete Account'} />
      <AppScrollView contentContainerStyle={[globalStyles.screenPadding, globalStyles.flexGrow1, globalStyles.screenPaddingBottom10]} showsVerticalScrollIndicator={false}>
        <View style={[globalStyles.flexRowItemCenter]}>
          <AppText style={deleteAccountStyles.deleteAccountText}>{'Delete your account will'}:</AppText>
        </View>

        <View style={{marginTop: 20, ...globalStyles.flexGrow1}}>
          <AppText style={deleteAccountStyles.paragraphText}>
            We're sorry to see you go. If you're sure you want to delete your ECHO App account, please be aware that this action is permanent and cannot be undone. All of your personal information,
            including your information and settings, will be permanently deleted.
          </AppText>

          <AppText style={[deleteAccountStyles.paragraphText, {marginTop: 10}]}>
            If you're having trouble with your account or have concerns, please reach out to us at [contact email or support page] before proceeding with the account deletion. We'd love to help you
            resolve any issues and keep you as a valued ECHO App user.
          </AppText>

          <AppText style={deleteAccountStyles.inputLabel}>{'Password'}</AppText>
          <AppTextInput placeholder="*******" RightIcon={ShowEyeIcon} />

          <AppText style={[deleteAccountStyles.paragraphText, {marginTop: 20}]} greyText>
            {'To delete your account, please enter your password in the field below and confirm your decision by clicking the "Delete My Account" button'}
          </AppText>
        </View>

        <View style={globalStyles.screenPaddingBottom10}>
          <AppButton title={'Delete Account'} onPress={() => navigation.navigate(ROUTES.Auth, {screen: ROUTES.OTPVerification, params: {screenType: 'deleteAccount'}})} />
        </View>
      </AppScrollView>
    </Screen>
  );
};

export default DeleteAccount;
