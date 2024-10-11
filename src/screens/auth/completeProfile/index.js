import {View, Pressable, Image} from 'react-native';
import React, {useState} from 'react';
import {AppButton, AppScrollView, AppText, AppTextInput, AuthHeader, Header, Screen, SuccessModal} from '../../../components';
import {FONTS} from '../../../utils/theme';
import globalStyles from '../../../../globalStyles';
import {authCommonStyles, profileStyles} from '../styles';
import {imagePickerFromGallery} from '../../../helpers';
import {CameraCircleIcon, UserAvatarIcon} from '../../../assets/icons';
import {ROUTES} from '../../../utils/constants';
import PhoneInput from '../../../components/UI/phoneInput';

const CompleteProfile = ({navigation, route}) => {
  const [image, setImage] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [completedModalVisible, setCompletedModalVisible] = useState(false);
  const {prevScreen} = route.params || {};
  const isPrevSettingScreen = prevScreen === 'settings';

  const handleSelectImage = async () => {
    const image = await imagePickerFromGallery();
    if (image.didCancel) return;

    if (image.assets.length > 0) setImage(image.assets[0]);
  };

  const handleContinue = () => {
    setCompletedModalVisible(true);

    setTimeout(() => {
      setCompletedModalVisible(false);
      // alert('Under Development');
      navigation.replace(ROUTES.Main);
    }, 3000);
  };

  const handleSaveChanges = () => {
    navigation.goBack();
  };

  const handleAddLater = () => {};

  return (
    <Screen>
      {isPrevSettingScreen ? <Header title={'Edit Profile'} /> : <AuthHeader />}
      <AppScrollView>
        {!isPrevSettingScreen && (
          <AppText secondary fontSize={18} fontFamily={FONTS.medium} style={authCommonStyles.screenHeading}>
            Complete Profile
          </AppText>
        )}

        <View style={[globalStyles.inputsGap, globalStyles.flex1]}>
          <Pressable onPress={handleSelectImage} style={profileStyles.avatarContainer}>
            {image ? <Image source={{uri: image?.uri}} style={profileStyles.image} /> : <UserAvatarIcon width={120} height={120} />}
            <CameraCircleIcon width={25} height={25} style={profileStyles.cameraIcon} />
          </Pressable>

          <View style={[globalStyles.flex1, globalStyles.inputsGap]}>
            <AppTextInput placeholder="Jhon" label={'First Name'} onChangeText={setFirstName} value={firstName} />
            <AppTextInput placeholder="Doe" label={'Last Name'} onChangeText={setLastName} value={lastName} />
            <PhoneInput />
          </View>
        </View>

        {isPrevSettingScreen ? (
          <AppButton title={'Save Changes'} onPress={handleSaveChanges} style={globalStyles.bottomButton} />
        ) : (
          <View style={[globalStyles.bottomButton, globalStyles.inputsGap]}>
            <AppButton title={'Continue'} onPress={handleContinue} />
            <AppButton title={'Add Later'} whiteButton onPress={handleAddLater} />
          </View>
        )}
      </AppScrollView>

      <SuccessModal title={'Profile Completed'} isVisible={completedModalVisible} setIsVisible={setCompletedModalVisible} />
    </Screen>
  );
};

export default CompleteProfile;
