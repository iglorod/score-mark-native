import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

const NewsItem = (props) => {
  const { article, theme, onPress } = props;

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: article.urlToImage }} style={styles.image} />
      </View>

      <View style={styles.dataContainer}>
        <Text style={styles.author}>{article.author || 'SPORT NEWS'}</Text>
        <Text style={styles.title}>{article.title}</Text>
      </View>

      <View style={styles.actionsContainer}>
        <Text style={styles.date}>{new Date().toLocaleString(article.publishedAt)}</Text>
        <TouchableOpacity onPress={onPress.bind(this, article.url)}>
          <Text style={{ ...styles.readMore, color: theme.primary }}>READ MORE</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default React.memo(NewsItem);

const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginTop: 15,
    marginBottom: 25,
  },
  imageContainer: {
    padding: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.01,
    elevation: 2,
    backgroundColor: '#fff',
  },
  image: {
    height: 250,
    width: '100%',
  },
  dataContainer: {
    marginTop: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.01,
    elevation: 2,
    backgroundColor: '#fff',
  },
  author: {
    color: '#000',
    fontSize: 18,
    fontFamily: 'OpenSans-Bold',
    textTransform: 'uppercase',
    marginBottom: 15,
  },
  title: {
    fontFamily: 'OpenSans-Regular',
    lineHeight: 30,
    textAlign: 'justify',
  },
  actionsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderTopWidth: 0.5,
    borderTopColor: '#999',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.01,
    elevation: 2,
    backgroundColor: '#fff',
  },
  readMore: {
    fontSize: 16,
    fontFamily: 'OpenSans-SemiBold',
  },
  date: {
    fontSize: 12,
    color: '#555',
  }
})
