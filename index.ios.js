import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

export default class App extends Component {

  render() {
    return (
      <View>
        <Header text={'Album'} />
        <AlbumList />
      </View>
    );
  }
}


AppRegistry.registerComponent('albums', () => App);
