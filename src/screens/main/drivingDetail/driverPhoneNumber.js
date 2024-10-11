import {View, Text, Pressable} from 'react-native';
import React, {useState} from 'react';
import {AppButton, AppScrollView, AppText, Header, Screen} from '../../../components';
import PhoneInput from '../../../components/UI/phoneInput';
import {TickMarkedIcon, TickUnMarkedIcon} from '../../../assets/icons';
import {signInStyles} from '../../auth/styles';
import globalStyles from '../../../../globalStyles';
import {useAccountType} from '../../../hooks';

const DriverPhoneNumber = ({navigation}) => {
  const {isOwner, isRenter} = useAccountType();
  const [check, setCheck] = useState(false);

  const handleCheck = () => {
    setCheck(p => !p);
  };

  return (
    <Screen>
      <Header title={'Phone Number'} />
      <AppScrollView>
        {isRenter && <AppText>Lorem ipsum dolor sit amet consectetur. Pellentesque tincidunt eu convallis pharetra </AppText>}
        <View style={{marginTop: 20, ...globalStyles.flex1}}>
          <PhoneInput disabled />
          {isRenter && (
            <Pressable style={[signInStyles.rememberMeContainer, {marginTop: 15}]} onPress={handleCheck}>
              {check ? <TickUnMarkedIcon width={25} height={25} /> : <TickMarkedIcon width={25} height={25} />}
              <AppText style={globalStyles.flex1}>Lorem ipsum dolor sit amet consectetur. Vitae dictum mauris nulla platea sed. Egestas nulla.</AppText>
            </Pressable>
          )}
        </View>

        {isRenter && <AppButton title={'Continue'} disabled={false} style={globalStyles.bottomButton} onPress={() => navigation.goBack()} />}
      </AppScrollView>
    </Screen>
  );
};

export default DriverPhoneNumber;
