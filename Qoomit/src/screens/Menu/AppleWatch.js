import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import s from '../../utils/styles';
const AppleWatch = () => {
  return (
    <View
      style={{flex: 1, justifyContent: 'space-evenly', alignItems: 'center'}}>
      <Image
        source={require('../../../assets/images/AppleWatch.png')}
        style={styles.image}
      />
      <TouchableOpacity style={s.createButton} activeOpacity={0.8}>
        <Text style={s.buttonText}>Connect to Apple Watch</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AppleWatch;

const styles = StyleSheet.create({
  image: {
    height: 400,
    width: 400,
  },
});
