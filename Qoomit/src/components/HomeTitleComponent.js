import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const HomeTitleComponent = ({title, info, disableButton = false, onPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.viewTitle}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity
          style={styles.button}
          disabled={disableButton}
          onPress={onPress}>
          <Text style={styles.info}>{info}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeTitleComponent;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  button: {
    justifyContent: 'space-evenly',
  },
  viewTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexGrow: 1,
  },
  title: {
    fontSize: 30,
    letterSpacing: 1,
    fontWeight: 'bold',
  },
  info: {
    color: '#9B9EB7',
    fontSize: 14,
    alignSelf: 'center',
    fontWeight: '700',
  },
});
