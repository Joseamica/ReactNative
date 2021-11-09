import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import NavigationHeader from '../../components/headers/NavigationHeader';

const LeaderboardsScreen = () => {
  return (
    <SafeAreaView>
      <NavigationHeader title={'Leaderboards'} />
      <Text>LeaderboardsScreen</Text>
    </SafeAreaView>
  );
};

export default LeaderboardsScreen;

const styles = StyleSheet.create({});
