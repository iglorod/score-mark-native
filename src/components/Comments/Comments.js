import React from 'react';
import ReactNativeDisqus from 'react-native-disqus';
import { REACT_APP_DISQUS_SHORTNAME } from 'react-native-dotenv';

const Comments = ({ url, identifier }) => {
  return (
    <ReactNativeDisqus
      shortname={REACT_APP_DISQUS_SHORTNAME}
      url={url}
      id={identifier}
    />
  )
}

export default Comments;
