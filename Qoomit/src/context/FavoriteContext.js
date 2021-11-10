import React, { createContext, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default FavoriteContext = createContext();

export const DownloadProvider = ({ children }) => {
  const [favoriteState, setFavoriteState] = useState(null);

  const favoriteStateHandler = () => {
    setFavoriteState(!favoriteState);
    console.log(favoriteState);
  };

  return (
    <FavoriteContext.Provider value={favoriteStateHandler}>
      {children}
    </FavoriteContext.Provider>
  );
};

const styles = StyleSheet.create({});
