import React from 'react';
import { View, StyleSheet } from 'react-native';

import Bookmaker from './Bookmaker/Bookmaker';
import Odds from './Odds/Odds';

const BookmakerOdds = ({ odd }) => {
  return (
    <View style={styles.odd}>
      <Bookmaker bookmakerName={odd.bookmaker_name} />
      <Odds odds={odd.bets} />
    </View>
  )
}

export default BookmakerOdds;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  }
})
