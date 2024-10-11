import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import {AppButton, AppScrollView, AppText, AppTextInput, Header, Screen, SuccessModal} from '../../../components';
import {reviewStyles} from '../styles';
import StarRating from '../../../components/starRating';
import globalStyles from '../../../../globalStyles';
import {RedCarImage} from '../../../assets/images';
import {FONTS} from '../../../utils/theme';

const AddReview = ({navigation}) => {
  const [reviewText, setReviewText] = useState('');
  const [successModalVisible, setSuccessModalVisible] = useState(false);

  const handleAddReview = () => {
    setSuccessModalVisible(true);

    setTimeout(() => {
      setSuccessModalVisible(false);
      navigation.popToTop();
    }, 3000);
  };

  return (
    <Screen>
      <Header title={'Add Review'} />
      <AppScrollView>
        <View style={globalStyles.flex1}>
          <View style={reviewStyles.imagecontainer}>
            <Image source={RedCarImage} style={reviewStyles.image} />
            <AppText fontFamily={FONTS.medium}>Jhon Wick</AppText>
          </View>

          <AppText style={reviewStyles.yourReviewText}>{'Your Review'}</AppText>
          <StarRating ratingContainerStyle={reviewStyles.ratingContainer} starContainerStyle={reviewStyles.starContainer} isDisabled={false} size={30} defaultRating={0} />
          <View style={{marginTop: 40}}>
            <AppText style={reviewStyles.feedbackText}>Feedback</AppText>
            <AppTextInput
              containerStyle={reviewStyles.feedbackInputContainer}
              textInputStyle={reviewStyles.feedbackInput}
              placeholder={'Write your review here'}
              multiline={true}
              onChangeText={setReviewText}
              maxLength={120}
            />
            <AppText greyText style={reviewStyles.count}>
              {reviewText.length}/120
            </AppText>
          </View>
        </View>

        <AppButton onPress={handleAddReview} title={'Add Review'} style={globalStyles.bottomButton} />
      </AppScrollView>

      <SuccessModal
        isVisible={successModalVisible}
        setIsVisible={setSuccessModalVisible}
        title={'Review Added'}
        description={'Lorem ipsum dolor sit amet consectetur. Maecenas nisi vitae a mattis sed dignissim.'}
      />
    </Screen>
  );
};

export default AddReview;
