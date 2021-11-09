import React from 'react';
import { StyleSheet, View } from 'react-native';

const IntensityBall = (props) => {
  const { emptyBall, ball } = styles;

  //TODO: backgroundColor overrides the emptyBall and ball styles
  return (
    <>
      {props.intensity === null ? (
        <View style={styles.container}>
          <View
            style={[emptyBall, { backgroundColor: props.emptyBackgroundColor }]}
          />
          <View
            style={[emptyBall, { backgroundColor: props.emptyBackgroundColor }]}
          />
          <View
            style={[emptyBall, { backgroundColor: props.emptyBackgroundColor }]}
          />
        </View>
      ) : null}
      {props.intensity === 'Beginner' ? (
        <View style={styles.container}>
          <View
            style={[ball, { backgroundColor: props.fullBackgroundColor }]}
          />
          <View
            style={[emptyBall, { backgroundColor: props.emptyBackgroundColor }]}
          />
          <View
            style={[emptyBall, { backgroundColor: props.emptyBackgroundColor }]}
          />
        </View>
      ) : null}

      {props.intensity === 'Intermediate' ? (
        <View style={styles.container}>
          <View
            style={[ball, { backgroundColor: props.fullBackgroundColor }]}
          />
          <View
            style={[ball, { backgroundColor: props.fullBackgroundColor }]}
          />
          <View
            style={[emptyBall, { backgroundColor: props.emptyBackgroundColor }]}
          />
        </View>
      ) : null}

      {props.intensity === 'Advanced' ? (
        <View style={styles.container}>
          <View
            style={[ball, { backgroundColor: props.fullBackgroundColor }]}
          />
          <View
            style={[ball, { backgroundColor: props.fullBackgroundColor }]}
          />
          <View
            style={[ball, { backgroundColor: props.fullBackgroundColor }]}
          />
        </View>
      ) : null}
    </>
  );
};

export default IntensityBall;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  ball: {
    width: 7,
    height: 7,
    backgroundColor: 'grey',
    borderRadius: 100,
    marginLeft: 4,
    marginBottom: 2,
  },
  emptyBall: {
    width: 7,
    height: 7,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 100,
    marginLeft: 4,
    marginBottom: 2,
  },
});
