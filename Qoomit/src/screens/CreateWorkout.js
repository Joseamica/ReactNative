import Slider from '@react-native-community/slider';
import { useIsFocused } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CreateHeader from '../components/headers/CreateHeader';
import IntensityBall from '../components/icons/IntensityBall';
import colors from '../utils/colors';
import firebase from '../utils/firebase';
import s from '../utils/styles';

MaterialCommunityIcons.loadFont();

const CreateWorkout = ({ route }) => {
  //Todo: Hard coded values
  const [workout, setWorkout] = useState(null);
  const [coach, setCoach] = useState(null);
  const [type, setType] = useState(workout_name);
  const [intensity, setIntensity] = useState(null);
  const [sliderValue, setSliderValue] = useState(0);
  const { workout_name } = route.params;

  useEffect(() => {
    // Return the function to unsubscribe from the event so it gets removed on unmount
  }, []);

  const firebaseAdd = () => {
    firebase
      .firestore()
      .collection('workout')
      .add({
        workout: workout,
        type: type,
        coach: selectCoach(coach),
        intensity: intensity,
        sliderValue: sliderValue,
        image: selectCoach(coach),
      })
      .then(() => {
        console.log('Added');
      });
  };

  const isFocused = useIsFocused();

  const { width, height } = Dimensions.get('window');
  function FocusAwareStatusBar(props) {
    const isFocused = useIsFocused();

    return isFocused ? <StatusBar {...props} /> : null;
  }

  const selectCoach = () => {
    switch (coach) {
      case 'Ari A.':
        var req = require('../../assets/images/ari-amp.png');
        return req;
      case 'Jose A.':
        var req = require('../../assets/images/JoseA.jpg');
        return req;
      case 'Fer C.':
        var req = require('../../assets/images/Pill/ferC.jpg');
        return req;
    }
  };

  const Reset = () => {
    setWorkout(null);
    setCoach(null);
    setType(null);
    setIntensity(null);
    setSliderValue(0);
  };

  return (
    <>
      <SafeAreaView
        style={[
          styles.container,
          { backgroundColor: colors.PRIMARY_COLOR_DARK },
        ]}>
        <View
          style={{
            backgroundColor: 'white',
            flex: 2,
          }}>
          <FocusAwareStatusBar
            barStyle="light-content"
            backgroundColor={colors.PRIMARY_COLOR_DARK}
          />
          <CreateHeader title={workout_name} reset={Reset} />
          <View style={styles.viewInputs}>
            <RNPickerSelect
              style={picketSelectStyles}
              onValueChange={(value) => setWorkout(value)}
              value={workout_name}
              placeholder={{
                label: workout_name,
                value: workout_name,
              }}
              items={[
                { label: 'Strength', value: 'Strength' },
                { label: 'Yoga', value: 'Yoga' },
                { label: 'Cardio', value: 'Cardio' },
                { label: 'Meditation', value: 'Meditation' },
                { label: 'Gym', value: 'Gym' },
              ]}
            />
            <RNPickerSelect
              style={picketSelectStyles}
              onValueChange={(value) => setType(value)}
              value={type}
              placeholder={{
                label: 'Select Type...',
                value: null,
              }}
              items={[
                { label: 'Full Body', value: 'Full Body' },
                { label: 'Core', value: 'Core' },
                { label: 'Lower Body', value: 'Lower Body' },
              ]}
            />
          </View>
          <View style={styles.viewInputs}>
            <RNPickerSelect
              style={picketSelectStyles}
              value={intensity}
              onValueChange={(value) => setIntensity(value)}
              placeholder={{
                label: 'Intensity',
                value: null,
              }}
              items={[
                { label: 'Beginner', value: 'Beginner' },
                { label: 'Intermediate', value: 'Intermediate' },
                { label: 'Advanced', value: 'Advanced' },
              ]}
            />
            <RNPickerSelect
              style={picketSelectStyles}
              value={coach}
              onValueChange={(value) => setCoach(value)}
              placeholder={{
                label: 'Coach',
                value: 'Coach',
              }}
              items={[
                { label: 'Jose A.', value: 'Jose A.' },
                { label: 'Ari A.', value: 'Ari A.' },
                { label: 'Fer C.', value: 'Fer C.' },
              ]}
            />
          </View>

          <View style={styles.slider}>
            <Text
              style={{ marginLeft: '7%', fontSize: 18, marginVertical: '5%' }}>
              Duration
            </Text>

            <Slider
              style={{ width: '90%', alignSelf: 'center' }}
              maximumValue={60}
              minimumValue={0}
              minimumTrackTintColor={colors.PRIMARY_COLOR_DARK}
              maximumTrackTintColor="grey"
              step={15}
              value={sliderValue}
              onValueChange={(sliderValue) => setSliderValue(sliderValue)}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <Text style={styles.sliderText}>0</Text>
              <Text style={styles.sliderText}>15</Text>
              <Text style={styles.sliderText}>30</Text>
              <Text style={styles.sliderText}>45</Text>
              <Text style={styles.sliderText}>60</Text>
            </View>
          </View>
          {/* ------------------WORKOUT PILL------------------------ */}
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={styles.container1}>
            <Image style={styles.coachPic} source={selectCoach()} />
            <View style={styles.infoContainer}>
              <View style={styles.title}>
                <Text style={styles.titleText}>
                  {!workout_name ? (
                    <Text>Workout </Text>
                  ) : (
                    <Text>{workout_name} </Text>
                  )}
                  {'\u2022'} {!type ? <Text>Type</Text> : <Text>{type}</Text>}
                </Text>
              </View>
              {/* MINS AND DIFFICULTY */}
              <View style={{ marginTop: 10, width: '90%' }}>
                <Text style={{ color: '#939393', fontSize: 14 }}>
                  {sliderValue} min |
                  {intensity === null ? (
                    <IntensityBall intensity={null} />
                  ) : null}
                  {intensity === 'Beginner' ? (
                    <IntensityBall
                      intensity={intensity}
                      fullBackgroundColor="grey"
                    />
                  ) : null}
                  {intensity === 'Intermediate' ? (
                    <IntensityBall
                      intensity={intensity}
                      fullBackgroundColor="grey"
                    />
                  ) : null}
                  {intensity === 'Advanced' ? (
                    <IntensityBall
                      intensity={intensity}
                      fullBackgroundColor="grey"
                    />
                  ) : null}
                </Text>
              </View>
              {/*<View style={styles.friends}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={{
                    height: 30,
                    width: 30,
                    backgroundColor: colors.PRIMARY_COLOR_DARK,
                    borderRadius: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <MaterialCommunityIcons name="plus" size={15} color="white" />
                </TouchableOpacity>
              </View>*/}
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            marginVertical: 35,
            justifyContent: 'center',
          }}
          onPress={() => firebaseAdd()}>
          <Text style={s.buttonText}>Create</Text>
        </TouchableOpacity>
        {/* Modal */}
      </SafeAreaView>
    </>
  );
};

