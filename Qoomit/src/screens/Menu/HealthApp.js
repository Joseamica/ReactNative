import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import s from '../../utils/styles';
const HealthApp = () => {
  return (
    <View
      style={{flex: 1, justifyContent: 'space-evenly', alignItems: 'center'}}>
      <Image
        source={require('../../../assets/images/HealthAccess.jpg')}
        style={styles.image}
      />
      <TouchableOpacity style={s.createButton} activeOpacity={0.8}>
        <Text style={s.buttonText}>Connect to Health App</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HealthApp;

const styles = StyleSheet.create({
  image: {
    height: '50%',
    width: '50%',
  },
});
