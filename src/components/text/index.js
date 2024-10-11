import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {COLORS, FONTS} from '../../utils/theme';

function AppText({children, style, greyText = false, darkGrayText = false, secondary = false, blackText = false, fontSize = 14, fontFamily, onPress, ...otherProps}) {
  let textColor = COLORS.white;
  if (secondary) textColor = COLORS.secondary;
  else if (greyText) textColor = COLORS.textGray;
  else if (darkGrayText) textColor = COLORS.darkGrey;
  else if (blackText) textColor = COLORS.black;

  return (
    <Text onPress={onPress} style={[styles.text, {color: textColor, fontSize, fontFamily}, style]} {...otherProps}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: FONTS.regular,
    includeFontPadding: false,
  },
});

export default AppText;
