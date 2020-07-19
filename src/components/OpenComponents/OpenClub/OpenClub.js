import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, Dimensions, Easing } from 'react-native';

import OpenSkeleton from '../../UI/OpenSkeleton/OpenSkeleton';
import ChooseCountry from '../Common/ChooseCountry/ChooseCountry';
import ChooseLeague from '../Common/ChooseLeague/ChooseLeague';
import ChooseClub from '../Common/ChooseClub/ChooseClub';

const OpenClub = () => {
  const [rightIndent, setRightIndent] = useState(0);
  const [screenWidth, setScreenWidth] = useState(Dimensions.get('window').width + 10);

  const [selectedCountry, setSelectedCountry] = useState({});
  const [selectedLeague, setSelectedLeague] = useState({});
  const [popularLeagueSelected, setPopularLeagueSelected] = useState(false);
  const [selectedClub, setSelectedClub] = useState({});

  const move = useRef(new Animated.Value(rightIndent)).current;
  const grow = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (Dimensions.get('window').width === screenWidth) return;
    setScreenWidth(Dimensions.get('window').width);
  }, [Dimensions.get('window').width])

  useEffect(() => {
    moveAnimation();
    growAnimation();
  }, [rightIndent])

  const moveAnimation = () => {
    Animated.timing(
      move,
      {
        toValue: rightIndent || 0,
        duration: 700,
        useNativeDriver: false,
        easing: Easing.ease
      }
    ).start()
  }

  const growAnimation = () => {
    grow.setValue(0);
    Animated.timing(
      grow,
      {
        toValue: 100,
        duration: 700,
        useNativeDriver: false,
        easing: Easing.ease
      }
    ).start()
  }

  const currentScreenId = Math.ceil(rightIndent / screenWidth);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          right: move,
          minHeight: 165,
          width: '100%',
        }}
      >
        <OpenSkeleton
          title={'Clubs'}
          subTitle={'Select the club you are interested in'}
          buttonLabel={'NEXT'}
          image={require('../../../assets/images/openClubs.png')}
          onPress={setRightIndent.bind(this, screenWidth)} />
      </Animated.View>

      <Animated.View
        style={{
          right: move,
          height: currentScreenId === 1
            ? grow.interpolate({
              inputRange: [0, 100],
              outputRange: [165, 350],
            })
            : grow.interpolate({
              inputRange: [0, 100],
              outputRange: [350, 165],
            }),
          ...styles.animatedView,
        }}
      >
        <ChooseCountry
          step={'33%'}
          selectedLeague={selectedLeague}
          setSelectedLeague={setSelectedLeague}
          setPopularLeagueSelected={setPopularLeagueSelected}
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
          onNext={setRightIndent.bind(this, popularLeagueSelected ? screenWidth * 3 : screenWidth * 2)}
          onBack={setRightIndent.bind(this, 0)} />
      </Animated.View>

      <Animated.View
        style={{
          right: move,
          height: currentScreenId === 2
            ? grow.interpolate({
              inputRange: [0, 100],
              outputRange: [165, 200],
            })
            : grow.interpolate({
              inputRange: [0, 100],
              outputRange: [200, 165],
            }),
          ...styles.animatedView,
        }}
      >
        <ChooseLeague
          step={'66%'}
          openClub
          selectedCountry={selectedCountry}
          selectedLeague={selectedLeague}
          setSelectedLeague={setSelectedLeague}
          onNext={setRightIndent.bind(this, screenWidth * 3)}
          onBack={setRightIndent.bind(this, screenWidth)} />
      </Animated.View>

      <Animated.View
        style={{
          right: move,
          height: currentScreenId === 3
            ? grow.interpolate({
              inputRange: [0, 100],
              outputRange: [165, 200],
            })
            : grow.interpolate({
              inputRange: [0, 100],
              outputRange: [200, 165],
            }),
          ...styles.animatedView,
        }}
      >
        <ChooseClub
          step={'100%'}
          openClub
          selectedLeague={selectedLeague}
          selectedClub={selectedClub}
          setSelectedClub={setSelectedClub}
          onBack={setRightIndent.bind(this, popularLeagueSelected ? screenWidth : screenWidth * 2)} />
      </Animated.View>
    </View >
  )
}

export default OpenClub;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
  },
  animatedView: {
    minHeight: 165,
    width: '100%',
    marginLeft: 20,
    borderRadius: 5,
    overflow: 'hidden',
  }
})
