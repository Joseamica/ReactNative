import React, { createContext, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default DownloadContext = createContext();

export const DownloadProvider = ({ children }) => {
  const [downloadState, setDownloadState] = useState(null);

  const downloadStateHandler = () => {
    setDownloadState(!downloadState);
    console.log(downloadState);
  };

  return (
    <DownloadContext.Provider value={downloadStateHandler}>
      {children}
    </DownloadContext.Provider>
  );
};

const styles = StyleSheet.create({});
