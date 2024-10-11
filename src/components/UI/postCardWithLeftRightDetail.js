import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import React from 'react';
import {RedCarImage} from '../../assets/images';
import {wp} from '../../helpers';
import AppText from '../text';
import {HeartActiveIcon, HeartIcon} from '../../assets/icons';
import {COLORS, FONTS} from '../../utils/theme';
import StarRating from '../starRating';
import globalStyles from '../../../globalStyles';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../utils/constants';

const PostCardWithLeftRightDetail = ({item, index}) => {
  const navigation = useNavigation();
  const isOdd = index % 2 === 0;
  return (
    <View style={styles.container}>
      <Image
        source={RedCarImage}
        style={isOdd ? styles.leftImage : styles.rightimage}
      />
      <Pressable
        onPress={() => navigation.navigate(ROUTES.CarDetail)}
        style={
          isOdd
            ? styles.rightdetailCardContainer
            : styles.leftDetailCardContainer
        }>
        <View style={styles.rowItem}>
          <AppText blackText={true} fontSize={16} fontFamily={FONTS.medium}>
            Audi E-Tron GT
          </AppText>
          <HeartIcon width={22} height={22} />
        </View>
        <AppText greyText>
          <AppText secondary fontFamily={FONTS.semiBold} fontSize={16}>
            $50
          </AppText>
          /Hr
        </AppText>

        <AppText greyText>Johar town,Lahore</AppText>
        <AppText greyText fontSize={12}>
          4 days ago
        </AppText>

        <View style={styles.rowItem}>
          <StarRating
            size={16}
            starContainerStyle={{alignSelf: 'flex-start'}}
          />
          <AppText blackText fontSize={12} greyText>
            (4.5)
          </AppText>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {borderRadius: 10, height: 280, marginHorizontal: wp(3)},
  leftImage: {
    width: '60%',
    height: wp(50),
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  rightimage: {
    width: '60%',
    height: wp(50),
    borderRadius: 20,
    alignSelf: 'flex-end',
  },
  rowItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftDetailCardContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    alignSelf: 'flex-start',
    padding: 15,
    width: '60%',
    gap: 10,
    bottom: 0,
    position: 'absolute',
  },
  rightdetailCardContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    alignSelf: 'flex-end',
    padding: 15,
    width: '60%',
    gap: 10,
    bottom: 0,
    position: 'absolute',
  },
});

export default PostCardWithLeftRightDetail;
