import React, { useState, useRef, useEffect } from 'react';
import { TextInput, StyleSheet, Animated, Easing, Dimensions, BackHandler } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useTheme } from '@react-navigation/native';

import SearchResults from './SearchResults/SearchResults';

const SearchBar = ({ isOpen, close }) => {
  const [searchText, setSearchText] = useState('');
  const [portraitOrientation, setPortraitOrientation] = useState(true);

  const { colors } = useTheme();
  const input = useRef(null);
  const appear = useRef(new Animated.Value(Dimensions.get('window').width)).current;
  const appearResults = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    appearAnimation();
    appearResultsAnimation();

    if (isOpen === false) {
      setTimeout(() => {
        setSearchText('');
        input.current.blur();
      }, 700)
    } else {
      input.current.focus();
    }
  }, [isOpen, portraitOrientation])
  
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', onBackPressHandler);
    Dimensions.addEventListener('change', getOrientation);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', onBackPressHandler);
      Dimensions.removeEventListener('change', getOrientation);
    }
  }, [])

  const onBackPressHandler = () => {
    if (isOpen) {
      close();
      return true;
    }

    return false;
  }


  const getOrientation = () => {

    if (Dimensions.get('window').width < Dimensions.get('window').height) {
      setPortraitOrientation(true);
    }
    else {
      setPortraitOrientation(false);
    }
  }

  const appearAnimation = () => {
    Animated.timing(
      appear,
      {
        toValue: isOpen ? 10 : Dimensions.get('window').width * 2,
        duration: 700,
        useNativeDriver: false,
        easing: Easing.ease
      }
    ).start()
  }

  const appearResultsAnimation = () => {
    Animated.timing(
      appearResults,
      {
        toValue: isOpen ? 1 : 0,
        duration: 700,
        useNativeDriver: false,
        easing: Easing.ease
      }
    ).start()
  }

  return (
    <>
      <Animated.View style={[
        styles.inputContainer,
        {
          width: Dimensions.get('window').width - 20,
          left: appear
        }
      ]}>
        <TouchableOpacity onPress={close}>
          <Icon name={'keyboard-arrow-right'} style={styles.icon} size={30} color={'#BFBCB6'} />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          ref={input}
          value={searchText}
          onChangeText={setSearchText}
          placeholder={'Start typing...'}
          placeholderTextColor={'#BFBCB6'} />
      </Animated.View>

      <Animated.View style={
        [styles.searchResults, {
          height: Dimensions.get('window').height - 80,
          width: Dimensions.get('window').width,
          opacity: appearResults,
          display: appearResults === 0 ? 'none' : 'flex',
          backgroundColor: colors.background,
        }]}>
        <SearchResults searchText={searchText} />
      </Animated.View>
    </>
  )
}

export default SearchBar;

const styles = StyleSheet.create({
  inputContainer: {
    position: 'absolute',
    flexDirection: 'row',
    height: 50,
    borderRadius: 5,
    borderColor: '#BFBCB6',
    borderWidth: 1,
    backgroundColor: '#fff',
    top: 5,
  },
  icon: {
    padding: 8,
  },
  input: {
    fontSize: 16,
    height: 40,
    width: '80%',
    margin: 5,
  },
  searchResults: {
    display: 'flex',
    position: 'absolute',
    backgroundColor: '#fff',
    top: 60,
    paddingTop: 15,
    paddingHorizontal: 15,
    zIndex: 5,
  }
})
