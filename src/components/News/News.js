import React, { useState, useEffect, useCallback } from 'react';
import { View, FlatList, Linking, Alert, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import axios from 'axios';
import { REACT_APP_NEWS_API_KEY } from 'react-native-dotenv';

import NewsItem from './NewsItem/NewsItem';
import ModalSpinner from '../UI/ModalSpinner/ModalSpinner';

const News = () => {
  const [articles, setArticles] = useState([]);
  const { colors } = useTheme();

  useEffect(() => {
    axios.get('http://ip-api.com/json')
      .then(response => response.data)
      .then(address => address.countryCode)
      .then(countryCode => axios.get(`https://newsapi.org/v2/top-headlines?country=${countryCode}&category=sports&apiKey=${REACT_APP_NEWS_API_KEY}`))
      .then(response => response.data.articles)
      .then(articles => setArticles(articles))
      .catch(error => console.log(error))
  }, [])

  const openUrlHandler = useCallback(async (url) => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, []);

  if (articles.length === 0) return <ModalSpinner />

  return (
    <View style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({ item }) => <NewsItem article={item} theme={colors} onPress={openUrlHandler} />}
        keyExtractor={(item, key) => key}
      />
    </View>
  )
}

export default News;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
