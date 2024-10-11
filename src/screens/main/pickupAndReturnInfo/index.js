import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {AppButton, AppScrollView, AppText, AppTextInput, Header, Screen} from '../../../components';
import globalStyles from '../../../../globalStyles';
import {CalendarIcon} from '../../../assets/icons';
import {FONTS} from '../../../utils/theme';
import {ROUTES} from '../../../utils/constants';
import DatePicker from 'react-native-date-picker';

const PickupAndReturnInfo = ({navigation}) => {
  const [pickupDate, setPickUpDate] = useState(new Date());
  const [pickupTime, setPickUpTime] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());
  const [returnTime, setReturnTime] = useState(new Date());
  const [selectedPicker, setSelectedPicker] = useState('');
  const [datePickerShow, setDatepickerShow] = useState(false);

  let pickerDate = new Date();
  let pickerMode = 'date';
  if (selectedPicker === 'pickupdate') pickerDate = pickupDate;
  else if (selectedPicker === 'pickuptime') [(pickerDate = pickupTime), (pickerMode = 'time')];
  else if (selectedPicker === 'returndate') pickerDate = returnDate;
  else if (selectedPicker === 'returntime') [(pickerDate = returnTime), (pickerMode = 'time')];

  const handleCalendarPress = type => {
    setSelectedPicker(type);
    setDatepickerShow(true);
  };

  const handleConfirmDate = date => {
    setDatepickerShow(false);

    if (selectedPicker === 'pickupdate') {
      setPickUpDate(date);
      console.log('date1', date);
    } else if (selectedPicker === 'pickuptime') {
      setPickUpTime(date);
    } else if (selectedPicker === 'returndate') {
      setReturnDate(date);
    } else if (selectedPicker === 'returntime') {
      setReturnTime(date);
    }
  };

  return (
    <Screen>
      <Header title={'Make Reservation'} />
      <AppScrollView>
        <AppText fontFamily={FONTS.medium}>Pick Up Info</AppText>
        <View style={[globalStyles.inputsGap, {marginTop: 20}, globalStyles.flex1]}>
          <AppTextInput
            value={pickerDate.toDateString()}
            editable={false}
            placeholder="12 July 2023"
            label={'Date'}
            RightIcon={CalendarIcon}
            onPressRightIcon={() => handleCalendarPress('pickupdate')}
          />
          <AppTextInput
            value={pickupTime.toLocaleTimeString()}
            editable={false}
            placeholder="07:00 Pm"
            label={'Time'}
            RightIcon={CalendarIcon}
            onPressRightIcon={() => handleCalendarPress('pickuptime')}
          />

          <AppText fontFamily={FONTS.medium}>Return Info</AppText>

          <AppTextInput
            value={returnDate.toDateString()}
            editable={false}
            placeholder="12 July 2023"
            label={'Date'}
            RightIcon={CalendarIcon}
            onPressRightIcon={() => handleCalendarPress('returndate')}
          />
          <AppTextInput
            value={returnTime.toLocaleTimeString()}
            editable={false}
            placeholder="07:00 Pm"
            label={'Time'}
            RightIcon={CalendarIcon}
            onPressRightIcon={() => handleCalendarPress('returntime')}
          />
        </View>

        <AppButton title={'Continue'} style={globalStyles.bottomButton} onPress={() => navigation.navigate(ROUTES.DriverInfo)} />
      </AppScrollView>

      <DatePicker
        modal
        mode={pickerMode}
        open={datePickerShow}
        date={pickerDate}
        onConfirm={handleConfirmDate}
        onCancel={() => {
          setDatepickerShow(false);
        }}
      />
    </Screen>
  );
};

export default PickupAndReturnInfo;
