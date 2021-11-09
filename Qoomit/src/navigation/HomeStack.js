import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {FilterButton} from '../components/filter/FilterButton';
import ProfileIcon from '../components/icons/ProfileIcon';
import SearchIcon from '../components/icons/SearchIcon';
import SearchBarComponent from '../components/SearchBar';
import CoachProfileScreen from '../screens/CoachProfileScreen';
import CreateWorkout from '../screens/CreateWorkout';
import FeaturedWorkoutScreen from '../screens/FeaturedWorkoutScreen';
import FilterScreen from '../screens/FilterScreen';
import LiveSessionScreen from '../screens/LiveSessionScreen';
import HomeScreen from '../screens/P_HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import SettingsScreen from '../screens/SettingsScreen';
import WorkoutDescription from '../screens/WorkoutDescription';

Feather.loadFont();
MaterialCommunityIcons.loadFont();
Ionicons.loadFont();

MaterialIcons.loadFont();

const Stack = createStackNavigator();

function HomeStack({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerRight: (props) => (
            <SearchIcon
              {...props}
              onPress={() => navigation.navigate('Search')}
            />
          ),
          headerLeft: (props) => (
            <ProfileIcon {...props} onPress={() => navigation.openDrawer()} />
          ),
        }}
      />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerTitle: (props) => <SearchBarComponent {...props} />,
          headerLeft: (props) => (
            <TouchableOpacity
              style={{marginLeft: 10}}
              onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={25} />
            </TouchableOpacity>
          ),
          headerRight: (props) => (
            <FilterButton
              {...props}
              onPress={() => navigation.navigate('Filter')}
            />
          ),
        }}
      />
      <Stack.Screen
        name="FeaturedWorkoutScreen"
        component={FeaturedWorkoutScreen}
      />
      <Stack.Screen name="LiveSessionScreen" component={LiveSessionScreen} />
      <Stack.Screen
        name="CoachProfileScreen"
        component={CoachProfileScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="CreateWorkout" component={CreateWorkout} />
      <Stack.Screen
        name="WorkoutDescription"
        component={WorkoutDescription}
        options={{
          headerShown: false,
          headerTitle: 'Workout Description',
        }}
      />

      <Stack.Screen name="Filter" component={FilterScreen} />
    </Stack.Navigator>
  );
}

export default HomeStack;
