import {StyleSheet} from 'react-native';
import {isIOS, wp} from '../../helpers';
import {COLORS, FONTS} from '../../utils/theme';

export const authCommonStyles = StyleSheet.create({
  flex1: {flex: 1},
  flexGrow1: {flexGrow: 1},
  continueButtonVerticalMargin: {marginVertical: isIOS ? 10 : 30},
  screenHeading: {marginTop: 20, marginBottom: 25},
});

export const splashStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const accountTypeStyles = StyleSheet.create({
  headText: {gap: 7, marginTop: 20},
  ORText: {alignSelf: 'center', fontSize: 16, fontFamily: FONTS.bold},
  buttonContainer: {gap: 15, marginTop: 40, flex: 1},
  signInText: {fontSize: 16, textDecorationLine: 'underline'},
  alreadyAccountText: {alignSelf: 'center'},
});

export const signInStyles = StyleSheet.create({
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    alignSelf: 'flex-start',
  },
  socialIconContainer: {
    backgroundColor: COLORS.primary,
    width: 35,
    height: 35,
    alignItems: 'center',
    borderRadius: 100,
  },

  rememberForgotContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  socialContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 30,
    alignSelf: 'center',
  },
  bottomContent: {gap: 30},
  topContent: {flex: 1},
  otpInput: {borderWidth: 1, borderBottomWidth: 1, borderRadius: 100, height: 50, width: 50, fontSize: 14, fontFamily: FONTS.semiBold, marginTop: 40, color: COLORS.primary},

  underlineAndMediumText: {fontFamily: FONTS.medium, textDecorationLine: 'underline'},
  textAlignCenter: {textAlign: 'center'},
  accountRelatedText: {textAlign: 'center', marginTop: 25, fontFamily: FONTS.medium},
  otpInput: {borderWidth: 1, borderBottomWidth: 1, borderRadius: 100, height: 50, width: 50, fontSize: 14, fontFamily: FONTS.semiBold, marginTop: 40, color: COLORS.secondary},
});

export const onboardingStyles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 100,
  },
  flatList: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingBottom: 100,
  },
  imageContainer: {width: '100%', height: '100%'},

  onBoardContainer: {width: wp(100), alignItems: 'center'},
  headText: {fontFamily: FONTS.bold, textAlign: 'center', fontSize: 18},
  headDescription: {textAlign: 'center', marginTop: 10},
  textContainer: {width: '80%', marginTop: 35, alignSelf: 'center'},
});

export const profileStyles = StyleSheet.create({
  cameraIcon: {position: 'absolute', bottom: 5, right: 5},
  avatarContainer: {alignSelf: 'center', marginTop: 20, marginBottom: 10},
  image: {width: 120, height: 120, borderRadius: 100},
  profileCreatedTitle: {fontFamily: FONTS.semiBold, fontSize: 18, marginVertical: 20},
  profileCreatedDesc: {textAlign: 'center', width: '75%'},
});

export const completeModalStyles = StyleSheet.create({
  textContent: {textAlign: 'center'},
  headingtitle: {marginTop: 20, marginBottom: 20, textAlign: 'center'},
});
