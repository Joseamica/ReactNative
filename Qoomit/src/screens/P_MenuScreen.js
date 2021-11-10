import React, { useContext, useState } from 'react';
import { ScrollView, StyleSheet, Switch, Text } from 'react-native';
import { Divider, List } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../utils/colors';
import firebase from '../utils/firebase';

Feather.loadFont();
MaterialCommunityIcons.loadFont();
MaterialIcons.loadFont();
AntDesign.loadFont();

const MenuScreen = (props) => {

  console.log(val);

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <ScrollView style={{ flex: 1, marginHorizontal: 10, marginBottom: 100 }}>
      <Text style={styles.title}>Account</Text>
      <List.Section style={styles.listSection}>
        <List.Item
          left={({ color, size }) => (
            <Feather
              name="user"
              color={color}
              size={20}
              style={{ marginTop: 5 }}
            />
          )}
          right={({ color, size }) => (
            <MaterialCommunityIcons
              name="chevron-right"
              color={color}
              size={25}
            />
          )}
          title="Edit Profile"
          onPress={() => {
            props.navigation.navigate('EditProfile');
          }}
        />
        <Divider />
        <List.Item
          left={({ color, size }) => (
            <AntDesign
              name="book"
              color={color}
              size={20}
              style={{ marginTop: 5 }}
            />
          )}
          right={({ color, size }) => (
            <MaterialCommunityIcons
              name="chevron-right"
              color={color}
              size={25}
            />
          )}
          title="Edit Plan"
          onPress={() => {
            props.navigation.navigate('EditPlan');
          }}
        />
        <Divider />
        <List.Item
          left={({ color, size }) => (
            <Feather
              name="key"
              color={color}
              size={20}
              style={{ marginTop: 5 }}
            />
          )}
          right={({ color, size }) => (
            <MaterialCommunityIcons
              name="chevron-right"
              color={color}
              size={25}
            />
          )}
          title="Subscription"
          onPress={() => {
            props.navigation.navigate('Subscription');
          }}
        />
        <Divider />

        <List.Item
          left={({ color, size }) => (
            <Feather
              name="settings"
              color={color}
              size={20}
              style={{ marginTop: 5 }}
            />
          )}
          right={({ color, size }) => (
            <MaterialCommunityIcons
              name="chevron-right"
              color={color}
              size={25}
            />
          )}
          title="Preferences"
          onPress={() => {
            props.navigation.navigate('Preferences');
          }}
        />
      </List.Section>
      <Text style={styles.title}>Connect</Text>
      <List.Section style={styles.listSection}>
        <List.Item
          left={({ color, size }) => (
            <MaterialCommunityIcons
              name="heart-outline"
              color={color}
              size={20}
              style={{ marginTop: 5 }}
            />
          )}
          right={({ color, size }) => (
            <MaterialCommunityIcons
              name="chevron-right"
              color={color}
              size={25}
            />
          )}
          title="Health App"
          onPress={() => {
            props.navigation.navigate('HealthApp');
          }}
        />
        <Divider />
        <List.Item
          left={({ color, size }) => (
            <MaterialCommunityIcons
              name="watch-variant"
              color={color}
              size={20}
              style={{ marginTop: 5 }}
            />
          )}
          right={({ color, size }) => (
            <MaterialCommunityIcons
              name="chevron-right"
              color={color}
              size={25}
            />
          )}
          title="Apple Watch"
          onPress={() => {
            props.navigation.navigate('AppleWatch');
          }}
        />
      </List.Section>
      <Text style={styles.title}>Manage</Text>
      <List.Section style={styles.listSection}>
        <List.Item
          left={({ color, size }) => (
            <MaterialCommunityIcons
              name="cloud-download-outline"
              color={color}
              size={20}
              style={{ marginTop: 5 }}
            />
          )}
          right={({ color, size }) => (
            <MaterialCommunityIcons
              name="chevron-right"
              color={color}
              size={25}
            />
          )}
          title="Downloads"
          onPress={() => {
            props.navigation.navigate('Downloads');
          }}
        />
        <Divider />

        <List.Item
          left={({ color, size }) => (
            <Feather
              name="bell"
              color={color}
              size={20}
              style={{ marginTop: 5 }}
            />
          )}
          right={({ color, size }) => (
            <Switch
              trackColor={{ false: 'grey', true: colors.PRIMARY_COLOR_DARK }}
              thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          )}
          title="Notifications"
        />
      </List.Section>
      <Text style={styles.title}>More</Text>
      <List.Section style={styles.listSection}>
        <List.Item
          left={({ color, size }) => (
            <MaterialCommunityIcons
              name="shield-outline"
              color={color}
              size={20}
              style={{ marginTop: 5 }}
            />
          )}
          right={({ color, size }) => (
            <MaterialCommunityIcons
              name="chevron-right"
              color={color}
              size={25}
            />
          )}
          title="Privacy"
          onPress={() => {
            props.navigation.navigate('Privacy');
          }}
        />
        <Divider />

        <List.Item
          left={({ color, size }) => (
            <MaterialCommunityIcons
              name="help-circle-outline"
              color={color}
              size={20}
              style={{ marginTop: 5 }}
            />
          )}
          right={({ color, size }) => (
            <MaterialCommunityIcons
              name="chevron-right"
              color={color}
              size={25}
            />
          )}
          title="Support"
          onPress={() => {
            props.navigation.navigate('Home');
          }}
        />
        <Divider />
        <List.Item
          left={({ color, size }) => (
            <MaterialCommunityIcons
              name="logout"
              color={color}
              size={20}
              style={{ marginTop: 5 }}
            />
          )}
          right={({ color, size }) => (
            <MaterialCommunityIcons
              name="chevron-right"
              color={color}
              size={25}
            />
          )}
          title="Logout"
          onPress={() => {
            firebase.auth().signOut();
          }}
        />
      </List.Section>
    </ScrollView>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    marginLeft: 5,
  },
  listSection: {
    borderWidth: 3,
    borderColor: colors.BORDER_COLOR,
    borderRadius: 0,
    backgroundColor: colors.BACKGROUND_COLOR,
  },
});
