import {View, Text} from 'react-native';
import React from 'react';
import {AppTextInput, CarPosts, Header, Screen} from '../../../components';
import {ChevronCircledIcon} from '../../../assets/icons';
import {searchStyles} from '../styles';
import {POSTS} from '../../../static';

const SearchedPosts = () => {
  const renderHeaderSearchBar = () => {
    return (
      <View style={searchStyles.searchHeaderContainer}>
        <ChevronCircledIcon />
        <AppTextInput placeholder="Search" value={'DHA Phase 1'} editable={false} containerStyle={{minWidth: '87%'}} />
      </View>
    );
  };

  return (
    <Screen>
      <Header LeftIcon={renderHeaderSearchBar()} />

      <CarPosts posts={POSTS} />
    </Screen>
  );
};

export default SearchedPosts;
