import React from 'react';
import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import BlockCategories from '../components/BlockCategories';
import CoachCircle from '../components/CoachCircle';
import HomeTitleComponent from '../components/HomeTitleComponent';
import LivePill from '../components/pills/LivePill';
import QoomitPill from '../components/pills/QoomitPill';
import WorkoutPill from '../components/pills/WorkoutPill';

const HomeScreen = (props) => {
  const {navigation} = props;
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView bounces={false}>
        <StatusBar barStyle="dark-content" />

        {/*  Qoomit */}
        <HomeTitleComponent title="Qoomit" info="3 / 4" disableButton={true} />
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <QoomitPill />
          <QoomitPill />
          <QoomitPill />
        </ScrollView>
        {/* Categories */}
        <HomeTitleComponent title="Categories" disableButton={true} />
        <View style={styles.categories}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <BlockCategories
              source={require('./../../assets/images/yoga.png')}
              title="Yoga"
            />
            <BlockCategories
              source={require('./../../assets/images/cardio.png')}
              title="Cardio"
            />
            <BlockCategories
              source={require('./../../assets/images/dance.png')}
              title="Dance"
            />
            <BlockCategories
              source={require('./../../assets/images/stretch.png')}
              title="Stretch"
            />
            <BlockCategories
              source={require('./../../assets/images/meditation.png')}
              title="Meditation"
            />
            <BlockCategories
              source={require('./../../assets/images/yoga.png')}
              title="Stretch"
            />
          </ScrollView>
        </View>

        {/* Featured */}
        <HomeTitleComponent
          title="Featured"
          info="See All"
          disableButton={false}
          onPress={() => navigation.navigate('FeaturedWorkoutScreen')}
        />

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <WorkoutPill
            image={require('./../../assets/images/JoseA.jpg')}
            exercise="Muscle"
            type="Chest and Triceps"
            coach="Jose A."
          />
          <WorkoutPill
            image={require('./../../assets/images/Pill/fer.jpg')}
            exercise="Muscle"
            type="Chest"
            coach="Jose A."
          />
          <WorkoutPill />
        </ScrollView>

        {/* Live */}
        <HomeTitleComponent
          title="Live Sessions"
          info="See All"
          disableButton={false}
          //TODO: Click on Coaches and show all
          onPress={() => navigation.navigate('LiveSessionScreen')}
        />
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <LivePill />
          <LivePill />
          <LivePill />
        </ScrollView>

        {/* Coaches */}
        <HomeTitleComponent
          title="Coaches"
          info="See All"
          disableButton={false}
          //TODO: Click on Coaches and show all
          onPress={() => navigation.navigate('LiveSessionScreen')}
        />
        <View style={styles.coaches}>
          <CoachCircle
            coach="Fer A."
            imageUri={require('./../../assets/images/Pill/fer.jpg')}
          />
          <CoachCircle
            coach="John R."
            imageUri={require('./../../assets/images/Coach-MarcosH.png')}
          />
          <CoachCircle
            coach="Ari A."
            imageUri={require('./../../assets/images/Coaches/Coach-Yoga1.png')}
          />
          <CoachCircle
            coach="Marco D."
            imageUri={require('./../../assets/images/Coaches/Coach-Marcos2.png')}
          />
          <CoachCircle
            coach="Pam E."
            imageUri={require('./../../assets/images/llano.jpg')}
          />
          <CoachCircle
            coach="Camila E."
            imageUri={require('./../../assets/images/Coaches/Coach-Fer2.png')}
          />
          <CoachCircle
            coach="Jose A."
            imageUri={require('./../../assets/images/Coach-JoseA.png')}
          />
          <CoachCircle
            coach="Madeline H."
            imageUri={require('./../../assets/images/Coaches/Coach-Escuadra.png')}
          />
        </View>

        {/*  */}
        <View style={{marginBottom: 200}}>
          <Text style={{alignSelf: 'center', marginTop: 40, fontSize: 25}}>
            Feedback
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  categories: {
    marginHorizontal: 10,
    justifyContent: 'space-between',
  },
  coaches: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
});
