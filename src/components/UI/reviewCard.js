import {View, StyleSheet, Image} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../../utils/theme';
import {RedCarImage} from '../../assets/images';
import AppText from '../text';
import globalStyles from '../../../globalStyles';
import StarRating from '../starRating';

const ReviewCard = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContentContainer}>
        <Image source={RedCarImage} style={styles.image} />
        <View style={globalStyles.flex1}>
          <AppText fontFamily={FONTS.semiBold}>{item.title}</AppText>
          <AppText greyText fontSize={12}>
            {item.timestamp}
          </AppText>
        </View>
      </View>

      <StarRating size={12} starContainerStyle={{marginVertical: 5}} />

      <AppText fontSize={12}>{item.description}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: COLORS.darkGrey, borderRadius: 12, padding: 12},
  image: {width: 40, height: 40, borderRadius: 100},
  topContentContainer: {flexDirection: 'row', alignItems: 'center', gap: 10},
});

export default ReviewCard;
