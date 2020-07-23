import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import Comments from '../../Comments/Comments';

const WithComments = (props) => {
  if (!props.identifier) return null;

  let comments = null;
  if (props.showComments) {
    comments = (
      <View style={styles.comments}>
        <Comments
          url={props.url}
          identifier={props.identifier}
          title={props.title} />
      </View>
    )
  }

  return (
    <ScrollView contentContainerStyle={props.showComments ? null : styles.container}>
      <View style={styles.contentContainer}>
        {props.children}
        {comments}
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
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    position: 'relative',
  },
  comments: {
    margin: 10,
    marginTop: 25,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 5,
  }
})
