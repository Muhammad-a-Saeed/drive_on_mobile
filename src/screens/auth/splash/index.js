import {View} from 'react-native';
import React, {useEffect} from 'react';
import {LogoIcon} from '../../../assets/icons';
import {splashStyles} from '../styles';
import {wp} from '../../../helpers';
import {ROUTES} from '../../../utils/constants';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace(ROUTES.Onboarding);
    }, 3000);
  }, []);

  return (
    <View style={splashStyles.container}>
      <LogoIcon width={wp(50)} height={wp(50)} />
    </View>
  );
};

export default Splash;
