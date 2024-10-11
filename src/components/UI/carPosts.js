import {FlatList} from 'react-native';
import React from 'react';
import globalStyles from '../../../globalStyles';
import CarPost from './carPost';

const CarPosts = ({posts, isLikeIconShow, isPicupAndReturnDatesShow, onPress}) => {
  return (
    <FlatList
      data={posts}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={[globalStyles.flexGrow1, globalStyles.screenPadding, globalStyles.inputsGap, globalStyles.screenPaddingBottom10]}
      renderItem={({item, index}) => <CarPost onPress={onPress} post={item} isPicupAndReturnDatesShow={isPicupAndReturnDatesShow} isLikeIconShow={isLikeIconShow} />}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default CarPosts;
