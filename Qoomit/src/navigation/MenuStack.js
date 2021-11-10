import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MoreIcon from '../components/icons/MoreIcon';
import AppleWatch from '../screens/Menu/AppleWatch';
import Downloads from '../screens/Menu/Downloads';
import EditPlan from '../screens/Menu/EditPlan';
import EditProfile from '../screens/Menu/EditProfile';
import HealthApp from '../screens/Menu/HealthApp';
import Preferences from '../screens/Menu/Preferences';
import Privacy from '../screens/Menu/Privacy';
import Subscription from '../screens/Menu/Subscription';
import P_MenuScreen from '../screens/P_MenuScreen';
import SettingsScreen from '../screens/SettingsScreen';
import TopTab from './TopTab';

Feather.loadFont();
MaterialCommunityIcons.loadFont();
Ionicons.loadFont();
MaterialIcons.loadFont();

const Stack = createStackNavigator();

function MenuStack() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Menu" component={P_MenuScreen} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="EditPlan" component={EditPlan} />
        <Stack.Screen name="Subscription" component={Subscription} />
        <Stack.Screen name="Preferences" component={Preferences} />
        <Stack.Screen name="HealthApp" component={HealthApp} />
        <Stack.Screen name="AppleWatch" component={AppleWatch} />
        <Stack.Screen
          name="Downloads"
          component={Downloads}
          options={{
            headerRight: (props) => <MoreIcon {...props} />,
          }}
        />
        <Stack.Screen name="TopTab" component={TopTab} />

        <Stack.Screen name="Privacy" component={Privacy} />
      </Stack.Navigator>
  );
}

export default MenuStack;
