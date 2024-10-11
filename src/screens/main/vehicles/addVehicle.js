import {View, Text} from 'react-native';
import React from 'react';
import {AppButton, AppScrollView, AppText, AppTextInput, GooglePlacesInput, Header, Screen} from '../../../components';
import {SearchIcon} from '../../../assets/icons';
import globalStyles from '../../../../globalStyles';
import {FONTS} from '../../../utils/theme';
import {ROUTES} from '../../../utils/constants';

const AddVehicle = ({navigation}) => {
  return (
    <Screen>
      <Header title={'Add Vehicle'} />
      <AppScrollView>
        <View style={globalStyles.inputsGap}>
          <AppTextInput placeholder="xcx" label={'Name'} />
          <AppTextInput placeholder="/hr" label={'Rate'} />
          <AppTextInput placeholder="/hr" label={'Location'} RightIcon={SearchIcon} />
          <AppTextInput placeholder="" label={'Description'} />
        </View>

        <AppText fontFamily={FONTS.semiBold} style={{marginVertical: 20}}>
          Specification
        </AppText>

        <View style={globalStyles.inputsGap}>
          <AppTextInput placeholder="ABC" label={'Company Name'} />
          <AppTextInput placeholder="XYZ" label={'Modal'} />
          <AppTextInput placeholder="2021" label={'Year'} />
        </View>

        <AppButton title={'Add'} style={globalStyles.bottomButton} onPress={() => navigation.navigate(ROUTES.AddRentalTermsAndConditions)} />
      </AppScrollView>
    </Screen>
  );
};

export default AddVehicle;
