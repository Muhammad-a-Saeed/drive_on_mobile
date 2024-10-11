import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import AppText from '../text';
import {COLORS, FONTS} from '../../utils/theme';

const AppButton = ({title, style, textStyle, onPress, LeftIcon, RightIcon, secondary = true, whiteButton = false, disabled, transparent = false, ...restProps}) => {
  let buttonStyle = styles.secondary;
  if (disabled) buttonStyle = {...styles.secondary, ...styles.disabled};
  else if (whiteButton) buttonStyle = styles.whiteBtn;
  else if (transparent) buttonStyle = styles.transparent;
  // else if (secondary) buttonStyle = styles.secondary;

  let appTextStyle = styles.secondaryText;
  if (disabled) appTextStyle = styles.disabledText;
  else if (whiteButton) appTextStyle = styles.whiteBtnText;
  else if (transparent) appTextStyle = styles.transparentBtnText;
  // else if (secondary) appTextStyle = styles.secondaryText;

  return (
    <TouchableOpacity disabled={disabled} style={[buttonStyle, style]} onPress={onPress} activeOpacity={0.5} {...restProps}>
      {LeftIcon ? LeftIcon : null}
      <AppText style={[appTextStyle, textStyle]}>{title}</AppText>
      {RightIcon ? RightIcon : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  whiteBtn: {
    width: '100%',
    height: 45,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
    flexDirection: 'row',
  },

  secondary: {
    width: '100%',
    height: 45,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.secondary,
    flexDirection: 'row',
    gap: 10,
  },

  transparent: {
    width: '100%',
    height: 45,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: COLORS.secondary,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 10,
  },

  primaryText: {
    color: COLORS.white,
    fontSize: 16,
    fontFamily: FONTS.semiBold,
  },

  transparentBtnText: {
    color: COLORS.secondary,
    fontSize: 16,
    fontFamily: FONTS.semiBold,
  },
  whiteBtnText: {
    color: COLORS.secondary,
    fontSize: 16,
    fontFamily: FONTS.semiBold,
  },

  disabledText: {
    color: COLORS.black,
    fontSize: 16,
    fontFamily: FONTS.semiBold,
  },

  secondaryText: {
    color: COLORS.white,
    fontSize: 16,
    fontFamily: FONTS.semiBold,
  },

  disabled: {
    backgroundColor: COLORS.grey3,
  },
});

export default AppButton;
