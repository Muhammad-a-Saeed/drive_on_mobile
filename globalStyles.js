import {StyleSheet} from 'react-native';
import {COLORS} from './src/utils/theme';
import {isIOS} from './src/helpers';

const globalStyles = StyleSheet.create({
  screenPadding: {paddingHorizontal: '5%'},
  screenMargin: {marginHorizontal: '5%'},
  screenPaddingTop10: {paddingTop: 10},
  screenPaddingBottom10: {paddingBottom: 10},
  screenPaddingLeft10: {paddingLeft: 10},
  screenPaddingRight10: {paddingRight: 10},
  flex1JustifyAndItemCenter: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  justifyAndItemCenter: {alignItems: 'center', justifyContent: 'center'},
  flexRowJustifyAndItemCenter: {flexDirection: 'row', alignItems: 'center', justifyContent: 'center'},
  flexRowJustifyCenter: {flexDirection: 'row', justifyContent: 'center'},
  flexRowItemCenter: {flexDirection: 'row', alignItems: 'center'},
  textAlignCenter: {textAlign: 'center'},
  scrollContent: {paddingVertical: 20},
  flexGrow1: {flexGrow: 1},
  flex1: {flex: 1},
  // Shadows
  boxShadow1: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 2,
    backgroundColor: COLORS.white,
  },
  boxShadow2: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    backgroundColor: COLORS.white,
  },
  boxShadow3: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
    backgroundColor: COLORS.white,
  },
  scrollView: {flexGrow: 1, paddingHorizontal: '5%', paddingBottom: '3%'},
  inputsGap: {gap: 20},
  gap10: {gap: 10},
  gap5: {gap: 5},
  gap15: {gap: 15},
  bottomButton: {marginVertical: 30},
  modalContainer: {backgroundColor: COLORS.white, width: '80%', padding: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 20},
  tabBarIconContainer: {gap: 7, alignItems: 'center'},
});

export default globalStyles;
