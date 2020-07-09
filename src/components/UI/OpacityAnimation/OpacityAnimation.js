import React, { useRef, useEffect } from 'react';
import { Animated } from 'react-native';

const OpacityAnimation = (props) => {
  const fadeAnim = useRef(new Animated.Value(0.5)).current;

  useEffect(() => {
    Animated.loop(Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 2000,
      }
    )).start()
}, [])

  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnim,
      }}
    >
      {props.children}
    </Animated.View>
  );
}

export default OpacityAnimation;
