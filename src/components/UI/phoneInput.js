import React from 'react';
import {StyleSheet, View} from 'react-native';
import RNPhoneInput from 'react-native-phone-number-input';
import {COLORS, FONTS} from '../../utils/theme';
import AppText from '../text';

const PhoneInput = ({disabled}) => {
  return (
    <View>
      <AppText style={styles.label}>Phone Number</AppText>
      <RNPhoneInput
        placeholder="(604) 925-7595"
        containerStyle={styles.phoneInput}
        textInputStyle={styles.phoneInputTextInput}
        textContainerStyle={styles.phoneInputTextContainer}
        textInputProps={{placeholderTextColor: COLORS.textGray}}
        codeTextStyle={styles.phoneInputCodeText}
        defaultCode="US"
        layout="second"
        onChangeText={text => {}}
        onChangeFormattedText={text => {}}
        disabled={disabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  phoneInput: {
    width: '100%',
    height: 45,
    backgroundColor: COLORS.black,
    borderRadius: 14,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: COLORS.white,
  },
  phoneInputTextInput: {
    color: COLORS.white,
    fontFamily: FONTS.regular,
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.black,
    includeFontPadding: false,
    textAlignVertical: 'center',
    fontSize: 15,
  },
  phoneInputTextContainer: {
    paddingVertical: 0,
    paddingHorizontal: 0,
    margin: 0,
  },
  phoneInputCodeText: {
    color: COLORS.white,
    fontFamily: FONTS.regular,
    includeFontPadding: false,
    textAlignVertical: 'center',
    fontSize: 15,
  },
  label: {fontFamily: FONTS.medium, marginBottom: 7},
});

export default PhoneInput;
