import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, Dimensions, Easing } from 'react-native';

import OpenSkeleton from '../../UI/OpenSkeleton/OpenSkeleton';
import ChooseType from './ChooseType/ChooseType';
import ChooseCountry from './ChooseCountry/ChooseCountry';
import ChooseLeague from './ChooseLeague/ChooseLeague';
import ChooseClub from './ChooseClub/ChooseClub';

const OpenMatches = () => {
  const [rightIndent, setRightIndent] = useState(0);
  const [screenWidth, setScreenWidth] = useState(Dimensions.get('window').width + 10);

  const [selectedTypeId, setSelectedTypeId] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState({});
  const [selectedLeague, setSelectedLeague] = useState({});
  const [selectedClub, setSelectedClub] = useState({});

  const animation = useRef(new Animated.Value(rightIndent)).current;

  useEffect(() => {
    if (Dimensions.get('window').width === screenWidth) return;
    setScreenWidth(Dimensions.get('window').width);
  }, [Dimensions.get('window').width])

  useEffect(() => {
    moveAnimation();
  }, [rightIndent])

  const moveAnimation = () => {
    Animated.timing(
      animation,
      {
        toValue: rightIndent || 0,
        duration: 700,
        useNativeDriver: false,
        easing: Easing.ease
      }
    ).start()
  }
  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          right: animation,
          width: '100%',
        }}
      >
        <OpenSkeleton
          title={'Matches'}
          buttonLabel={'NEXT'}
          image={require('../../../assets/images/openMatches.png')}
          onPress={setRightIndent.bind(this, screenWidth)} />
      </Animated.View>

      <Animated.View
        style={{
          right: animation,
          width: '100%',
          marginLeft: 20,
        }}
      >
        <ChooseType
          selectedId={selectedTypeId}
          setSelectedId={setSelectedTypeId}
          onNext={setRightIndent.bind(this, screenWidth * 2)}
          onBack={setRightIndent.bind(this, 0)} />
      </Animated.View>

      <Animated.View
        style={{
          right: animation,
          width: '100%',
          marginLeft: 20,
        }}
      >
        <ChooseCountry
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
          onNext={setRightIndent.bind(this, screenWidth * 3)}
          onBack={setRightIndent.bind(this, screenWidth)} />
      </Animated.View>

      <Animated.View
        style={{
          right: animation,
          width: '100%',
          marginLeft: 20,
        }}
      >
        <ChooseLeague
          selectedTypeId={selectedTypeId}
          selectedCountry={selectedCountry}
          selectedLeague={selectedLeague}
          setSelectedLeague={setSelectedLeague}
          onNext={setRightIndent.bind(this, screenWidth * 4)}
          onBack={setRightIndent.bind(this, screenWidth * 2)} />
      </Animated.View>

      <Animated.View
        style={{
          right: animation,
          width: '100%',
          marginLeft: 20,
        }}
      >
        <ChooseClub
          selectedLeague={selectedLeague}
          selectedClub={selectedClub}
          setSelectedClub={setSelectedClub}
          onBack={setRightIndent.bind(this, screenWidth * 3)} />
      </Animated.View>
    </View>
  )
}

export default OpenMatches;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    overflow: 'hidden',
  },
})
