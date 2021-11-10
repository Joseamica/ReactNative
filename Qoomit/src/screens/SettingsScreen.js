import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Divider, List} from 'react-native-paper';
import NavigationHeader from '../components/headers/NavigationHeader';

const SettingsScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationHeader title={'Settings'} />
      <List.Section>
        <List.Subheader>Some title</List.Subheader>
        <List.Item
          title="First Item"
          left={() => <List.Icon icon="folder" />}
        />
        <List.Item
          title="Second Item"
          left={() => <List.Icon color="#000" icon="folder" />}
        />
      </List.Section>
      <Divider />
      <List.Section>
        <List.Subheader>Some title</List.Subheader>
        <List.Item
          title="First Item"
          left={() => <List.Icon icon="folder" />}
        />
        <List.Item
          title="Second Item"
          left={() => <List.Icon color="#000" icon="folder" />}
        />
      </List.Section>
    </SafeAreaView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({});
