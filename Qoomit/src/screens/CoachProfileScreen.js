import React from 'react';
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Divider} from 'react-native-elements';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import BackButtonCircle from '../components/buttons/BackButtonCircle';
import LivePill from '../components/pills/LivePill';
import ShareExample from '../components/Share';
import colors from '../utils/colors';
import s from '../utils/styles';

Ionicons.loadFont();
Feather.loadFont();
AntDesign.loadFont();
Entypo.loadFont();
MaterialIcons.loadFont();
MaterialCommunityIcons.loadFont();
const {width, height} = Dimensions.get('window');

const CoachProfileScreen = ({route, navigation}) => {
  const {name, image, igUsername} = route.params;

  return (
    <View style={{flex: 1, overflow: 'hidden'}}>
      <StatusBar barStyle={'light-content'} />
      {/* ---------- IMAGE BACKGROUND ---------- */}
      <ImageBackground
        source={image}
        style={styles.backgroundImage}
        imageStyle={{
          resizeMode: 'cover',
        }}>
        <View style={styles.backgroundImageContainer}>
          {/* ---------- IMAGE BACKGROUND - TOP ---------- */}
          <View style={{backgroundColor: 'transparent'}}>
            <BackButtonCircle backgroundColor="white" />
          </View>
          {/* ---------- IMAGE BACKGROUND - BOTTOM ---------- */}
          <View
            style={{
              marginLeft: 10,
              backgroundColor: 'transparent',
              justifyContent: 'flex-end',
              marginVertical: height * 0.015,
              flex: 1,
            }}>
            <Text style={s.workoutHeader}>{name}</Text>
            {/*TODO: hardcoded */}
            <View
              style={{
                flexDirection: 'row',
                marginBottom: height * 0.015,
                marginTop: height * 0.005,
              }}>
              <Feather name="instagram" color="white" size={20} />
              <Text
                style={{
                  fontSize: 17,
                  color: 'white',
                  fontWeight: '500',
                  paddingLeft: 5,
                }}>
                {igUsername}
              </Text>
            </View>
            {/* ----------EXERCISES GROUP----------  */}
            <View style={{flexDirection: 'row', marginTop: height * 0.01}}>
              <View style={styles.exerciseTypeBox}>
                <Text style={styles.exerciseTypeText}>Strength</Text>
              </View>
              <View style={styles.exerciseTypeBox}>
                <Text style={styles.exerciseTypeText}>Yoga</Text>
              </View>
              <View style={styles.exerciseTypeBox}>
                <Text style={styles.exerciseTypeText}>Muscle</Text>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
      {/* ---------- BOTTOM PART ---------- */}
      <View style={styles.menuBarIcons}>
        <TouchableOpacity style={styles.iconAndText} activeOpacity={0.8}>
          <Feather name="heart" size={23} />
          <Text style={styles.menuBarText}>Favorite</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconAndText} activeOpacity={0.8}>
          <Feather name="user" size={23} />
          <Text style={styles.menuBarText}>Follow</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconAndText} activeOpacity={0.8}>
          <Feather name="share" size={23} />
          <ShareExample />
        </TouchableOpacity>
      </View>
      <View style={{flex: 2.5, backgroundColor: 'white'}}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}>
          {/* ---------- MENU BAR  ---------- */}
          <Divider />
          <Text style={styles.infoText} numberOfLines={10}>
            The question is, what did the archbishop find?' The Mouse gave a
            sudden leap out of it, and finding it very nice, (it had, in fact, a
            sort of mixed flavour of cherry-tart, custard, pine-apple, roast
            turkey, toffee, and hot buttered toast,) she very seldom followed
            it), and sometimes she scolded herself so severely as to bring tears
            into her eyes; and once she remembered trying to box her own mind
            (as well as she could, for the garden!' and she ran with all her
            knowledge of history, Alice had been all the way I want to go!
          </Text>
          <Divider />
          <Text style={s.headerTitle}>{name} Tips</Text>
          <ScrollView
            horizontal={true}
            style={{flexDirection: 'row'}}
            showsHorizontalScrollIndicator={false}>
            <View style={styles.tipsVideo}>
              <View style={styles.tipsVideoIconContainer}>
                <Feather name="play" size={20} color="white" />
              </View>
            </View>
            <View style={styles.tipsVideo}>
              <View style={styles.tipsVideoIconContainer}>
                <Feather name="play" size={20} color="white" />
              </View>
            </View>
            <View style={styles.tipsVideo}>
              <View style={styles.tipsVideoIconContainer}>
                <Feather name="play" size={20} color="white" />
              </View>
            </View>
          </ScrollView>
          <Text style={s.headerTitle}>{name} Lives</Text>

          <ScrollView
            horizontal={true}
            style={{flexDirection: 'row'}}
            showsHorizontalScrollIndicator={false}>
            <LivePill />
            <LivePill />
          </ScrollView>
        </ScrollView>
      </View>
    </View>
  );
};

export default CoachProfileScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    resizeMode: 'cover',
    flexDirection: 'row',
    flex: 1.5,
  },
  backgroundImageContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    margin: 10,
    paddingTop: Platform.OS === 'android' ? 30 : 50,
  },
  scrollView: {
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 10,
    bottom: 10,
  },
  contentContainer: {
    paddingBottom: Platform.OS === 'android' ? 80 : 100,
  },
  exerciseTypeBox: {
    borderWidth: 3,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    width: 100,
    borderRadius: 10,
  },
  exerciseTypeText: {
    fontSize: 17,
    color: 'white',
    fontWeight: '500',
    padding: 5,
  },
  menuBarIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    padding: 0,
    bottom: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  iconAndText: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuBarText: {
    fontWeight: '600',
    color: colors.FONT_COLOR_PRINCIPAL,
  },
  infoText: {
    fontSize: 16,
    padding: 10,
  },
  tipsVideo: {
    flexDirection: 'row',
    height: 200,
    width: 150,
    backgroundColor: 'grey',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginRight: 10,
  },
  tipsVideoIconContainer: {
    height: 50,
    width: 50,
    borderRadius: 100,
    backgroundColor: colors.PRIMARY_COLOR_DARK,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
