import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../../utils/theme';
import {TransactionIcon, WhiteBelowArrowIcon} from '../../assets/icons';
import AppText from '../text';
import globalStyles from '../../../globalStyles';

const TransactionDetailCard = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <WhiteBelowArrowIcon />
      </View>
      <View style={[globalStyles.flex1, styles.gap]}>
        <AppText>Username</AppText>
        <AppText fontSize={12}>0817239419528913</AppText>
      </View>

      <View style={[styles.gap, styles.rightContent]}>
        <AppText fontSize={12} fontFamily={FONTS.medium} secondary>
          +500$
        </AppText>
        <AppText fontSize={12}>09:07 AM</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: COLORS.darkGrey, padding: 10, borderRadius: 12, flexDirection: 'row', alignItems: 'center', gap: 10},
  gap: {gap: 5},
  rightContent: {alignItems: 'flex-end'},
  icon: {backgroundColor: COLORS.textGray, borderRadius: 5, padding: 3},
});

export default TransactionDetailCard;
