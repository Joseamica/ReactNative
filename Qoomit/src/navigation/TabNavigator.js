import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {default as TabBarAdvancedButton} from '../components/TapBarAdvancedButton';
import Delete from '../screens/Delete';
import {IS_IPHONE_X} from '../utils/index';
import colors from './../utils/colors';
import CreateStack from './CreateStack';
import HomeStack from './HomeStack';
import MenuStack from './MenuStack';
// import QoomitStack from './QoomitStack';
import ShopStack from './ShopStack';

Ionicons.loadFont();
Feather.loadFont();
Entypo.loadFont();

const Tab = createBottomTabNavigator();

function ModalScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 30}}>This is a modal!</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}

const TabNavigator = ({barColor = /*'#F6F7EB'*/ 'white'}) => {
  const ActionButtonComponent = () => {
    return null;
  };

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Qoomit') {
            iconName = focused ? 'star' : 'star';
          } else if (route.name === 'Shop') {
            iconName = focused ? 'shopping-cart' : 'shopping-cart';
          } else if (route.name === 'Menu') {
            iconName = focused ? 'menu' : 'menu';
          }

          return <Entypo name={iconName} size={size} color={color} />;
        },
      })}
      tabBar={(props) => (
        <View style={styles.navigatorContainer}>
          <BottomTabBar {...props} />
          {IS_IPHONE_X && (
            <View
              style={[
                styles.xFillLine,
                {
                  backgroundColor: barColor,
                },
              ]}
            />
          )}
        </View>
      )}
      tabBarOptions={{
        activeTintColor: colors.PRIMARY_COLOR_DARK,
        inactiveTintColor: 'gray',
        style: styles.navigator,
        tabStyle: {
          backgroundColor: barColor,
        },
      }}>
      <Tab.Screen name="Home" component={HomeStack} 
          options={{
          headerShown: false,
          headerTitle: 'Workout Description',
        }}/>
      
      {/* <Tab.Screen name="Qoomit" component={QoomitStack} />*/}

      <Tab.Screen
        name="Create"
        component={CreateStack}
        options={{
          tabBarButton: (props) => (
            <TabBarAdvancedButton bgColor={barColor} {...props} />
          ),
        }}
      />
       
      <Tab.Screen name="Shop" component={ShopStack} />
      <Tab.Screen name="Menu" component={MenuStack} />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navigatorContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  navigator: {
    borderTopWidth: 0,
    backgroundColor: 'transparent',
    elevation: 30,
  },
  xFillLine: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 30,
  },
});
