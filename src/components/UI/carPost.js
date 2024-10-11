import {Pressable, Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../../utils/theme';
import AppText from '../text';
import StarRating from '../starRating';
import {HearWhiteIcon, HeartFilledIcon, RedStarIcon} from '../../assets/icons';
import {checkoutStyles} from '../../screens/main/styles';
import globalStyles from '../../../globalStyles';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../utils/constants';

const CarPost = ({post, isPicupAndReturnDatesShow, isLikeIconShow = true, onPress}) => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={onPress ? onPress : () => navigation.navigate(ROUTES.CarDetail)} style={styles.container}>
      <Image source={post?.image} style={styles.image} />
      <View style={styles.detailContainer}>
        <View style={styles.titleAndPriceContainer}>
          <AppText fontFamily={FONTS.medium} fontSize={16}>
            {post.title}
          </AppText>
          <AppText greyText>
            <AppText secondary fontFamily={FONTS.semiBold}>
              $50
            </AppText>
            /Hr
          </AppText>
        </View>

        <View style={styles.ratingContainer}>
          <StarRating size={14} />
          <AppText>(4.5)</AppText>
        </View>

        <AppText style={styles.locationText}>{post?.location}</AppText>

        <View style={styles.timestampAndLikeContainer}>
          <AppText fontSize={12}>{post.timestamp}</AppText>
          {isLikeIconShow && (post?.isLiked ? <HeartFilledIcon width={20} height={20} /> : <HearWhiteIcon width={20} height={20} />)}
        </View>
      </View>

      {isPicupAndReturnDatesShow && (
        <View style={[checkoutStyles.timingContainer, {marginTop: 15}]}>
          <View style={globalStyles.gap5}>
            <AppText fontFamily={FONTS.bold} fontSize={16}>
              Sat,Apr 6
            </AppText>
            <AppText fontFamily={FONTS.semiBold}>10:00 Am</AppText>
          </View>

          <RedStarIcon width={20} height={20} />

          <View style={globalStyles.gap5}>
            <AppText fontFamily={FONTS.bold} fontSize={16}>
              Tue,Apr 6
            </AppText>
            <AppText fontFamily={FONTS.semiBold}> 10:00 Am</AppText>
          </View>
        </View>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: COLORS.darkGrey, padding: 15, borderRadius: 20},
  image: {width: '100%', height: 200, borderRadius: 15},
  titleAndPriceContainer: {flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'},
  ratingContainer: {flexDirection: 'row', alignItems: 'center', gap: 5, marginTop: 12},
  timestampAndLikeContainer: {flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'},
  locationText: {marginVertical: 12},
  detailContainer: {marginTop: 20},
});
export default CarPost;
