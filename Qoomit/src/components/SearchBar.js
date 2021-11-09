import React, {useState} from 'react';
import {Platform, SafeAreaView, StyleSheet, View} from 'react-native';
import {SearchBar} from 'react-native-elements';

const SearchBarComponent = ({height}) => {
  const [search, setSearch] = useState('');
  return {
    ...(Platform.OS == 'android' ? (
      <SafeAreaView>
        <View style={{width: 250, backgroundColor: 'white'}}>
          <SearchBar
            platform="android"
            //onFocus={searchBarFocus}
            onCancel={() => console.log('Cancel')}
            inputStyle={{height: 20}}
            containerStyle={{flex: 1, borderRadius: 100}}
            onChangeText={(s) => setSearch(s)}
            placeholder={'Search'}
            value={search}
            round={true}
          />
        </View>
      </SafeAreaView>
    ) : (
      <SafeAreaView>
        <View style={{width: 250}}>
          <SearchBar
            platform="ios"
            //onFocus={searchBarFocus}
            onCancel={() => console.log('Cancel')}
            containerStyle={{height: 20}}
            onChangeText={(s) => setSearch(s)}
            placeholder={'Search'}
            value={search}
            round={true}
          />
        </View>
      </SafeAreaView>
    )),
  };
};

export default SearchBarComponent;

const styles = StyleSheet.create({});
