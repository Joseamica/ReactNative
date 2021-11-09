import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import NavigationHeader from '../../components/headers/NavigationHeader';

const NotificationsScreen = () => {
  return (
    <SafeAreaView>
      <NavigationHeader title={'Notifications'} />
      <Text>NotificationsScreen</Text>
    </SafeAreaView>
  );
};

export default NotificationsScreen;

const styles = StyleSheet.create({});
