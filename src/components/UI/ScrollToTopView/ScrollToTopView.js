import React, { useState, useRef } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from '@react-navigation/native';

const ScrollToTopView = (props) => {
  const [showButton, setShowButton] = useState(false);

  const viewRef = useRef(null);
  const { colors } = useTheme();

  const checkContentPosition = data => {
    const offsetTop = data.nativeEvent.contentOffset.y;

    if (offsetTop > 220) setShowButton(true);
    else if (showButton) setShowButton(false);
  }

  const scrollToTop = () => {
    viewRef.current.scrollTo({ x: 0, y: 0, animated: true });
    setShowButton(false);
  }

  let button = null;
  if (showButton) {
    button = (
      <View style={[styles.button, { backgroundColor: colors.thirdBackground, shadowColor: colors.thirdBackground }]}>
        <TouchableOpacity onPress={scrollToTop}>
          <Icon name={'arrow-up'} size={40} color={'#fff'} />
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <>
      <ScrollView {...props} ref={viewRef} onMomentumScrollEnd={checkContentPosition}>
        {props.children}
      </ScrollView>

      {button}
    </>
  )
}

export default ScrollToTopView;

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    right: 20,
    bottom: 60,
    zIndex: 5,
    padding: 10,
    borderRadius: 50,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.9,
    elevation: 10,
  }
})
