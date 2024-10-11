import {View, Text} from 'react-native';
import React from 'react';
import {AppButton, AppScrollView, AppTextInput, Header, Screen} from '../../../../components';
import globalStyles from '../../../../../globalStyles';
import {ShowEyeIcon} from '../../../../assets/icons';

const ChangePassword = ({navigation}) => {
  return (
    <Screen>
      <Header title={'Change Password'} />

      <AppScrollView>
        <View style={[globalStyles.inputsGap, globalStyles.flex1]}>
          <AppTextInput label={'Password'} placeholder="●●●●●●●" RightIcon={ShowEyeIcon} />
          <AppTextInput label={'New Password'} placeholder="●●●●●●●" RightIcon={ShowEyeIcon} />
          <AppTextInput label={'Confirm Password'} placeholder="●●●●●●●" RightIcon={ShowEyeIcon} />
        </View>
        <AppButton title={'Save Changes'} style={globalStyles.bottomButton} onPress={() => navigation.goBack()} />
      </AppScrollView>
    </Screen>
  );
};

export default ChangePassword;
