import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { ProgressBar } from '@react-native-community/progress-bar-android';

const Odd = ({ odd }) => {
  const [maxOdd, setMaxOdd] = useState(0);
  const { colors } = useTheme();

  useEffect(() => {
    const max = odd.values.reduce((max, item) => max > item.odd ? max : item.odd, 0);
    setMaxOdd(max);
  }, [])

  return (
    <View style={styles.oddItem}>
      <View>
        <Text style={styles.oddName}>{odd.label_name}</Text>
      </View>

      <View style={styles.bookmakerOdds}>
        {
          odd.values.map((item, index) => (
            <View style={styles.odd} key={index}>
              <View style={styles.oddTitle}>
                <Text>{item.value}</Text>
                <Text>Coef</Text>
              </View>
              <View style={styles.oddLabels}>
                <View style={styles.oddValueProgress}>
                  <ProgressBar
                    color={colors.primary}
                    style={styles.progressBar}
                    styleAttr='Horizontal'
                    indeterminate={false}
                    progress={(maxOdd / item.odd * 100).toFixed(0) * 0.01} />
                </View>
                <Text style={styles.oddValue}>{item.odd}</Text>
              </View>
            </View>
          ))
        }
      </View>
    </View>
  )
}

export default Odd;

const styles = StyleSheet.create({
  oddItem: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 20,
    width: '100%',
  },
  oddName: {
    color: 'rgba(0, 0, 0, 0.85)',
    fontSize: 16,
    fontStyle: 'italic',
    width: '100%',
  },
  bookmakerOdds: {
    display: 'flex',
    width: '100%',
  },
  odd: {
    display: 'flex',
    marginBottom: 15,
  },
  oddTitle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: 'rgba(0, 0, 0, 0.85)',
  },
  oddLabels: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: 'rgba(0, 0, 0, 0.85)',
  },
  oddValueProgress: {
    width: '100%',
    paddingHorizontal: 10,
  },
  oddValue: {
    color: 'rgba(0, 0, 0, 0.85)',
    fontSize: 20,
  },
  progressBar: {
    height: 3,
  }
})
