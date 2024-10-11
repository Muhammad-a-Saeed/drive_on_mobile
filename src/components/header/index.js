import {View, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import AppText from '../text';
import {FONTS} from '../../utils/theme';
import {ChevronCircledIcon} from '../../assets/icons';

const Header = ({title, RightIcon, LeftIcon, renderCenterContent, titleTextStyle, onPressLeftIcon, onPressRightIcon, leftStyle, rightIconStyle}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable style={[styles.leftContainer, leftStyle]} onPress={onPressLeftIcon ? onPressLeftIcon : () => (navigation.canGoBack() ? navigation.goBack() : null)}>
        {LeftIcon ? LeftIcon : <ChevronCircledIcon />}
        {title && <AppText style={[styles.titleText, titleTextStyle]}>{title}</AppText>}
      </Pressable>

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
    // backgroundColor: 'red',
  },

  leftContainer: {
    position: 'absolute',
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  rightContainer: {
    position: 'absolute',
    alignSelf: 'flex-end',
  },
  titleText: {fontFamily: FONTS.semiBold},
});

export default Header;
