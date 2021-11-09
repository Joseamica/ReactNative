import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont();
Feather.loadFont();

const SearchIcon = ({onPress}) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={onPress}>
        <Feather name="search" size={23} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchIcon;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',

    height: 40,
    width: 70,
    justifyContent: 'center',

    alignItems: 'center',
  },
});
