import {View, Text, Pressable} from 'react-native';
import React, {useState} from 'react';
import {
  AppButton,
  AppScrollView,
  AppText,
  Header,
  Screen,
} from '../../../components';
import {FONTS} from '../../../utils/theme';
import {TickMarkedIcon, TickUnMarkedIcon} from '../../../assets/icons';
import {filterStyles} from '../styles';
import globalStyles from '../../../../globalStyles';
import {ROUTES} from '../../../utils/constants';

const CarFilter = ({navigation}) => {
  const filters = ['2 Door Car', '4 Door Car', 'Van', 'Luxury'];
  const [selecteds, setSelecteds] = useState([]);

  const handleApply = () => {
    navigation.goBack();
  };
  return (
    <Screen>
      <Header title={'Filter'} />
      <AppScrollView>
        <AppText fontFamily={FONTS.medium}>Select Car Type</AppText>
        <View style={[filterStyles.container, globalStyles.flex1]}>
          {filters.map((filter, index) => (
            <Pressable
              key={index}
              style={filterStyles.filterContainer}
              onPress={() => {
                if (selecteds.includes(filter))
                  setSelecteds(p => p.filter(f => f !== filter));
                else setSelecteds(p => [...p, filter]);
              }}>
              {selecteds.includes(filter) ? (
                <TickMarkedIcon />
              ) : (
                <TickUnMarkedIcon />
              )}
              <AppText>{filter}</AppText>
            </Pressable>
          ))}
        </View>

        <AppButton
          title={'Apply'}
          style={globalStyles.bottomButton}
          onPress={handleApply}
        />
      </AppScrollView>
    </Screen>
  );
};

export default CarFilter;
