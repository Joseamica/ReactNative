import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';

const Privacy = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <WebView
        source={{uri: 'https://qoomit.com/home'}}
        style={{marginTop: 20}}
      />
    </SafeAreaView>
  );
};

export default Privacy;

const styles = StyleSheet.create({});
