import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import * as React from 'react';
import {SafeAreaView, Text} from 'react-native';

function HomeScreen() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
      }}>
      <Text>Home!</Text>
    </SafeAreaView>
  );
}

function SettingsScreen() {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </SafeAreaView>
  );
}

const TopTabNav = createMaterialTopTabNavigator();

export default function TopTab() {
  return (
    <TopTabNav.Navigator tabBarPosition={'top'}>
      <TopTabNav.Screen name="Home" component={HomeScreen} />
      <TopTabNav.Screen name="Settings" component={SettingsScreen} />
    </TopTabNav.Navigator>
  );
}
