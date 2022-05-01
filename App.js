import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Text, View, StyleSheet} from 'react-native';
import NewsList from './android/Screens/News';
import Browser from './android/Screens/Browser';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="News"
          component={NewsList}
          options={{title: 'Covid-19 News'}}
        />
        <Stack.Screen
          name = "WebNews"
          component = {Browser}
          options = {{title: "News Detail"}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App
