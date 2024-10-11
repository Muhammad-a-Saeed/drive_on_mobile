import {View, StyleSheet} from 'react-native';
import React from 'react';
import globalStyles from '../../../../globalStyles';
import AppModal from '../../modal';
import {WarningIcon} from '../../../assets/icons';
import AppText from '../../text';
import {completeModalStyles} from '../../../screens/auth/styles';
import {FONTS} from '../../../utils/theme';
import AppButton from '../../button';

const SignInModal = ({isVisible, setIsVisible, title = 'To Make Reservation Please Sign In'}) => {
  return (
    <AppModal isVisible={isVisible} setIsVisible={setIsVisible}>
      <View style={globalStyles.modalContainer}>
        <WarningIcon width={140} height={140} />
        <AppText secondary fontSize={18} fontFamily={FONTS.bold} style={completeModalStyles.headingtitle}>
          {title}
        </AppText>
        <AppText style={completeModalStyles.textContent} greyText>
          Lorem ipsum dolor sit amet consectetur. Maecenas nisi vitae a mattis sed dignissim.
        </AppText>

        <View style={styles.buttonContainer}>
          <AppButton title={'Sign In'} style={styles.button} />
          <AppButton title={'Go Back'} transparent style={styles.button} />
        </View>
      </View>
    </AppModal>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {width: '100%', gap: 15, marginTop: 30, alignItems: 'center'},
  button: {width: '70%'},
});

export default SignInModal;
