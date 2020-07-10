import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ComparePercents = ({ title, first, last }) => {
  let leftWidth = first || '0';
  let rightWidth = last || '0';

  if (leftWidth.toString() === '0' && rightWidth.toString() === '0') {
    return null;
  }

  if (!leftWidth.toString().includes('%')) {
    const totalVal = (+first) + (+last);

    leftWidth = (first * 100 / totalVal) + '%';
    rightWidth = (last * 100 / totalVal) + '%';
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.percents}>
        <View style={{ width: leftWidth, ...styles.firstPercents }}>
          <Text style={styles.value}>{first}</Text>
        </View>
        <View style={{ width: rightWidth, ...styles.lastPercents }}>
          <Text style={styles.value}>{last}</Text>
        </View>
      </View>
    </View>
  )
}

export default ComparePercents;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 5,
    alignItems: 'center',
    width: '100%',
  },
  title: {
    color: '#000',
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 15,
  },
  firstPercents: {
    textAlign: 'left',
    height: 26,
    marginRight: 2,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    backgroundColor: '#138B86',
  },
  lastPercents: {
    textAlign: 'right',
    height: 26,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: '#F6AE2D',
  },
  percents: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  value: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '300',
    paddingHorizontal: 10,
  }  
})
