import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Tips from 'react-native-tips';

const StatsItem = ({ tooltip, value }) => {
  const [showTips, setShowTips] = useState(false);

  return (
    <Tips
      visible={showTips}
      text={tooltip}
      onRequestClose={setShowTips.bind(this, false)}
    >
      <View style={styles.avatar}>
        <Text style={value >= 0 ? styles.greenText : styles.redText}>{value}</Text>
      </View>
    </Tips>
  )
}

export default StatsItem;

const styles = StyleSheet.create({
  avatar: {
    height: 40,
    width: 40,
    backgroundColor: '#fff',
    borderRadius: 150,
  },
  greenText: {
    color: '#52c41a',
  },
  redText: {
    color: '#ff4d4f',
  }
})
