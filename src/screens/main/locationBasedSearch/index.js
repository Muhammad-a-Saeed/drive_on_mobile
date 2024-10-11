import {View, Pressable} from 'react-native';
import React from 'react';
import {AppText, GooglePlacesInput, Header, Screen, SeperatorLine} from '../../../components';
import {searchStyles} from '../styles';
import {ChevronCircledIcon, LocationCircledIcon, MapRedIcon} from '../../../assets/icons';
import {FONTS} from '../../../utils/theme';
import globalStyles from '../../../../globalStyles';
import {ROUTES} from '../../../utils/constants';

export const renderHeaderSearchBar = () => {
  return (
    <View style={searchStyles.searchHeaderContainer}>
      <ChevronCircledIcon />
      <GooglePlacesInput listViewStyle={searchStyles.searchListView} containerStyle={{width: '100%'}} />
    </View>
  );
};

const LocationBasedSearch = ({navigation}) => {
  return (
    <Screen>
      <Header LeftIcon={renderHeaderSearchBar()} />
      <View style={[globalStyles.flex1, globalStyles.screenPadding, {zIndex: -1}]}>
        <Pressable style={searchStyles.currentLocationContainer} onPress={() => navigation.navigate(ROUTES.SearchedPosts)}>
          <LocationCircledIcon />

          <View>
            <AppText style={{fontFamily: FONTS.medium}}>Current Location</AppText>
            <AppText greyText style={{fontSize: 12}}>
              House 307 block c XYZ Society Abc city
            </AppText>
          </View>
        </Pressable>
        <SeperatorLine style={{marginVertical: 10}} />
        <View style={[searchStyles.currentLocationContainer]}>
          <View style={searchStyles.greyCircle}>
            <MapRedIcon />
          </View>
          <AppText onPress={() => navigation.navigate(ROUTES.SelectLocationOnMap)} style={searchStyles.selectionLocationMapText}>
            {'Set Location on map'}
          </AppText>
        </View>
      </View>
    </Screen>
  );
};

export default LocationBasedSearch;
