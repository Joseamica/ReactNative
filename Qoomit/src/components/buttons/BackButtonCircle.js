import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

Ionicons.loadFont();
Feather.loadFont();
AntDesign.loadFont();
Entypo.loadFont();
MaterialIcons.loadFont();
MaterialCommunityIcons.loadFont();

const BackButtonCircle = (props) => {
  const navigation = useNavigation();
  const {container, button} = styles;

  return (
    <TouchableOpacity
      style={[
        button,
        {
          resizeMode: props.resizeMode,
          opacity: props.opacity,
          backgroundColor: props.backgroundColor,
        },
      ]}
      onPress={() => navigation.goBack()}
      activeOpacity={0.8}>
      <Ionicons name="arrow-back" size={20} color="black" />
    </TouchableOpacity>
  );
};

export default BackButtonCircle;

const styles = StyleSheet.create({
  button: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    marginLeft: 10,
  },
});
