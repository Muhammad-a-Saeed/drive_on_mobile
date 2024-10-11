import React from 'react';
import {CarPosts, Header, Screen} from '../../../components';
import {POSTS} from '../../../static';

const FavoritePosts = () => {
  return (
    <Screen>
      <Header title={'Favorites'} LeftIcon={true} onPressLeftIcon={() => {}} />
      <CarPosts posts={POSTS.map(p => ({...p, isLiked: true}))} />
    </Screen>
  );
};

export default FavoritePosts;
