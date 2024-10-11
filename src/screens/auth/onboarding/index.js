import React, {useRef, useState} from 'react';
import {AppText, PaginateDots} from '../../../components';
import {Animated, ImageBackground, PanResponder, View} from 'react-native';
import {ONBOARDINGS} from '../../../static';
import {COLORS} from '../../../utils/theme';
import globalStyles from '../../../../globalStyles';
import {Car1Image, Car2Image, Car3Image} from '../../../assets/images';
import {onboardingStyles} from '../styles';
import {ROUTES} from '../../../utils/constants';

const Onboarding = ({navigation}) => {
  const pan = useRef(new Animated.ValueXY()).current;
  const [activeBoardIndex, setActiveBoardIndex] = useState(0);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}], {
      useNativeDriver: false,
    }),
    onPanResponderRelease: (e, gestureState) => {
      if (gestureState.dx > 50) {
        setActiveBoardIndex(prevIndex => Math.max(0, prevIndex - 1));
      } else if (gestureState.dx < -50) {
        setActiveBoardIndex(prevIndex => {
          return Math.min(ONBOARDINGS.length - 1, prevIndex + 1);
        });

        if (ONBOARDINGS.length - 1 === activeBoardIndex) {
          navigation.navigate(ROUTES.AccountType);
        }
      }

      Animated.spring(pan, {
        toValue: {x: 0, y: 0},
        useNativeDriver: false,
      }).start();
    },
  });

  const Images = [Car1Image, Car2Image, Car3Image];

  return (
    <ImageBackground source={Images[activeBoardIndex]} style={onboardingStyles.imageContainer}>
      <Animated.View style={globalStyles.flex1} {...panResponder.panHandlers}>
        <View style={[onboardingStyles.contentContainer, globalStyles.screenPadding]}>
          <OnBoard item={ONBOARDINGS[activeBoardIndex]} />

          <PaginateDots activeIndex={activeBoardIndex} color1={COLORS.primary} color2={COLORS.white} type="bar" style={{marginTop: 20}} />
        </View>
      </Animated.View>
    </ImageBackground>
  );
};

const OnBoard = ({item}) => {
  return (
    <View style={onboardingStyles.onBoardContainer}>
      <View style={onboardingStyles.textContainer}>
        <AppText style={onboardingStyles.headText}>{item.title}</AppText>
        <AppText style={onboardingStyles.headDescription}>{item.description}</AppText>
      </View>
    </View>
  );
};

export default Onboarding;
