import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';

const TestContext = React.createContext();
export const TestContext2 = React.createContext({
  title: 'u2',
  artist: 'Artist',
  genre: 'Genre',
});

const Loader = () => {
  return <ActivityIndicator />;
};

export const TestProvider = ({ children }) => {
  const [state, useState] = React.useState(false);
  return (
    <TestContext.Provider value={Loader()}>{children}</TestContext.Provider>
  );
};

export default TestContext;
const styles = StyleSheet.create({});
