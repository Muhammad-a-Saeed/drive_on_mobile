import {View, SectionList, Image, KeyboardAvoidingView, Pressable} from 'react-native';
import React, {useState} from 'react';
import {AppText, AppTextInput, Header, Screen, SeperatorLine} from '../../../components';
import {inboxStyles} from '../styles';
import {CHATS} from '../../../static';
import globalStyles from '../../../../globalStyles';
import {COLORS} from '../../../utils/theme';
import {AttachmentIcon, CameraCircleIcon, CameraIcon, ChevronCircledIcon, SendIcon} from '../../../assets/icons';
import {RedCarImage} from '../../../assets/images';
import {isIOS} from '../../../helpers';

const ChatRoom = ({navigation}) => {
  const [text, setText] = useState('');

  const renderUserPicAndName = () => {
    return (
      <View style={inboxStyles.userContainer}>
        <ChevronCircledIcon width={30} height={30} onPress={() => navigation.goBack()} />
        <Image source={RedCarImage} style={inboxStyles.image} />
        <View style={inboxStyles.gap3}>
          <AppText style={inboxStyles.username}>Jhon Doe</AppText>
          <AppText greyText style={inboxStyles.welcomeText}>
            Active
          </AppText>
        </View>
      </View>
    );
  };

  const renderTextInputRightIcons = () => {
    return (
      <View style={inboxStyles.inputRightContainer}>
        <AttachmentIcon />
        <CameraIcon />
      </View>
    );
  };

  const Wrapper = isIOS ? View : Screen;

  return (
    <Wrapper style={[globalStyles.flex1]}>
      <View style={{paddingTop: isIOS ? 60 : 0}}>
        <Header LeftIcon={renderUserPicAndName()} onPressLeftIcon={() => {}} />
      </View>

      <KeyboardAvoidingView behavior={isIOS ? 'padding' : 'height'} style={globalStyles.flex1}>
        <SectionList
          sections={CHATS}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[inboxStyles.contentContainer, {gap: 20}]}
          renderItem={({item}) => <Message message={item} />}
          renderSectionHeader={({section: {title}}) => (
            <View style={inboxStyles.chatHeading}>
              <SeperatorLine style={globalStyles.flex1} />
              <AppText style={inboxStyles.chatHeadingText}>{title}</AppText>
              <SeperatorLine style={globalStyles.flex1} />
            </View>
          )}
        />

        <View style={[inboxStyles.inputContainer]}>
          <View style={inboxStyles.input}>
            <AppTextInput placeholder={'Type a message'} onChangeText={setText} containerStyle={{borderRadius: 10}} RightIcon={renderTextInputRightIcons} />
          </View>

          <Pressable style={inboxStyles.sendContainer}>
            <SendIcon />
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </Wrapper>
  );
};

const Message = ({message}) => {
  if (message.isMe) {
    if (message.type === 'TEXT') {
      return (
        <View style={inboxStyles.myMessageMainContainer}>
          <AppText isGreyText style={inboxStyles.messageTime}>
            {message.timestamp}
          </AppText>
          <View style={inboxStyles.myMessageContainer}>
            <AppText style={inboxStyles.myMessageText}>{message.msg}</AppText>
          </View>
        </View>
      );
    } else if (message.type === 'IMAGE') {
      return (
        <View style={inboxStyles.myMessageMainContainer}>
          <AppText isGreyText style={inboxStyles.messageTime}>
            {message.timestamp}
          </AppText>
          <View>
            <Image source={RedCarImage} style={inboxStyles.messageImage} />
          </View>
        </View>
      );
    }
  } else {
    if (message.type === 'TEXT') {
      return (
        <View style={inboxStyles.otherMessageMainContainer}>
          <View style={inboxStyles.otherMessageContainer}>
            <AppText style={inboxStyles.otherMessageText}>{message.msg}</AppText>
          </View>
          <AppText isGreyText style={inboxStyles.messageTime}>
            {message.timestamp}
          </AppText>
        </View>
      );
    } else if (message.type === 'IMAGE') {
      return (
        <View style={inboxStyles.myMessageMainContainer}>
          <AppText isGreyText style={inboxStyles.messageTime}>
            {message.timestamp}
          </AppText>
          <View>
            <Image source={RedCarImage} style={inboxStyles.messageImage} />
          </View>
        </View>
      );
    }
  }
};

export default ChatRoom;
