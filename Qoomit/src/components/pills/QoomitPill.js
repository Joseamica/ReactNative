import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import DatePill from './DatePill';
import WorkoutPill from './WorkoutPill';

const QoomitPill = () => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8}>
      <DatePill />
      <WorkoutPill onFriends={false} />
    </TouchableOpacity>
  );
};

export default QoomitPill;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginLeft: 10,
  },
});
