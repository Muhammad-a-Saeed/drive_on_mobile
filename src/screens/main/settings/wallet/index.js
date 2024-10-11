import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {AppButton, AppScrollView, AppText, Header, Screen, TransactionDetailCard} from '../../../../components';
import {TransactionIcon, WalletIcon} from '../../../../assets/icons';
import {walletStyles} from '../../styles';
import {FONTS} from '../../../../utils/theme';
import {TRANSACTIONS} from '../../../../static';
import globalStyles from '../../../../../globalStyles';
import {ROUTES} from '../../../../utils/constants';

const Wallet = ({navigation}) => {
  return (
    <Screen>
      <Header title={'Wallet'} />
      <AppScrollView contentContainerStyle={{paddingBottom: 100}}>
        <View style={walletStyles.walletContainer}>
          <View style={walletStyles.walletCurrentBalText}>
            <AppText>Current Balance</AppText>
            <AppText fontSize={28} fontFamily={FONTS.medium}>
              $1500
            </AppText>
          </View>

          <WalletIcon />
        </View>

        <View style={walletStyles.sectionContainer}>
          <AppText fontFamily={FONTS.semiBold}>Transaction History</AppText>
          <AppText onPress={() => navigation.navigate(ROUTES.TransactionHistory)}>See All</AppText>
        </View>

        <View style={globalStyles.gap15}>
          {TRANSACTIONS.map((transaction, index) => (
            <TransactionDetailCard item={transaction} key={index} />
          ))}
        </View>
      </AppScrollView>
      <AppButton title={'Withdraw'} onPress={() => navigation.navigate(ROUTES.WithdrawInfo)} style={walletStyles.withdrawButton} />
    </Screen>
  );
};

export default Wallet;
