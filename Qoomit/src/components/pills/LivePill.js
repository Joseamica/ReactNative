import Portal from '@burstware/react-native-portal';
import React, {useRef} from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Modalize} from 'react-native-modalize';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../utils/colors';
Ionicons.loadFont();

{
  /* PIC */
}
const LivePill = ({onModalize, onPress}) => {
  const modalizeRef = useRef(null);

  const handleOpen = () => {
    if (modalizeRef.current) {
      modalizeRef.current.open();
    }
  };
  const handleClose = () => {
    if (modalizeRef.current) {
      modalizeRef.current.close();
    }
  };
  return (
    <>
      <TouchableOpacity onPress={handleOpen} activeOpacity={0.8}>
        <View style={styles.container}>
          {/* PIC */}
          <Image
            style={styles.coachPic}
            source={require('../../../assets/images/Pill/fer.jpg')}
          />
          <View style={styles.separator}></View>
          {/* ALL BOTTOM CONTAINER */}

          <View style={styles.infoContainer}>
            {/* TOP */}

            <View style={styles.topInfoContainer}>
              <Text style={styles.textTopContainer}>Starts In: 10:10:10</Text>
              <Text style={styles.textTopContainer}> Intensity • • •</Text>

              <Text style={styles.textTopContainer}>Calories: 354˜</Text>
            </View>
            {/* BOTTOM */}

            <View style={styles.bottomInfoContainer}>
              <View
                style={{
                  flexDirection: 'row',
                  position: 'absolute',
                  left: 10,
                }}>
                <Image
                  source={require('../../../assets/images/Profile/Ellipse-94.png')}
                  style={{left: 10, width: 35, height: 35}}
                />
                <Image
                  source={require('../../../assets/images/Profile/Ellipse-94.png')}
                  style={styles.friendsPic}
                />
                <Image
                  source={require('../../../assets/images/Profile/Ellipse-94.png')}
                  style={{left: -10, width: 35, height: 35}}
                />
              </View>
              {/* ENROLL BUTTON */}

              <TouchableOpacity
                style={{
                  width: 70,
                  height: 30,
                  backgroundColor: colors.PRIMARY_COLOR_DARK,
                  borderRadius: 100,
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'flex-start',
                  right: -100,
                }}>
                <Text style={{color: 'white', fontSize: 12}}>Enroll</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <Portal>
        <Modalize
          ref={modalizeRef}
          snapPoint={10}
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
          <View style={styles.modalView}>
            <TouchableOpacity onPress={handleClose}>
              <Ionicons name="close" size={30} color="#4F8EF7" />
            </TouchableOpacity>
          </View>
        </Modalize>
      </Portal>
    </>
  );
};

export default LivePill;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginVertical: 15,
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'space-around',
    borderRadius: 9,
    backgroundColor: 'white',
    borderColor: '#ECF0F1',
    borderWidth: 1,
    shadowOffset: {width: 0, height: 0},
    shadowColor: colors.PRIMARY_COLOR,
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10,
  },
  coachPic: {
    width: 320,
    height: 200,
    backgroundColor: 'grey',
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    resizeMode: 'stretch',
  },
  separator: {
    width: 320,
    height: 5,
    shadowColor: colors.PRIMARY_COLOR,
  },
  infoContainer: {
    width: 320,
    height: 100,
    flexDirection: 'column',
    backgroundColor: 'transparent',
    justifyContent: 'space-between',
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9,
  },
  topInfoContainer: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',

    flex: 1,
  },
  bottomInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',

    flex: 2,
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  textTopContainer: {
    fontSize: 13,
    color: '#939393',
  },
  friends: {
    alignSelf: 'flex-end',
  },
  friendsPic: {
    width: 35,
    height: 35,
  },
  modalView: {
    ...Platform.select({
      ios: {
        backgroundColor: 'white',
        borderRadius: 10,
        flex: 1,
      },
      android: {
        backgroundColor: 'blue',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      },
    }),
    height: 500,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
