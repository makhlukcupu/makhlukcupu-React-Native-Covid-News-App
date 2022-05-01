import React from 'react'
import {WebView} from 'react-native-webview'
import {Text, View} from 'react-native'

const Browser = ({route, navigation}) => {
    return (
        <WebView source={{uri: route.params.link}} />
    );
}
export default Browser
