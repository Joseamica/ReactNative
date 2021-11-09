import {Dimensions, StyleSheet} from 'react-native';
import colors from './colors';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  createButton: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 60,
    width: 320,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    paddingTop: 30,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  generalText: {
    fontSize: 18,
    color: 'black',
  },
  workoutHeader: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: {width: 0, height: 5},
    textShadowRadius: 10,
  },
  flexOne: {
    flex: 1,
  },
  backgroundImage: {
    backgroundColor: colors.PRIMARY_COLOR_DARK,
    height: height * 0.2,
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: 'absolute',
    zIndex: -1,
  },
  backButtonContainer: {
    backgroundColor: 'white',
    top: 100,
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    marginLeft: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 15,
  },
});
