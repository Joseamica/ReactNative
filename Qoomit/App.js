import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import Loading from "./src/components/Loading"
import Portal from '@burstware/react-native-portal';



export default function App() {
  const [loading, setLoading] = React.useState(false);

  const startLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };


  React.useEffect(() => {
    //firebase.auth().onAuthStateChanged((response) => {
      //setUser(response);
    //});
    startLoading();

  }, []);

  return (
    <>
  {loading ? <Loading/> :   
    <Portal.Host>
  
  <NavigationContainer>
    <Navigation />
  </NavigationContainer>
  </Portal.Host>

  }


  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
