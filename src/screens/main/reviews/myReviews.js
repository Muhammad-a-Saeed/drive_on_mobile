import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {Header, Screen} from '../../../components';
import {REVIEWS} from '../../../static';
import ReviewCard from '../../../components/UI/reviewCard';
import globalStyles from '../../../../globalStyles';

const MyReviews = () => {
  return (
    <Screen>
      <Header title={'My Reviews'} />

      <FlatList
        data={REVIEWS}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => <ReviewCard item={item} />}
        contentContainerStyle={[globalStyles.flexGrow1, globalStyles.screenPadding, globalStyles.gap15]}
      />
    </Screen>
  );
};

export default MyReviews;
