import React, { useCallback, useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import WorkoutPill from '../../components/pills/WorkoutPill';
import DownloadContext from '../../context/DownloadContext';
import TestContext, { TestContext2 } from '../../context/Testing';
import FavoriteContext from '../../context/FavoriteContext';

import firebase, { db } from '../../utils/firebase';

const Downloads = () => {
  const downloads = React.useContext(DownloadContext);
  const favorite = React.useContext(FavoriteContext);

  const [workout, setWorkout] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getWorkouts();
  }, []);

  const getWorkouts = async () => {
    const list = [];
    try {
      setLoading(true);
      var snapshot = await firebase.firestore().collection('workout').get();
      snapshot.forEach((doc) => {
        list.push(doc.data());
      });
      setWorkout([...list]);
      setLoading(false);
    } catch (e) {
      console.log('error' + e);
    }
  };

  return (
    <>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <View>
          <Text>{downloads.toString()}</Text>
          <Button title="Test" onPress={() => console.log(downloads)} />

          <FlatList
            data={workout}
            renderItem={({ item }) => {
              return (
                <>
                  <WorkoutPill
                    exercise={item.workout}
                    type={item.type}
                    time={item.sliderValue}
                    coach={item.coach}
                    intensity={item.intensity}
                    image={item.image}
                  />
                </>
              );
            }}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      )}
    </>
  );
};

export default Downloads;

const styles = StyleSheet.create({});
