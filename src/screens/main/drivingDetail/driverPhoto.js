import {View, Pressable, Image} from 'react-native';
import React, {useState} from 'react';
import {AppButton, AppScrollView, AppText, AppTextInput, Header, Screen} from '../../../components';
import globalStyles from '../../../../globalStyles';
import {imagePickerFromGallery} from '../../../helpers';
import {CameraCircleIcon, UserAvatarIcon} from '../../../assets/icons';
import {profileStyles} from '../../auth/styles';
import {useAccountType} from '../../../hooks';

const DriverPhoto = ({navigation}) => {
  const {isOwner, isRenter} = useAccountType();
  const [image, setImage] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSelectImage = async () => {
    if (isOwner) return;
    const image = await imagePickerFromGallery();
    if (image.didCancel) return;

    if (image.assets.length > 0) setImage(image.assets[0]);
  };

  const handleContinue = () => {
    navigation.goBack();
  };

  return (
    <Screen>
      <Header title={isRenter ? 'Add Photo' : 'Renter Profile'} />

      <AppScrollView>
        {isRenter && <AppText>Lorem ipsum dolor sit amet consectetur. Pellentesque tincidunt eu convallis pharetra</AppText>}

        <View style={[globalStyles.inputsGap, globalStyles.flex1, {marginTop: 25}]}>
          <Pressable onPress={handleSelectImage} style={profileStyles.avatarContainer}>
            {image ? <Image source={{uri: image?.uri}} style={profileStyles.image} /> : <UserAvatarIcon width={120} height={120} />}
            {isRenter && <CameraCircleIcon width={25} height={25} style={profileStyles.cameraIcon} />}
          </Pressable>

          <View style={[globalStyles.flex1, globalStyles.inputsGap]}>
            <AppTextInput placeholder="Jhon" label={'First Name'} onChangeText={setFirstName} value={firstName} />
            <AppTextInput placeholder="Doe" label={'Last Name'} onChangeText={setLastName} value={lastName} />
          </View>
        </View>

        {isRenter && <AppButton title={'Continue'} onPress={handleContinue} style={globalStyles.bottomButton} />}
      </AppScrollView>
    </Screen>
  );
};

export default DriverPhoto;
