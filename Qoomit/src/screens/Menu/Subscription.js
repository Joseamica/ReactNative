import { Container, Header, Tab, Tabs } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';

const Subscription = () => {
  return (
    <Container>
      <Header hasTabs />
      <Tabs>
        <Tab heading="Tab1">
          <Tab1 />
        </Tab>
        <Tab heading="Tab2">
          <Tab2 />
        </Tab>
        <Tab heading="Tab3">
          <Tab3 />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Subscription;

const styles = StyleSheet.create({});
