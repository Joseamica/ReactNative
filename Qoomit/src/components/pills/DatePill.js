import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../../utils/colors';

Feather.loadFont();
MaterialCommunityIcons.loadFont();
MaterialIcons.loadFont();
AntDesign.loadFont();

const DatePill = () => {
  const [check, setCheck] = React.useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>MON 12</Text>
      </View>
      <Text style={styles.hour}>5:00Pm</Text>
      <View style={styles.fillBall}>
        {check ? (
          <MaterialCommunityIcons name="check" color={colors.DISABLED_COLOR} />
        ) : (
          <MaterialCommunityIcons name="close" color={colors.DISABLED_COLOR} />
        )}
      </View>
    </View>
  );
};

export default DatePill;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 93,
    width: 58,
    borderRadius: 9,
    alignSelf: 'center',
    alignItems: 'center',
    shadowOffset: {width: 0, height: 0},
    shadowColor: colors.PRIMARY_COLOR,
    shadowOpacity: 0.2,
    shadowRadius: 9,
    borderColor: colors.BORDER_COLOR,
    borderWidth: 1,
    elevation: 10,
  },
  header: {
    width: '95%',
    height: '25%',
    backgroundColor: 'red',
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hour: {
    marginTop: '10%',
    fontSize: 12,
    color: colors.DISABLED_COLOR,
  },
  headerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 11,
  },
  fillBall: {
    marginTop: '10%',
    height: 22,
    width: 22,
    borderColor: colors.DISABLED_COLOR,
    borderRadius: 100,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
