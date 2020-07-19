import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from '@react-navigation/native';

import Scorer from './Scorer/Scorer';

const TopScorers = ({ route }) => {
  const playerData = route.params;
  const { colors } = useTheme();

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>League Top Scorers</Text>
            <Text style={styles.subTitle}>Eros in cursus turpis massa</Text>
          </View>
          <Icon name={'target-account'} size={35} color={'#fff'} />
        </View>

        {
          playerData.map((player, index) => (
            <Scorer
              key={index}
              player={player}
              rank={index + 1}
              progressColor={(index % 2 !== 0) ? colors.secondaryBackground : colors.thirdBackground}
              backgroundColor={(index % 2 === 0) ? colors.secondaryBackground : colors.thirdBackground} />
          ))
        }
      </View>
    </ScrollView>
  )
}

export default TopScorers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    fontFamily: 'OpenSans-Regular',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginBottom: 25,
    backgroundColor: '#F96F5D',
    borderRadius: 5,
  },
  title: {
    color: '#fff',
    fontSize: 22,
    marginBottom: 5,
  },
  subTitle: {
    color: '#fff',
    fontSize: 14,
  }
})
