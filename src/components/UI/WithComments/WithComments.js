import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import Comments from '../../Comments/Comments';

const WithComments = (props) => {
  if (!props.identifier) return null;

  return (
    <ScrollView style={styles.content} contentContainerStyl={styles.contentContainer}>
      {props.children}

      <View style={styles.comments}>
        <Comments
          url={props.url}
          identifier={props.identifier}
          title={props.title} />
      </View>
    </ScrollView>
  )
}

const mapStateToProps = state => {
  return {
    url: state.cmnt.url,
    identifier: state.cmnt.identifier,
    title: state.cmnt.title,
  }
}

export default connect(mapStateToProps)(WithComments);

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  contentContainer: {
    alignItems: 'center',
  },
  comments: {
    flex: 1,
    margin: 10,
  }
})