export default CreateWorkout;

const styles = StyleSheet.create({
  container: { flex: 1 },
  selectBoxPair: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  slider: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 20,
  },
  sliderText: {
    marginHorizontal: 15,
    fontSize: 18,
    color: '#939393',
  },
  viewInputs: {
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },

  container1: {
    width: 320,
    height: 94,
    justifyContent: 'space-around',
    flexDirection: 'row',
    borderRadius: 9,
    backgroundColor: 'white',
    borderColor: '#ECF0F1',
    borderWidth: 2,
    shadowOffset: { width: 0, height: 10 },
    shadowColor: 'grey',
    shadowOpacity: 1,
    shadowRadius: 10,
    marginVertical: 15,
    marginHorizontal: 10,
    elevation: 20,
  },
  coachPic: {
    marginVertical: 6,
    width: 92,
    height: 82,
    borderRadius: 9,
  },
  infoContainer: {
    flexDirection: 'column',
    marginVertical: 6,
    marginHorizontal: 15,
    flex: 1,
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  friends: {
    alignSelf: 'flex-end',
  },
  disabledText: {
    color: '#939393',
  },
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
});
const picketSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderWidth: 2,
    color: 'grey',
    paddingRight: 30,
    borderColor: '#ECF0F1',
    borderWidth: 2,
    borderRadius: 10,
    width: 170,
  },
  inputAndroid: {
    fontSize: 16,
    borderWidth: 2,
    borderColor: 'black',
    color: 'black',
    paddingRight: 30,
    borderWidth: 3,

    borderRadius: 20,
    width: 190,
  },
});
