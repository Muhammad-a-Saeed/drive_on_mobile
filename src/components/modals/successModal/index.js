import {View, Text} from 'react-native';
import React from 'react';
import globalStyles from '../../../../globalStyles';
import {TickCircledIcon} from '../../../assets/icons';
import {FONTS} from '../../../utils/theme';
import AppText from '../../text';
import AppModal from '../../modal';
import {completeModalStyles} from '../../../screens/auth/styles';

const SuccessModal = ({isVisible, setIsVisible, title}) => {
  return (
    <AppModal isVisible={isVisible} setIsVisible={setIsVisible}>
      <View style={globalStyles.modalContainer}>
        <TickCircledIcon width={140} height={140} />
        <AppText secondary fontSize={18} fontFamily={FONTS.bold} style={completeModalStyles.headingtitle}>
          {title}
        </AppText>
        <AppText style={completeModalStyles.textContent} greyText>
          Lorem ipsum dolor sit amet consectetur. Maecenas nisi vitae a mattis sed dignissim.
        </AppText>
      </View>
    </AppModal>
  );
};

export default SuccessModal;
