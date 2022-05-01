import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  AppRegistry,
  Image,
} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';

const NewsList = ({navigation}) => {
  const newsURL = 'https://perludilindungi.herokuapp.com/api/get-news';
  const [isLoading, setIsLoading] = useState(true);
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    fetch(newsURL)
      .then(response => response.json())
      .then(data => setNewsData(data.results))
      .catch(error => alert(error))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <View>
      <FlatList
        data={newsData}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.newsContainer} onPress = {() => navigation.navigate('WebNews', {link: item.link[0]})}>
            <View style={styles.ImgContainer}>
              <Image
                source={{uri: item.enclosure._url}}
                style={{width: '100%', aspectRatio: 1}}></Image>
            </View>
            <View style={styles.newsDesc}>
              <Text>{item.title}</Text>
              <Text style={styles.pubDate}>{item.pubDate}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  newsContainer: {
    marginLeft: '3%',
    marginRight: '3%',
    marginTop: '5%',
    marginBottom: '5%',
    display: 'flex',
    flexDirection: 'row',
  },
  ImgContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '30%',
  },
  newsDesc: {
    paddingLeft: '3%',
    paddingRight: '3%',
    display: 'flex',
    flexDirection: 'column',
    width: '70%',
  },
  pubDate: {
    position: 'absolute',
    bottom: 0,
    left: '5%',
    fontSize: 12,
  },
});

export default NewsList;
