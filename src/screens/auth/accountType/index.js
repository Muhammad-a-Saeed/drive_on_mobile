import {View, Text} from 'react-native';
import React from 'react';
import {AppButton, AppScrollView, AppText, AuthHeader, Screen} from '../../../components';
import {FONTS} from '../../../utils/theme';
import {accountTypeStyles, authCommonStyles} from '../styles';
import {useDispatch} from 'react-redux';
import {ACCOUNT_TYPE} from '../../../static';
import {authActions} from '../../../redux/slices/auth';
import {ROUTES} from '../../../utils/constants';

const AccountType = ({navigation}) => {
  const dispatch = useDispatch();

  const handleContinue = accountType => {
    dispatch(authActions.setAccountType(accountType));
    navigation.navigate(ROUTES.SignIn);
  };

  return (
    <Screen>
      <AuthHeader />
      <AppScrollView>
        <View style={[accountTypeStyles.headText, authCommonStyles.screenHeading]}>
          <AppText secondary fontFamily={FONTS.bold} fontSize={16}>
            Select Account type
          </AppText>
          <AppText>Lorem ipsum dolor sit amet consectetur. At id in quis nunc nunc nunc. Hendrerit.</AppText>
        </View>

        <View style={accountTypeStyles.buttonContainer}>
          <AppButton title={'BOOK A CAR'} secondary onPress={() => handleContinue(ACCOUNT_TYPE.RENTER)} />
          <AppText style={accountTypeStyles.ORText}>OR</AppText>
          <AppButton title={'SHARE YOUR CAR'} whiteButton onPress={() => handleContinue(ACCOUNT_TYPE.OWNER)} />
        </View>

        {/* <View style={accountTypeStyles.alreadyAccountText}>
          <AppText fontFamily={FONTS.medium}>
            Already have an account?{' '}
            <AppText secondary style={accountTypeStyles.signInText}>
              Sign In
            </AppText>
          </AppText>
        </View> */}
      </AppScrollView>
    </Screen>
  );
};

export default AccountType;
