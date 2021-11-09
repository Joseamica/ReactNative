import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

MaterialCommunityIcons.loadFont();

const FilterBox = ({navigation, icon, title, onPress}) => {
  const [select, setSelect] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const Toggle = () => {
    select ? setSelect(false) : setSelect(true);
    select ? setModalVisible(true) : setModalVisible(false);
  };
  return (
    <TouchableOpacity
      style={select ? styles.modalBoxSelected : styles.modalBox}
      onPress={Toggle}>
      <MaterialCommunityIcons
        name={icon}
        size={22}
        color={select ? '#4481EB' : '#525252'}
      />
      <Text
        style={{
          color: select ? '#4481EB' : '#525252',
          fontWeight: select ? 'bold' : 'normal',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default FilterBox;

const styles = StyleSheet.create({
  modalBox: {
    height: 91,
    width: 100,
    borderWidth: 2,
    borderColor: '#ECF0F1',
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 15,
    marginBottom: 35,
  },
  modalBoxSelected: {
    height: 91,
    width: 100,
    borderWidth: 2,
    borderColor: '#4481EB',
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 15,
    marginBottom: 35,
  },
});
