import {View, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {FONTS} from '../../utils/theme';
import {ChevronCircledIcon, LogoIcon} from '../../assets/icons';
import {wp} from '../../helpers';

const AuthHeader = ({RightIcon, LeftIcon = true, onPressLeftIcon, onPressRightIcon, leftIconStyle, rightIconStyle}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable onPress={onPressLeftIcon ? onPressLeftIcon : () => (navigation.canGoBack() ? navigation.goBack() : null)} style={[styles.leftContainer, leftIconStyle]}>
        {LeftIcon && <ChevronCircledIcon />}
      </Pressable>

      <View style={styles.titleContainer}>
        <LogoIcon width={wp(30)} height={wp(30)} />
      </View>

      <Pressable onPress={onPressRightIcon} style={[styles.rightContainer, rightIconStyle]}>
        {RightIcon ? RightIcon : null}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 45,
    justifyContent: 'center',
    marginHorizontal: '5%',
    marginBottom: 15,
  },
  titleContainer: {
    position: 'absolute',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  leftContainer: {
    position: 'absolute',
    alignSelf: 'flex-start',
  },
  rightContainer: {
    position: 'absolute',
    alignSelf: 'flex-end',
  },
  titleText: {fontFamily: FONTS.semiBold},
});

export default AuthHeader;
