import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from '@react-navigation/native';

import OpenLargeSkeleton from '../UI/OpenLargeSkeleton/OpenLargeSkeleton';

const FixtureMain = (props) => {
  const { colors } = useTheme();
  const { navigation, route } = props;

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>{route.params.homeTeam.team_name} - {route.params.awayTeam.team_name}</Text>

        <OpenLargeSkeleton
          headerText={route.params.status}
          headerIcon={'swap-horizontal-bold'}
          title={'Match Statistics'}
          subTitle={'Full match statistics'}
          subTitleIcon={'cards-club'}
          bottomText={new Date().toLocaleDateString()}
          bottomIcon={'update'}
          backgroundColor={colors.secondaryBackground}
          onPress={navigation.navigate.bind(this, 'Stats')} />
        <OpenLargeSkeleton
          headerText={route.params.status}
          headerIcon={'chart-bubble'}
          title={'Match Centre'}
          subTitle={'Watch match tactic'}
          subTitleIcon={'thermostat'}
          bottomText={new Date().toLocaleDateString()}
          bottomIcon={'update'}
          backgroundColor={colors.thirdBackground}
          onPress={navigation.navigate.bind(this, 'Centre')} />
        <OpenLargeSkeleton
          headerText={route.params.status}
          headerIcon={'microphone'}
          title={'Match Events'}
          subTitle={'Watch list of match events'}
          subTitleIcon={'thermostat'}
          bottomText={new Date().toLocaleDateString()}
          bottomIcon={'update'}
          backgroundColor={colors.secondaryBackground}
          onPress={navigation.navigate.bind(this, 'Events')} />
        <OpenLargeSkeleton
          headerText={route.params.status}
          headerIcon={'chart-pie'}
          title={'Match Odds'}
          subTitle={'Watch list of match odds'}
          subTitleIcon={'thermostat'}
          bottomText={new Date().toLocaleDateString()}
          bottomIcon={'update'}
          backgroundColor={colors.thirdBackground}
          onPress={navigation.navigate.bind(this, 'Odds')} />
      </View>
    </ScrollView>
  )
}

export default FixtureMain;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingTop: 30,
  },
  title: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
    marginLeft: 20,
  }
})
