import React from 'react';
import globalStyles from '../../../globalStyles';
import {KeyboardAvoidingView, ScrollView} from 'react-native';
import {isIOS} from '../../helpers';

const AppScrollView = ({children, style, contentContainerStyle}) => {
  return (
    <KeyboardAvoidingView behavior={isIOS ? 'padding' : undefined} style={globalStyles.flex1}>
      <ScrollView style={[globalStyles.flex1, style]} keyboardShouldPersistTaps="handled" contentContainerStyle={[globalStyles.scrollView, contentContainerStyle]} showsVerticalScrollIndicator={false}>
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AppScrollView;
