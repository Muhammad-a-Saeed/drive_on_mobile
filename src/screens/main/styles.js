import {StatusBar, StyleSheet} from 'react-native';
import {hp, isIOS, wp} from '../../helpers';
import {COLORS, FONTS} from '../../utils/theme';
import globalStyles from '../../../globalStyles';

export const exploreStyles = StyleSheet.create({
  topcarImage: {
    width: '100%',
    height: hp(40),
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  findDriveContainer: {
    backgroundColor: 'rgba(177, 11, 11, 0.7)',
    alignSelf: 'center',
    padding: 15,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  searchContainer: {
    position: 'absolute',
    top: 75,
    width: '90%',
    alignSelf: 'center',
    borderWidth: 0,
  },
  flatList: {zIndex: -1},
});

export const filterStyles = StyleSheet.create({
  container: {gap: 15, marginTop: 20},
  filterContainer: {flexDirection: 'row', alignItems: 'center', gap: 10},
});

export const checkoutStyles = StyleSheet.create({
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  carImage: {width: '50%', height: 80, borderRadius: 10},
  topContentContainer: {flexDirection: 'row', alignItems: 'center'},
  content: {gap: 15},
  timingContainer: {flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 25},
  itemsContainer: {backgroundColor: COLORS.darkGrey, padding: 15, borderRadius: 12, marginTop: 20},
  itemContainer: {flexDirection: 'row', justifyContent: 'space-between'},
});

export const rentalTermsStyles = StyleSheet.create({
  buttonContainer: {
    ...globalStyles.screenPadding,
    ...globalStyles.bottomButton,
    flexDirection: 'row',
    alignSelf: 'center',
    gap: 20,
  },
  button: {width: '40%', height: 40},
});
export const bookingsStyles = StyleSheet.create({
  tabContainer: {flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderColor: COLORS.darkGrey},
  tab: {width: wp(40), borderBottomWidth: 1, alignItems: 'center', padding: 12},
});

export const driverInfoStyles = StyleSheet.create({
  infoContainer: {
    backgroundColor: COLORS.darkGrey,
    borderRadius: 20,
    marginTop: 20,
  },
  infoItem: {flexDirection: 'row', alignItems: 'center', padding: 15, gap: 10},
  infoItemcontent: {gap: 3, marginStart: '3%', flex: 1},
  iconTick: {position: 'absolute', bottom: -7, right: -3},
});

export const drivingLicenseStyles = StyleSheet.create({
  textContainer: {},
  countText: {alignSelf: 'center'},
  topTextContent: {alignSelf: 'center', alignItems: 'center', gap: 10, marginTop: '15%'},
  card: {marginTop: '20%'},
});

export const settingStyles = StyleSheet.create({
  image: {width: 50, height: 50, borderRadius: 100},
  userProfileContainer: {flexDirection: 'row', alignItems: 'center', gap: 10, borderBottomWidth: 1, paddingBottom: 10, borderColor: COLORS.darkGrey},
  userNameContainer: {flex: 1},
  menuItemContainer: {flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: COLORS.darkGrey, padding: 12, borderRadius: 10},
  rowItem: {flexDirection: 'row', alignItems: 'center', gap: 12},
});

export const vehicleStyles = StyleSheet.create({
  addBtnContainer: {
    backgroundColor: COLORS.secondary,
    padding: 10,
    borderRadius: 100,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 15,
    right: 15,
  },
});

export const searchStyles = StyleSheet.create({
  searchHeaderContainer: {flexDirection: 'row', minWidth: '100%', flex: 1, alignItems: 'center', gap: 10},
  searchListView: {position: 'absolute', top: 45},
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    position: undefined,
    alignSelf: undefined,
  },
  currentLocationContainer: {flexDirection: 'row', gap: 10, alignItems: 'center', marginTop: 10},
  greyCircle: {backgroundColor: COLORS.darkGrey, padding: 10, borderRadius: 100},
  selectionLocationMapText: {fontFamily: FONTS.medium},
  currentLocation: {position: 'absolute', bottom: 120, right: 20},
  doneBtn: {position: 'absolute', bottom: 40, width: '90%', alignSelf: 'center'},
});

export const cardetailStyles = StyleSheet.create({
  image: {width: '100%', height: 300, zIndex: -1},
  backButton: {position: 'absolute', top: 60, marginHorizontal: 20},
  rowItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  rowItem1: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },
  marginTop20: {marginTop: 20},
  specContainer: {
    backgroundColor: '#1F1F1F',
    padding: 15,
    borderRadius: 15,
    gap: 20,
  },
  rowItemOfSpec: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingBottom: 15,
    borderColor: '#726D6D',
  },
  maplocation: {height: 120, borderRadius: 20},
  userPic: {width: 40, height: 40, borderRadius: 100},
  profileContainer: {flexDirection: 'row', alignItems: 'center', gap: 10, justifyContent: 'center'},
  actionBtnContainer: {flexDirection: 'row', alignSelf: 'center', gap: 25, ...globalStyles.screenMargin, marginVertical: 15, marginBottom: 30},
  actionBtn: {width: '40%', height: 45},
});

