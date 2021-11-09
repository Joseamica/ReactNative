import React from 'react';
import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

MaterialCommunityIcons.loadFont();

const FilterModal = ({sText, Visible, setModal}) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={Visible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginVertical: 10,

                flexGrow: 1,
              }}>
              <TouchableOpacity onPress={setModal}>
                <MaterialCommunityIcons name="close" size={22} />
              </TouchableOpacity>

              <Text style={styles.modalText}>{sText}</Text>
            </View>
            <TouchableOpacity
              style={{
                flex: 1,
                width: 164,
                height: 100,
                backgroundColor: 'grey',
                alignSelf: 'center',
              }}>
              <Text>a</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default FilterModal;

const styles = StyleSheet.create({
  centeredView: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignContent: 'flex-start',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    width: 200,
    top: 300,
    height: 200,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    marginRight: 35,
  },
});
