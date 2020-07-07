import React, { useState, useEffect, useCallback } from 'react';
import { View, FlatList, StyleSheet, RefreshControl } from 'react-native';
import { useTheme } from '@react-navigation/native';
import axios from 'axios';
import { REACT_APP_NEWS_API_KEY } from 'react-native-dotenv';

import NewsItem from './NewsItem/NewsItem';
import { openUrlHandler } from '../../utility/url';
import ModalSpinner from '../UI/ModalSpinner/ModalSpinner';

const News = () => {
  const [articles, setArticles] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const { colors } = useTheme();

  useEffect(() => {
    axios.get('http://ip-api.com/json')
      .then(response => response.data)
      .then(address => address.countryCode)
      .then(countryCode => axios.get(`https://newsapi.org/v2/top-headlines?country=${countryCode}&category=sports&apiKey=${REACT_APP_NEWS_API_KEY}`))
      .then(response => response.data.articles)
      .then(articles => setArticles(articles))
      .then(() => setRefreshing(false))
      .catch(error => console.log(error))
  }, [refreshing])

  const onRefresh = useCallback(() => {
    setRefreshing(true);
  }, [refreshing]);

  if (articles.length === 0) return <ModalSpinner />

  return (
    <View style={styles.container}>
      <FlatList
        data={articles}
        scrollEnabled={!refreshing}
        renderItem={({ item }) => <NewsItem article={item} theme={colors} onPress={openUrlHandler.bind(this, item.url)} />}
        keyExtractor={(item, key) => key.toString()}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
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
