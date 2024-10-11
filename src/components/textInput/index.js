import React from 'react';
import {TextInput, View, StyleSheet, Pressable} from 'react-native';
import {COLORS, FONTS} from '../../utils/theme';
import AppText from '../text';

function AppTextInput({
  RightIcon,
  LeftIcon,
  width = '100%',
  onChangeText,
  containerStyle,
  placeholder = '',
  innerRef,
  onPressRightIcon,
  textInputStyle,
  secureTextEntry,
  label,
  multiline,
  value,
  ...otherProps
}) {
  return (
    <View>
      {label && <AppText style={styles.label}>{label}</AppText>}

      <View style={[styles.searchSection, containerStyle]}>
        {LeftIcon && <LeftIcon height={20} />}

        <TextInput
          ref={innerRef}
          style={[styles.input, textInputStyle]}
          selectionColor={COLORS.primary}
          placeholder={placeholder}
          placeholderTextColor={COLORS.textGray}
          secureTextEntry={secureTextEntry}
          onChangeText={onChangeText}
          multiline={multiline}
          value={value}
          cursorColor={COLORS.secondary}
          {...otherProps}
        />

        {RightIcon && <RightIcon height={20} width={20} onPress={onPressRightIcon} />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    borderRadius: 100,
    overflow: 'hidden',
    backgroundColor: COLORS.black,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: COLORS.white,
  },

  input: {
    flex: 1,
    backgroundColor: COLORS.black,
    fontFamily: FONTS.regular,
    fontSize: 15,
    color: COLORS.white,
    height: '100%',
    paddingHorizontal: 7,
    includeFontPadding: false,
  },
  label: {fontFamily: FONTS.medium, marginBottom: 7},
});

export default AppTextInput;
