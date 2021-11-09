import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import NavigationHeader from '../../components/headers/NavigationHeader';

const PremiumScreen = () => {
  return (
    <SafeAreaView>
      <NavigationHeader title={'Premium'} />
      <Text>PremiumScreen</Text>
    </SafeAreaView>
  );
};

export default PremiumScreen;

const styles = StyleSheet.create({});
