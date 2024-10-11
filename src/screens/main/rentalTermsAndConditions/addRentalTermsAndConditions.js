import {View, Text} from 'react-native';
import React from 'react';
import {AppButton, AppScrollView, AppText, AppTextInput, Header, Screen} from '../../../components';
import {reviewStyles} from '../styles';
import globalStyles from '../../../../globalStyles';

const AddRentalTermsAndConditions = ({navigation}) => {
  return (
    <Screen>
      <Header title={'Add Rental Terms & Conditions'} />

      <AppScrollView>
        <View style={globalStyles.flex1}>
          <AppText style={{marginBottom: 5}}>Rental Terms & Conditions</AppText>
          <AppTextInput containerStyle={reviewStyles.feedbackInputContainer} textInputStyle={reviewStyles.feedbackInput} placeholder={'Type here...'} multiline={true} />
        </View>

        <AppButton title={'Add'} style={globalStyles.bottomButton} onPress={() => navigation.goBack()} />
      </AppScrollView>
    </Screen>
  );
};

export default AddRentalTermsAndConditions;
