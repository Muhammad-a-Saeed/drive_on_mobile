import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {Header, Screen, TransactionDetailCard} from '../../../../components';
import {TRANSACTIONS} from '../../../../static';
import globalStyles from '../../../../../globalStyles';

const TransactionHistory = () => {
  return (
    <Screen>
      <Header title={'Transaction History'} />
      <FlatList
        data={TRANSACTIONS}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => <TransactionDetailCard item={item} />}
        contentContainerStyle={[globalStyles.screenPadding, globalStyles.flexGrow1, globalStyles.gap15]}
      />
    </Screen>
  );
};

export default TransactionHistory;
