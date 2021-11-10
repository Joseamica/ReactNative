import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import Calendar from '../components/Calendar';
import NavBar from '../components/NavBar';

const {width, height} = Dimensions.get('window');

const P_Qoomit = () => {
  return (
    <View style={{flex: 1}}>
      <Calendar />
      <NavBar />
    </View>
  );
};

export default P_Qoomit;

const styles = StyleSheet.create({});
