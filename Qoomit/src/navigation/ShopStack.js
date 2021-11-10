import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import P_Shop from '../screens/P_Shop';

const Stack = createStackNavigator();

function ShopStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="P_Shop"
        component={P_Shop}
        options={{title: 'Shop  '}}
      />
    </Stack.Navigator>
  );
}

export default ShopStack;
