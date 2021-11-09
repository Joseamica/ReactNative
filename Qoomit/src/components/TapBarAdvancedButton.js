import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  Dimensions,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import { Button, Divider, Title } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import TabBg from '../svg/TabBg';
import colors from './../utils/colors';

const { width, height } = Dimensions.get('window');
Platform.OS == 'ios'
  ? console.log('ios HEIGHT: ' + height + ' WIDTH: ' + width)
  : console.log('android HEIGHT: ' + height + ' WIDTH: ' + width);

Ionicons.loadFont();
Feather.loadFont();
AntDesign.loadFont();
Entypo.loadFont();
MaterialIcons.loadFont();

const Workouts = (props) => {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = props.functions;
  return (
    <SafeAreaView style={styles.centeredView}>
      <View style={styles.modalView}>
        <View style={styles.modalHeader}>
          <Button onPress={() => setModalVisible(false)}>close</Button>
          <Text>title</Text>
          <Text>action</Text>
        </View>
        <View style={styles.modalContainer}>
          <Title style={{ marginBottom: 30 }}>Create Workout</Title>
          <Divider />
          <Button
            icon="run"
            onPress={() =>
              navigation.navigate('CreateWorkout', {
                workout_name: 'Gym',
              }) || setModalVisible(false)
            }>
            Gym
          </Button>
          <Divider />
          <Button
            icon="run"
            onPress={() =>
              navigation.navigate('CreateWorkout', {
                workout_name: 'Yoga',
              }) || setModalVisible(false)
            }>
            Yoga
          </Button>
          <Button
            icon="run"
            onPress={() =>
              navigation.navigate('CreateWorkout', {
                workout_name: 'Meditation',
              }) || setModalVisible(false)
            }>
            Meditation
          </Button>
          <Button
            icon="run"
            onPress={() =>
              navigation.navigate('CreateWorkout', {
                workout_name: 'Strength',
              }) || setModalVisible(false)
            }>
            Strength
          </Button>
          <Divider />
          <Button
            icon="run"
            onPress={() =>
              navigation.navigate('CreateWorkout', {
                workout_name: 'Cardio',
              }) || setModalVisible(false)
            }>
            Cardio
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

const TabBarAdvancedButton = ({ name, bgColor, ...props }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.container} pointerEvents="box-none">
        <TabBg color={'white'} style={styles.background} />
        <TouchableOpacity
          style={styles.button}
          onPress={props.onPress}
          activeOpacity={0.9}
          onPress={() => setModalVisible(true)}>
          <Entypo name="plus" style={styles.buttonIcon} />
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onBackdropPress={() => setModalVisible(false)}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <Workouts functions={[modalVisible, setModalVisible]} />
      </Modal>
    </>
  );
};

export default TabBarAdvancedButton;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 75,
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    top: 0,
  },
  button: {
    top: -22.5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 27,
    backgroundColor: colors.PRIMARY_COLOR_DARK,
  },
  buttonIcon: {
    fontSize: 16,
    color: '#F6F7EB',
  },
  centeredView: {},
  modalHeader: {
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  modalContainer: {
    top: 100,
    width: '100%',
    alignItems: 'center',
  },
  modalView: {
    top: 200,
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 15,
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },

  buttonItem: {
    height: 56,
    width: 56,
    borderRadius: 100,
    borderColor: '#468CFF',
    borderWidth: 3.5,
    backgroundColor: '#366ABF',
    bottom: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeModalButton: {
    width: 50,
    height: 50,
    position: 'absolute',
    backgroundColor: colors.PRIMARY_COLOR_DARK,
    justifyContent: 'center',
    alignItems: 'center',
    left: '41%',
    bottom: '-10%',
    borderRadius: 100,
  },
  groupMenuButtons: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    marginBottom: height * 0.02,
  },
});
