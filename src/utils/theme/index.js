import {DefaultTheme} from '@react-navigation/native';

export const COLORS = {
  primary: '#121212',
  secondary: '#C12127',
  lightBlack: '#090302',
  black: '#000000',
  white: '#FFFFFF',
  grey1: '#f3f6f4',
  grey2: '#eeeeee',
  grey3: '#bcbcbc',
  grey4: '#999999',
  grey5: '#FAFAFA',
  darkGrey: '#2A2A2C',
  textGray: 'rgba(127, 127, 127, 1)',
  pink: 'rgba(232, 63, 111, 1)',
  yellow: 'rgba(255, 191, 0, 1)',
  green: '#259F46',
  red: '#FF0000',
  transparent: 'transparent',
  smokeWhite: '#F5F5F5',
};

export const FONTS = {
  black: 'Poppins-Black',
  bold: 'Poppins-Bold',
  extraBold: 'Poppins-ExtraBold',
  extraLight: 'Poppins-ExtraLight',
  light: 'Poppins-Light',
  medium: 'Poppins-Medium',
  regular: 'Poppins-Regular',
  semiBold: 'Poppins-SemiBold',
  thin: 'Poppins-Thin',
  Italic: 'Poppins-Italic',
};

export const NavigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: COLORS.primary,
    background: COLORS.primary,
  },
};
