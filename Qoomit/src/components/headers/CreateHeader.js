import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StatusBar, StyleSheet, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';

Ionicons.loadFont();

const CreateHeader = ({title, reset}) => {
  const navigation = useNavigation();

  return (
    <>
      <StatusBar />
      <LinearGradient
        colors={['#006691', '#006691', '#006691']}
        style={styles.container}>
        <TouchableOpacity
          onPressIn={reset}
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Text style={styles.smallText}>Cancel</Text>
        </TouchableOpacity>
        <Text style={styles.text}>{title}</Text>
        <TouchableOpacity onPress={reset} style={styles.backButton}>
          <Text style={styles.smallText}>Reset</Text>
        </TouchableOpacity>
      </LinearGradient>
    </>
  );
};

export default CreateHeader;

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  backButton: {},
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  smallText: {
    fontSize: 18,
    color: 'white',
  },
});
