import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert, Dimensions, PermissionsAndroid, Platform} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

const {width, height} = Dimensions.get('window');

export const wp = p => width * (p / 100);
export const hp = p => height * (p / 100);

export const isIOS = Platform.OS === 'ios';

export const imagePickerFromGallery = async () => {
  try {
    return await launchImageLibrary();
  } catch (error) {
    console.log(error);
  }
};

export const onAPIError = error => console.log('ERROR > ', error);

export const showConsole = (title, message) => console.log(title, message);

export const OSVersion = parseInt(Platform.Version, 10);

export const storeDataToStorage = async (key, value) => {
  await AsyncStorage.setItem(key, JSON.stringify(value));
};

export const removeDataFromStorage = async key => {
  await AsyncStorage.removeItem(key);
};

export const getDataFromStorage = async value => {
  let data = await AsyncStorage.getItem(value);
  let newData = JSON.parse(data);
  return newData;
};

export const getUserFullName = (first, last) => {
  return `${first} ${last}`;
};

export const confirmationAlert = (message, cancelBtnText, okayBtnText) => {
  return new Promise((resolve, reject) => {
    Alert.alert('Confirm', message, [
      {text: cancelBtnText || 'Cancel', onPress: () => resolve(false)},
      {text: okayBtnText || 'Ok', onPress: () => resolve(true)},
    ]);
  });
};

export const commonAlert = (title, message) => {
  return new Promise((resolve, reject) => {
    Alert.alert(title, message, [{text: 'Ok', onPress: () => resolve(true)}]);
  });
};
