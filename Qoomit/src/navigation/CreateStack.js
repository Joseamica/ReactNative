import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
const Stack = createStackNavigator();

function ModalScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30}}>This is a modal!</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}

function CreateStack() {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen name="MyModal" component={ModalScreen} />
    </Stack.Navigator>
  );
}

export default CreateStack;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
