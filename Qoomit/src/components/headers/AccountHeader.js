import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../../utils/colors';
Ionicons.loadFont();
Feather.loadFont();
AntDesign.loadFont();
Entypo.loadFont();
MaterialIcons.loadFont();
MaterialCommunityIcons.loadFont();

const AccountHeader = ({settings, username}) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableOpacity onPress={settings}>
          <Ionicons
            name="chevron-back"
            size={22}
            color={colors.FONT_COLOR_PRINCIPAL}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{username}</Text>
        <TouchableOpacity>
          <Feather name="edit" size={22} color={colors.FONT_COLOR_PRINCIPAL} />
        </TouchableOpacity>
      </View>

      <View style={styles.generalInfo}>
        <Image
          source={require('../../../assets/images/Profile/Ellipse-94.png')}
          style={styles.profilePic}
        />
        <Text style={styles.usernameText}>John Doe Doe</Text>
        <View style={styles.flagSexAge}>
          <Image
            source={require('../../../assets/images/Profile/twemoji_flag-for-flag-mexico.png')}
          />
          <Text
            style={{
              marginHorizontal: 10,
              fontSize: 15,
              fontWeight: '400',
              marginBottom: 20,
            }}>
            Monterrey • Male • 20s
          </Text>
        </View>

        <View style={{flexDirection: 'row', marginVertical: 10}}>
          <Image
            source={require('../../../assets/images/Profile/bolt.png')}
            style={{width: 50, height: 50, marginRight: 10}}
          />

          <View style={{flexDirection: 'column'}}>
            <Text style={{fontSize: 20}}>15</Text>
            <Text style={{fontSize: 15}}>QOOMITS</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AccountHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    height: 50,
  },
  headerTitle: {
    fontWeight: 'bold',
    letterSpacing: 1,
    color: colors.FONT_COLOR_PRINCIPAL,
  },
  clearButton: {
    color: '#4481EB',
    fontWeight: 'bold',
  },
  generalInfo: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  profilePic: {
    height: 100,
    width: 100,
    backgroundColor: 'black',
    borderRadius: 100,
    alignSelf: 'center',
    marginVertical: 10,
  },
  usernameText: {
    marginVertical: 10,
    fontWeight: 'bold',
    fontSize: 22,
  },
  flagSexAge: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
