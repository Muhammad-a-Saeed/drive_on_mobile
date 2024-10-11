import {View, Text} from 'react-native';
import React from 'react';
import {AppButton, GoogleMap, Header, Screen} from '../../../components';
import {renderHeaderSearchBar} from '../locationBasedSearch';
import globalStyles from '../../../../globalStyles';
import {Marker} from 'react-native-maps';
import {searchStyles} from '../styles';
import {LocationPrimaryIcon, MapPinIcon} from '../../../assets/icons';
import {ROUTES} from '../../../utils/constants';

const SelectLocationOnMap = ({navigation}) => {
  return (
    <Screen>
      <Header LeftIcon={renderHeaderSearchBar()} />

      <View style={[globalStyles.flex1, {zIndex: -1}]}>
        <GoogleMap style={{height: '100%'}}>
          <Marker
            draggable={true}
            tracksViewChanges={false}
            coordinate={{
              latitude: 48.85552283403529,
              longitude: 2.37035159021616,
              latitudeDelta: 5,
              longitudeDelta: 5,
            }}>
            <MapPinIcon width={80} height={80} />
          </Marker>
        </GoogleMap>
        <LocationPrimaryIcon style={searchStyles.currentLocation} />
        <AppButton title={'Done'} style={searchStyles.doneBtn} onPress={() => navigation.navigate(ROUTES.SearchedPosts)} />
      </View>
    </Screen>
  );
};

export default SelectLocationOnMap;
