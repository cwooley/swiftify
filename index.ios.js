import React, { Component } from 'react';
import { Text, AppRegistry } from 'react-native';
import Header from './src/components/Header'

export default class App extends Component {

  render() {
    return (
      <Header />
    );
  }
}


AppRegistry.registerComponent('albums', () => App);
