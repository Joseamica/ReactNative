import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import DeleteModal from '../modals/DeleteModal';

Feather.loadFont();

const MoreIcon = ({onOpen}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Feather
          name="more-horizontal"
          size={25}
          style={{marginRight: 15, marginTop: 15}}
        />
      </TouchableOpacity>
      <DeleteModal
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
};

export default MoreIcon;

const styles = StyleSheet.create({});
