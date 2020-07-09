import React, { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';

import RotateRequest from './RotateRequest/RotateRequest';

const DeviceOrientation = (props) => {
  const [orientation, setOrientation] = useState('');
  const { oriented, component } = props;
  
  useEffect(() => {
    getOrientation();

    Dimensions.addEventListener('change', getOrientation);

    return () => {
      Dimensions.removeEventListener('change', getOrientation);
    }
  })

  const getOrientation = () => {
    if (Dimensions.get('window').width < Dimensions.get('window').height) {
      setOrientation('portrait');
    }
    else {
      setOrientation('landscape');
    }
  }

  if (oriented === orientation) return component;
  else if (orientation === 'landscape') return <RotateRequest icon={'phone-rotate-portrait'} />;
  else if (orientation === 'portrait') return <RotateRequest icon={'phone-rotate-landscape'} />;

  return null;
}

export default DeviceOrientation;
