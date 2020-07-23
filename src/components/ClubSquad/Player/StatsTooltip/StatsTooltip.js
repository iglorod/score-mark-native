import React, { useState } from 'react';
import { Text, StyleSheet } from 'react-native';
import Tips from 'react-native-tips';

const StatsTooltip = ({ text, data, style }) => {
  const [showTips, setShowTips] = useState(false);

  return (
    <Tips
      visible={showTips}
      text={text}
      onRequestClose={setShowTips.bind(this, false)}
    >
      <Text style={[styles.text, style]} onPress={setShowTips.bind(this, true)}>{data}</Text>
    </Tips>
  )
}

export default StatsTooltip;

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: 16,
  }
})
