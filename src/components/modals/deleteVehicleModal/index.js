import {View, StyleSheet} from 'react-native';
import React from 'react';
import globalStyles from '../../../../globalStyles';
import AppModal from '../../modal';
import {WarningIcon} from '../../../assets/icons';
import AppText from '../../text';
import {completeModalStyles} from '../../../screens/auth/styles';
import {FONTS} from '../../../utils/theme';
import AppButton from '../../button';

const DeleteVehicleModal = ({isVisible, setIsVisible, onPressYes, onPressNo}) => {
  return (
    <AppModal isVisible={isVisible} setIsVisible={setIsVisible}>
      <View style={globalStyles.modalContainer}>
        <WarningIcon width={140} height={140} />
        <AppText secondary fontSize={18} fontFamily={FONTS.bold} style={completeModalStyles.headingtitle}>
          {'Are You Sure you want to Delete Vehicle'}
        </AppText>
        <AppText style={completeModalStyles.textContent} greyText>
          Lorem ipsum dolor sit amet consectetur. Maecenas nisi vitae a mattis sed dignissim.
        </AppText>

        <View style={styles.buttonContainer}>
          <AppButton title={'Yes'} style={styles.button} onPress={onPressYes} />
          <AppButton title={'No'} transparent style={styles.button} onPress={onPressNo} />
        </View>
      </View>
    </AppModal>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {width: '100%', gap: 15, marginTop: 30, alignItems: 'center'},
  button: {width: '70%'},
});

export default DeleteVehicleModal;
