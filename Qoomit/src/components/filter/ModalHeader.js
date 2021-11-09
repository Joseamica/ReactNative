import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

MaterialCommunityIcons.loadFont();

const ModalHeader = ({onClose}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onClose}>
        <MaterialCommunityIcons name="close" size={22} />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Filter</Text>
      <TouchableOpacity>
        <Text style={styles.clearButton}>Clear</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ModalHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    height: 50,
  },
  headerTitle: {
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  clearButton: {
    color: '#4481EB',
    fontWeight: 'bold',
  },
});
