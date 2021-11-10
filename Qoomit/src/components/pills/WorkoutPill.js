import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../../utils/colors';
import IntensityBall from '../icons/IntensityBall';

Ionicons.loadFont();
Feather.loadFont();
AntDesign.loadFont();
Entypo.loadFont();
MaterialIcons.loadFont();
MaterialCommunityIcons.loadFont();

const WorkoutPill = ({
  onModalize,
  onFriends = true,
  type = 'Full Body',
  exercise = 'Strength',
  time = '30',
  image = require('../../../assets/images/yoga1.jpg'),
  coach = 'John Doe',
  intensity = 'Advanced',
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={onModalize}
      activeOpacity={0.8}
      onPress={() =>
        navigation.navigate('WorkoutDescription', {
          exercise: exercise,
          type: type,
          time: time,
          image: image,
          coach: coach,
          intensity: intensity,
        })
      }>
      <View style={styles.container}>
        <Image style={styles.coachPic} source={image} />
        <View style={styles.infoContainer}>
          <View style={styles.title}>
            <Text style={styles.titleText}>
              {exercise} {'\u2022'} {type}
            </Text>
          </View>
          <View style={styles.description}>
            <Text
              style={{
                color: colors.DISABLED_COLOR,
                fontSize: 15,
                backgroundColor: 'transparent',
              }}>
              {time} min |
              <IntensityBall
                intensity={intensity}
                fullBackgroundColor="grey"
                emptyBackgroundColor="white"
              />
            </Text>
          </View>
          {onFriends ? (
            <View style={styles.friends}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={{
                  height: 22,
                  width: 22,
                  backgroundColor: colors.PRIMARY_COLOR_DARK,
                  borderRadius: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Feather name="plus" color="white" />
              </TouchableOpacity>
            </View>
          ) : (
            <View>{/* no borrar, sirve como relleno para dar estilo. */}</View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default WorkoutPill;

const styles = StyleSheet.create({
  container: {
    width: 275,
    height: 95,
    flexDirection: 'row',
    borderRadius: 9,
    backgroundColor: 'white',
    borderColor: colors.BORDER_COLOR,
    borderWidth: 1,
    shadowOffset: { width: 0, height: 0 },
    shadowColor: colors.PRIMARY_COLOR,
    shadowOpacity: 0.2,
    shadowRadius: 10,
    marginVertical: 15,
    marginHorizontal: 10,
    elevation: 10,
  },
  coachPic: {
    width: 92,
    height: 82,
    marginVertical: 5,
    borderRadius: 9,
    marginLeft: 5,
  },
  infoContainer: {
    flexDirection: 'column',
    marginVertical: 6,
    justifyContent: 'space-between',
    marginHorizontal: 5,
    flex: 1,
    backgroundColor: 'white',
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  friends: {
    alignSelf: 'flex-end',
  },
});
