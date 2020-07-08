import React from 'react';
import { View, StyleSheet } from 'react-native';

import Bookmaker from './Bookmaker/Bookmaker';
import Odds from './Odds/Odds';

const BookmakerOdds = ({ odd }) => {
  return (
    <View style={styles.container}>
      <Bookmaker bookmakerName={odd.bookmaker_name} />
      <Odds odds={odd.bets} />
    </View>
  )
}

export default React.memo(BookmakerOdds);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 15,
  }
})
