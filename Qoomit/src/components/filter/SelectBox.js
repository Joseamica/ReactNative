import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

MaterialCommunityIcons.loadFont();

export const SelectBoxPair = ({navigation, text, onPress, onPressIn}) => {
  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={onPress}
        onPressIn={onPressIn}>
        <Text style={styles.text}>{text}</Text>
        <MaterialCommunityIcons name="menu-down" size={10} />
      </TouchableOpacity>
    </>
  );
};
export const SelectBoxLong = ({navigation, text, onPress, onPressIn}) => {
  return (
    <>
      <TouchableOpacity
        style={styles.containerLong}
        onPress={onPress}
        onPressIn={onPressIn}>
        <Text style={styles.text}>{text}</Text>
        <MaterialCommunityIcons name="menu-down" size={10} />
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 53,
    width: '48%',
    borderColor: '#ECF0F1',
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    justifyContent: 'space-between',
    paddingRight: 10,
    marginBottom: 10,
  },
  containerLong: {
    height: 53,
    width: '98%',
    borderColor: '#ECF0F1',
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginBottom: 10,
    paddingRight: 10,
  },
  text: {
    fontSize: 17,
    marginHorizontal: 20,
    color: '#939393',
  },
});
