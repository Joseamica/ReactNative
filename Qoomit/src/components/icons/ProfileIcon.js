import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Avatar} from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont();
Feather.loadFont();

const SearchIcon = ({onPress}) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={onPress}>
        <Avatar.Image
          source={require('./../../..//assets/images/Profile/Ellipse-94.png')}
          size={30}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchIcon;

const styles = StyleSheet.create({
  headerContainer: {
    marginLeft: 15,
  },
});
