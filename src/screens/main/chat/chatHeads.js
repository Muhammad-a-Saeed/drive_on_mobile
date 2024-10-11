import {View, Text, FlatList, Pressable, Image} from 'react-native';
import React from 'react';
import {AppScrollView, AppText, AppTextInput, Header, Screen} from '../../../components';
import {FONTS} from '../../../utils/theme';
import globalStyles from '../../../../globalStyles';
import {CHAT_HEADS} from '../../../static';
import {chatStyles} from '../styles';
import {SearchIcon} from '../../../assets/icons';
import {ROUTES} from '../../../utils/constants';

const ChatHeads = ({navigation}) => {
  return (
    <Screen>
      <View style={[{marginBottom: 20}]}>
        <Header title={'Chat'} LeftIcon={true} />
        <AppTextInput containerStyle={globalStyles.screenMargin} LeftIcon={SearchIcon} placeholder="Search" />
      </View>

      <FlatList
        data={CHAT_HEADS}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => <ChatHead onPress={() => navigation.navigate(ROUTES.ChatRoom)} item={item} />}
        contentContainerStyle={[globalStyles.flexGrow1, globalStyles.screenPadding, globalStyles.gap15]}
      />
    </Screen>
  );
};

const ChatHead = ({item, onPress}) => {
  return (
    <Pressable style={chatStyles.headContainer} onPress={onPress}>
      <Image source={item.image} style={chatStyles.headImage} />

      <View style={chatStyles.headContentContainer}>
        <AppText fontFamily={FONTS.medium}>{item.title}</AppText>
        <AppText fontSize={12} greyText>
          {item.description}
        </AppText>
      </View>
      {item?.isActive && <View style={chatStyles.activeDot} />}
    </Pressable>
  );
};

export default ChatHeads;
