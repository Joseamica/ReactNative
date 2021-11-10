import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../utils/colors';

const BlockCategories = ({source, title}) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8}>
      <ImageBackground source={source} style={styles.image}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{title}</Text>
          <View style={styles.circle}>
            <Text style={styles.textCircle}>Hola</Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default BlockCategories;

const styles = StyleSheet.create({
  container: {
    width: 162,
    height: 127,
    marginBottom: 10,
    marginRight: 10,
    borderRadius: 10,
    alignContent: 'space-around',
  },
  image: {
    flex: 1,
    borderRadius: 10,
    flexDirection: 'row',
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',

    alignItems: 'flex-end',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: 'white',
    fontWeight: '500',
  },
  textCircle: {
    fontSize: 11,
    color: 'white',
  },
  circle: {
    backgroundColor: colors.PRIMARY_COLOR_DARK,
    height: 18,
    width: 49,
    justifyContent: 'center',
    borderRadius: 30,
    alignItems: 'center',
  },
});
