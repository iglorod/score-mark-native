import React, { useState } from 'react';
import { Text } from 'react-native';
import Tips from 'react-native-tips';

const StatsTooltip = ({ text, data, style }) => {
  const [showTips, setShowTips] = useState(false);

  return (
    <Tips
      visible={showTips}
      text={text}
      onRequestClose={setShowTips.bind(this, false)}
    >
      <Text style={style} onPress={setShowTips.bind(this, true)}>{data}</Text>
    </Tips>
  )
}

export default StatsTooltip;
