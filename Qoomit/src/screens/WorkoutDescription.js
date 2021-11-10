import React, { useState, useContext } from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Divider } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IntensityBall from '../components/icons/IntensityBall';
import DownloadContext from '../context/DownloadContext';
import colors from '../utils/colors';
import s from '../utils/styles';
import FavoriteContext from '../context/FavoriteContext';

Ionicons.loadFont();
Feather.loadFont();
AntDesign.loadFont();
Entypo.loadFont();
MaterialIcons.loadFont();
MaterialCommunityIcons.loadFont();

const { width, height } = Dimensions.get('window');

const WorkoutDescription = ({ route, navigation, name }) => {
  //Context

  const [more, setMore] = useState(false);
  const [button, setButton] = useState('See more...');
  const [favorite, setFavorite] = useState(FavoriteContext);
  const [downloads, setDownloads] = useState(DownloadContext);

  const toggle = () => {
    setMore(!more);
    more ? setButton('See more...') : setButton('See less...');
  };

  const favoriteStateHandler = () => {
    setFavorite(!favorite);
  };

  const downloadStateHandler = () => {
    setDownloads(!downloads);
  };

  /*   React.useEffect(() => {
    setFavorite(null);
    setDownloads(null);
  }, [favorite,]); */

  const { type, exercise, time, image, coach, intensity, color } = route.params;
  return (
    <>
      {/* ------------TOP CONTAINER------------- */}

      <ImageBackground
        style={styles.imageBackground}
        source={image}
        imageStyle={{ resizeMode: 'cover' }}>
        <View
          style={{
            justifyContent: 'flex-start',
            backgroundColor: 'transparent',
            flex: 1,
            marginTop: 20,
          }}>
          <View style={styles.topScreen}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              activeOpacity={0.8}
              style={{
                paddingTop: 30,
                flex: 1,
              }}
              activeOpacity={0.8}>
              <View
                style={{
                  height: 30,
                  width: 30,
                  backgroundColor: 'white',
                  borderRadius: 100,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Ionicons name="arrow-back" size={20} color="black" />
              </View>
            </TouchableOpacity>

            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={s.workoutHeader}>
                {exercise} • {type}
              </Text>
              <Image style={styles.smallImage} source={image} />
            </View>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('CoachProfileScreen', {
                  name: name,
                })
              }>
              <Text
                style={{
                  fontWeight: '700',
                  fontSize: 18,
                  color: 'white',
                  bottom: 20,
                }}>
                with {coach}
              </Text>
            </TouchableOpacity>

            <Text
              style={{
                fontWeight: '500',
                fontSize: 18,
                color: 'white',
                paddingBottom: 15,
              }}>
              {time} min |
              <IntensityBall
                intensity={intensity}
                fullBackgroundColor="white"
              />
            </Text>
          </View>
        </View>
      </ImageBackground>
      {/* ------------SEPARATOR------------- */}
      <View style={styles.separator} />

      {/* ------------BOTTOM CONTAINER------------- */}
      <View style={styles.buttonsContainer}>
        <View>
          <TouchableOpacity style={styles.button} activeOpacity={0.8}>
            <Feather name="share" size={25} />
            <Text>Share</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            onPress={downloadStateHandler}>
            {downloads ? (
              <Feather name="download-cloud" size={25} color="red" />
            ) : (
              <Feather name="download-cloud" size={25} />
            )}
            <Text>Download</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={favoriteStateHandler}
            activeOpacity={0.8}>
            {favorite ? (
              <Feather name={'heart'} size={25} color="red" />
            ) : (
              <Feather name={'heart'} size={25} />
            )}
            <Text>Favorite</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.button} activeOpacity={0.8}>
            <Feather name="user-plus" size={25} />
            <Text>Invite</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Divider />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}>
        <Text style={styles.titles}>Overview</Text>

        <Text style={styles.infoText} numberOfLines={more ? 10 : 2}>
          The question is, what did the archbishop find?' The Mouse gave a
          sudden leap out of it, and finding it very nice, (it had, in fact, a
          sort of mixed flavour of cherry-tart, custard, pine-apple, roast
          turkey, toffee, and hot buttered toast,) she very seldom followed it),
          and sometimes she scolded herself so severely as to bring tears into
          her eyes; and once she remembered trying to box her own mind (as well
          as she could, for the garden!' and she ran with all her knowledge of
          history, Alice had been all the way I want to go!
        </Text>
        <TouchableOpacity style={{ fontSize: 19, flex: 1 }} onPress={toggle}>
          <Text
            style={{
              marginLeft: 10,
              marginBottom: 5,
              color: colors.DISABLED_COLOR,
              fontSize: 15,
              fontWeight: '500',
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            {button}
          </Text>
        </TouchableOpacity>
        <Divider />
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.titles}>Equipment</Text>
          <Text>dumbells, bars, machines</Text>
        </View>
        <Divider />

        <Divider />
        <View
          style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
          <Text style={styles.titles}>Preview</Text>
          <View style={styles.previewBoxAndText}>
            <View style={styles.previewBox} />
            <Text style={styles.previewBoxText}>Jumping Jacks</Text>
          </View>
          <View style={styles.previewBoxAndText}>
            <View style={styles.previewBox} />
            <Text style={styles.previewBoxText}>Burpess</Text>
          </View>
          <View style={styles.previewBoxAndText}>
            <View style={styles.previewBox} />
            <Text style={styles.previewBoxText}>Push Ups</Text>
          </View>
        </View>
        <Divider />
        <Text style={styles.titles}>Creator</Text>
      </ScrollView>
    </>
  );
};

export default WorkoutDescription;

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    flexGrow: 1,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'flex-end',
  },
  topScreen: {
    flexDirection: 'column',
    flex: 1,
    marginLeft: 10,
  },
  separator: {
    height: height * 0.01,
    width: '100%',
    backgroundColor: colors.PRIMARY_COLOR_DARK,
  },
  scrollView: {
    flex: 1,
    flexDirection: 'column',
    flexGrow: 1,
    width: '100%',
    height: 100,
    backgroundColor: 'white',
  },
  contentContainer: {
    paddingBottom: 150,
    backgroundColor: 'white',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 10,
    backgroundColor: 'white',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  titles: {
    margin: 10,
    fontSize: 16,
    fontWeight: '600',
  },
  smallImage: {
    height: 50,
    width: 50,
    borderRadius: 100,
    marginRight: '5%',
  },
  infoText: {
    fontSize: 14,
    padding: 10,
  },
  previewBox: {
    height: 70,
    width: 70,
    backgroundColor: colors.DISABLED_COLOR,
    borderRadius: 10,
    margin: 10,
  },
  previewBoxAndText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  previewBoxText: {
    fontSize: 15,
    color: colors.FONT_COLOR_GRAY,
  },
});