export const reviewStyles = StyleSheet.create({
  starContainer: {width: '100%', gap: 5},
  ratingContainer: {width: '100%', marginTop: 30},
  reviewButton: {marginBottom: 20, marginTop: 10},
  yourReviewText: {fontFamily: FONTS.semiBold, fontSize: 18},
  feedbackText: {fontFamily: FONTS.medium},
  feedbackInput: {textAlignVertical: 'top', fontSize: 12},
  feedbackInputContainer: {marginTop: 10, height: 100, borderRadius: 20},
  count: {fontSize: 12, marginTop: 10},
  image: {width: 100, height: 100, borderRadius: 100},
  imagecontainer: {alignSelf: 'center', gap: 10, alignItems: 'center', marginBottom: 20},
});

export const chatStyles = StyleSheet.create({
  headImage: {width: 50, height: 50, borderRadius: 100},
  headContainer: {backgroundColor: COLORS.darkGrey, padding: 10, borderRadius: 15, flexDirection: 'row', alignItems: 'center', gap: 15},
  headContentContainer: {flex: 1, gap: 3},
  activeDot: {width: 10, height: 10, borderRadius: 100, backgroundColor: COLORS.secondary, marginEnd: '3%'},
  mainContainer: {marginTop: isIOS ? 60 : StatusBar.currentHeight, marginBottom: isIOS ? 60 : 0},
});

export const contactUsStyles = StyleSheet.create({
  rowItem: {flexDirection: 'row', alignItems: 'center', gap: 15},
});

export const walletStyles = StyleSheet.create({
  walletContainer: {flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: COLORS.darkGrey, paddingHorizontal: 15, borderRadius: 12},
  walletCurrentBalText: {gap: 10},
  sectionContainer: {flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 20},
  withdrawButton: {position: 'absolute', bottom: 30, alignSelf: 'center', width: '90%'},
});
export const requestStyles = StyleSheet.create({
  profileImage: {width: 50, height: 50, borderRadius: 100},
  profileContainer: {flexDirection: 'row', alignItems: 'center', gap: 10},
  nodataContainer: {alignItems: 'center', justifyContent: 'center', flex: 1},
});

export const deleteAccountStyles = StyleSheet.create({
  deleteAccountText: {fontFamily: FONTS.medium, color: COLORS.red},
  inputLabel: {fontFamily: FONTS.semiBold, marginBottom: 10, marginTop: 20},
  paragraphText: {fontSize: 12},
});

export const inboxStyles = StyleSheet.create({
  image: {width: 40, height: 40, borderRadius: 100},
  myMessageContainer: {backgroundColor: COLORS.black, padding: 10, borderRadius: 10, borderBottomRightRadius: 0},
  otherMessageContainer: {backgroundColor: COLORS.grey1, padding: 10, borderRadius: 10, borderTopLeftRadius: 0},
  myMessageText: {color: COLORS.white},
  otherMessageText: {color: COLORS.black},

  myMessageMainContainer: {flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-end', maxWidth: '80%', gap: 10},
  otherMessageMainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    maxWidth: '70%',
    gap: 10,
  },
  messageTime: {fontSize: 12},
  chatHeading: {flexDirection: 'row', gap: 10, alignItems: 'center'},
  chatHeadingText: {fontSize: 12},
  inputContainer: {flexDirection: 'row', alignItems: 'center', ...globalStyles.screenPadding, paddingBottom: isIOS ? 20 : 0, gap: 10},
  input: {flexGrow: 1},
  textInput: {backgroundColor: COLORS.white},
  messageImage: {width: 100, height: 100, borderRadius: 15},

  welcomeText: {fontSize: 12},
  username: {fontFamily: FONTS.semiBold},
  userContainer: {flexDirection: 'row', alignItems: 'center', gap: 15},
  gap3: {gap: 3},
  contentContainer: {paddingHorizontal: '5%', flexGrow: 1, paddingBottom: '3%'},
  sendContainer: {backgroundColor: COLORS.black, padding: 10, borderRadius: 100},
  inputRightContainer: {flexDirection: 'row', alignItems: 'center', gap: 10},
});
