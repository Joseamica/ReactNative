import Portal from '@burstware/react-native-portal';
import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Divider} from 'react-native-elements';
import {Modalize} from 'react-native-modalize';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FilterBox from './FilterBox';
import FilterModal from './FilterModal';
import ModalHeader from './ModalHeader';
import {SelectBoxLong, SelectBoxPair} from './SelectBox';

Feather.loadFont();
MaterialCommunityIcons.loadFont();
Ionicons.loadFont();
MaterialIcons.loadFont();

export const FilterButton = ({onPress}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [textTitle, setText] = useState('');

  const modalizeRef = useRef(null);

  const Toggle = () => {
    modalVisible ? setModalVisible(false) : setModalVisible(true);
  };

  function onOpen() {
    modalizeRef.current?.open();
  }

  function onClose() {
    modalizeRef.current?.close();
  }
  useEffect(() => {
    onOpen();
  }, []);

  return (
    <>
      <TouchableOpacity style={styles.filterButton} onPress={onOpen}>
        <MaterialCommunityIcons name="filter-variant" size={22} color="black" />
      </TouchableOpacity>
      <Portal>
        {/* EMPIEZA EL MODAL DE FILTER */}
        <Modalize
          ref={modalizeRef}
          snapPoint={200}
          panGestureEnabled={true}
          closeOnOverlayTap={true}
          handlePosition={'outside'}
          withOverlay={true}
          adjustToContentHeight={true}
          handleStyle={{width: 100}}
          modalStyle={{
            borderTopLeftRadius: 22,
            borderTopRightRadius: 22,
          }}>
          <View style={styles.modalHeader}>
            <ModalHeader onClose={onClose} />
            {/* EMPIEZA EL MODAL DE LOS BOXES */}

            <View style={styles.modalBoxes}>
              <Divider style={{backgroundColor: 'black'}} />
              <FilterBox title="Favorites" icon="heart" />
              <FilterBox title="By Me" icon="check" />
              <FilterBox title="Language" icon="check" />
            </View>
            {/* EMPIEZA EL MODAL DE LOS BOXES LARGOS */}

            <View style={styles.modalSelectBox}>
              <SelectBoxPair
                text="Type"
                onPress={() => {
                  setModalVisible(true);
                  setText('Type');
                }}
              />
              <SelectBoxPair
                text="Difficulty"
                onPress={() => {
                  setModalVisible(true);
                  setText('Difficulty');
                }}
              />
            </View>
            <View style={styles.modalSelectBox2}>
              <SelectBoxLong
                text="Instructor"
                onPress={() => {
                  setModalVisible(true);
                  setText('Instructor');
                }}
              />
              <SelectBoxLong
                text="Equipment"
                onPress={() => {
                  setModalVisible(true);
                  setText('Equipment');
                }}
              />
              <SelectBoxLong
                text="Duration"
                onPress={() => {
                  setModalVisible(true);
                  setText('Duration');
                }}
              />
            </View>
            <TouchableOpacity
              style={styles.Button}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              {/* FILTER BUTTON */}

              <Text style={{color: 'white'}}>Filter</Text>
            </TouchableOpacity>
          </View>

          {/* EMPIEZA EL MODAL */}

          <FilterModal
            Visible={modalVisible}
            setModal={() => setModalVisible(false)}
            sText={textTitle}
          />
        </Modalize>
      </Portal>
    </>
  );
};

const styles = StyleSheet.create({
  filterButton: {
    height: 40,
    width: 70,
    justifyContent: 'center',

    alignItems: 'center',
  },
  modalHeader: {
    height: 700,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  modalBoxes: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  modalSelectBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalSelectBox2: {},
  Button: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: 330,
    height: 45,
    borderRadius: 6,
    marginVertical: 20,
    backgroundColor: '#4481EB',
  },
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
