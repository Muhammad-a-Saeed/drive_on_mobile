import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {AppButton, AppTextInput, Header, Screen, SuccessModal} from '../../../../components';
import globalStyles from '../../../../../globalStyles';

const WithdrawInfo = ({navigation}) => {
  const [isWithdrawModalShow, setIsWithdrawModalShow] = useState(false);

  const handleWithdraw = () => {
    setIsWithdrawModalShow(true);

    setTimeout(() => {
      navigation.popToTop();
    }, 3000);
  };

  return (
    <Screen>
      <Header title={'Withdraw'} />
      <View style={[globalStyles.flexGrow1, globalStyles.screenPadding, globalStyles.gap15]}>
        <AppTextInput label={'Bank Name'} />
        <AppTextInput label={'Account Number'} />
      </View>

      <AppButton title={'Withdraw'} onPress={handleWithdraw} style={[globalStyles.screenMargin, {alignSelf: 'center', width: '90%'}, globalStyles.bottomButton]} />
      <SuccessModal title={'Withdraw Done'} isVisible={isWithdrawModalShow} setIsVisible={setIsWithdrawModalShow} />
    </Screen>
  );
};

export default WithdrawInfo;
