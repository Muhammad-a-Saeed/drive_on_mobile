import {FlatList, Image, ImageBackground, Pressable, Text, View} from 'react-native';
import React from 'react';
import {AppText, AppTextInput, PostCardWithLeftRightDetail, Screen} from '../../../components';
import {WhiteCarImage} from '../../../assets/images';
import {exploreStyles} from '../styles';
import globalStyles from '../../../../globalStyles';
import {EXPLORE_POSTS} from '../../../static';
import {FONTS} from '../../../utils/theme';
import {FilterWhiteIcon, SearchIcon, SearchWhiteIcon} from '../../../assets/icons';
import {ROUTES} from '../../../utils/constants';
import {isIOS} from '../../../helpers';

const Explore = ({navigation}) => {
  const renderListHeaderComponent = () => {
    return (
      <View>
        <Image source={WhiteCarImage} style={exploreStyles.topcarImage} />
        <View style={exploreStyles.findDriveContainer}>
          <AppText fontSize={24} fontFamily={FONTS.semiBold}>
            Find Your Drive
          </AppText>
        </View>
      </View>
    );
  };

  return (
    <View style={globalStyles.flex1}>
      <Pressable style={exploreStyles.searchContainer} onPress={() => (isIOS ? {} : navigation.navigate(ROUTES.LocationBasedSearch))}>
        <AppTextInput
          placeholder="Search"
          containerStyle={{borderWidth: 0}}
          LeftIcon={SearchWhiteIcon}
          RightIcon={FilterWhiteIcon}
          onPressRightIcon={() => navigation.navigate(ROUTES.CarFilter)}
          editable={false}
          onPressIn={() => navigation.navigate(ROUTES.LocationBasedSearch)}
          selectTextOnFocus={false}
        />
      </Pressable>

      <FlatList
        style={exploreStyles.flatList}
        showsVerticalScrollIndicator={false}
        data={EXPLORE_POSTS}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => <PostCardWithLeftRightDetail item={item} index={index} />}
        contentContainerStyle={[globalStyles.flexGrow1, globalStyles.inputsGap]}
        ListHeaderComponent={renderListHeaderComponent}
      />
    </View>
  );
};

export default Explore;
