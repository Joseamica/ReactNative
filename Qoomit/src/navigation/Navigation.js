import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Delete from '../screens/Delete';
// import LeaderboardsScreen from '../screens/DrawerScreens/LeaderboardsScreen';
// import NotificationsScreen from '../screens/DrawerScreens/NotificationsScreen';
// import PremiumScreen from '../screens/DrawerScreens/PremiumScreen';
// import SettingsScreen from '../screens/SettingsScreen';
// import Auth from './../components/Auth';
// import CreateWorkout from './../screens/CreateWorkout';
import {DrawerContent} from './../screens/DrawerScreens/DrawerContent';
// import ProfileScreen from './../screens/ProfileScreen';
// import AuthStack from './AuthStack';
// import CreateStack from './CreateStack';
import TabNavigator from './TabNavigator';
// import TopTab from './TopTab';

const Drawer = createDrawerNavigator();

const Navigation = () => (
  <SafeAreaProvider>
    {/* <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}> */}
    <Drawer.Navigator initialRouteName="Delete">

      <Drawer.Screen name="Sumi" component={TabNavigator} />
      {/* <Drawer.Screen name="Auth" component={Auth} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
      <Drawer.Screen name="Leaderboards" component={LeaderboardsScreen} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      <Drawer.Screen name="PremiumFeatures" component={PremiumScreen} />
      <Drawer.Screen name="CreateWorkout" component={CreateWorkout} />
      <Drawer.Screen name="TopTab" component={TopTab} />
      <Drawer.Screen name="AuthStack" component={AuthStack} />
      <Drawer.Screen name="CreateStack" component={CreateStack} /> */}
    </Drawer.Navigator>
  </SafeAreaProvider>
);
export default Navigation;

const styles = StyleSheet.create({});
