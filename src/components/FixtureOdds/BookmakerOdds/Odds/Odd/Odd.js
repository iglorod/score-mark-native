import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { ProgressBar } from '@react-native-community/progress-bar-android';

const Odd = ({ odd }) => {
  const [maxOdd, setMaxOdd] = useState(0);
  const { colors } = useTheme();

  useEffect(() => {
    const max = odd.values.reduce((max, item) => max < +item.odd ? +item.odd : max, 0);
    setMaxOdd(max);
  }, [])

  return (
    <View style={styles.oddItem}>
      <View>
        <Text style={styles.oddName} numberOfLines={2}>{odd.label_name}</Text>
      </View>

      <View style={styles.bookmakerOdds}>
        {
          odd.values.map((item, index) => (
            <View style={styles.odd} key={index}>
              <View style={styles.oddTitle}>
                <Text style={styles.coefLabel} numberOfLines={1}>{item.value}</Text>
                <Text>Coef</Text>
              </View>
              <View style={styles.oddLabels}>
                <View style={styles.oddValueProgress}>
                  <ProgressBar
                    color={colors.primary}
                    style={styles.progressBar}
                    styleAttr='Horizontal'
                    indeterminate={false}
                    progress={(item.odd / maxOdd)} />
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

export default React.memo(Odd);

const styles = StyleSheet.create({
  oddItem: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#999',
  },
  oddName: {
    color: 'rgba(0, 0, 0, 0.85)',
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
    marginHorizontal: 10,
    width: 100,
  },
  bookmakerOdds: {
    display: 'flex',
  },
  odd: {
    display: 'flex',
    marginBottom: 15,
  },
  oddTitle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 170,
  },
  coefLabel: {
    width: 120,
  },
  oddLabels: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 170,
  },
  oddValueProgress: {
    paddingHorizontal: 10,
    width: 120,
  },
  oddValue: {
    color: '#000',
    fontSize: 16,
  },
  progressBar: {
    marginTop: 7,
    height: 7,
  }
})
