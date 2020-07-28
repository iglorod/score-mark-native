import React, { useState } from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';

import Formation from './Formation/Formation';
import Substitutes from './Substitutes/Substitutes';
import SelectedPlayer from './SelectedPlayer/SelectedPlayer';
import PlayersStatistics from './PlayersStatistics/PlayersStatistics';
import FixtureSummary from '../FixtureSummary/FixtureSummary';
import DeviceOrientation from '../UI/DeviceOrientation/DeviceOrientation';
import LinksToScreens from '../LinksToScreens/LinksToScreens';

const FixtureCentre = () => {
  const [openId, setOpenId] = useState(0);
  const { colors } = useTheme();

  let additionalContent = (
    <View style={styles.substitutesContainer}>
      <Substitutes />
      <Substitutes away />
    </View>
  );
  if (openId === 1) {
    additionalContent = (
      <View>
        <View style={styles.selectedPlayersContainer}>
          <SelectedPlayer />
          <SelectedPlayer away />
        </View>

        <PlayersStatistics />
      </View>
    )
  }

  const content = (
    <ScrollView>
      <View style={styles.container}>
        <LinksToScreens
          values={[
            {
              name: 'Statistics',
              path: 'Stats',
            },
            {
              name: 'Events',
              path: 'Events',
            },
            {
              name: 'Odds',
              path: 'Odds',
            }
          ]} />

        <FixtureSummary />

        <Formation />

        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={setOpenId.bind(this, 0)}>
            <Icon name={'swap-vert'} size={20} color={openId === 0 ? colors.thirdBackground : '#bfbfbf'} />
            <Text style={
              openId === 0
                ? { ...styles.buttonLabel, color: colors.thirdBackground }
                : { ...styles.buttonLabel, color: '#bfbfbf' }
            }>
              {'Substitutes'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={setOpenId.bind(this, 1)}>
            <Icon name={'compare'} size={20} color={openId === 1 ? colors.thirdBackground : '#bfbfbf'} />
            <Text style={
              openId === 1
                ? { ...styles.buttonLabel, color: colors.thirdBackground }
                : { ...styles.buttonLabel, color: '#bfbfbf' }
            }>
              {'Compare Players'}
            </Text>
          </TouchableOpacity>
        </View>

        {additionalContent}
      </View>
    </ScrollView>
  )

  return (
    <DeviceOrientation oriented={'landscape'} component={content} />
  )
}

export default FixtureCentre;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 20,
    paddingBottom: 10,
    width: '80%',
    borderBottomColor: '#c7c7c7',
    borderBottomWidth: 1,
  },
  button: {
    flexDirection: 'row',
  },
  buttonLabel: {
    fontSize: 16,
    paddingLeft: 5,
  },
  substitutesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  selectedPlayersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 15,
  }
})
