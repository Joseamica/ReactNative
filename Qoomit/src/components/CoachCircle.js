import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const CoachCircle = (props) => {
  const [igUsername, setIgUsername] = useState('hardCoded_johnDoe');
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={() =>
        navigation.navigate('CoachProfileScreen', {
          name: props.coach,
          image: props.imageUri,
          igUsername: igUsername,
        })
      }>
      <Image style={styles.circle} source={props.imageUri} />
      <Text style={styles.text}>{props.coach}</Text>
    </TouchableOpacity>
  );
};

export default CoachCircle;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flexGrow: 1,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: 'black',
    marginTop: 10,
  },
  text: {
    marginTop: 10,
  },
});
