import React, { Component } from 'react';
import { View, Text } from 'react-native';
import AlbumDetail from './AlbumDetail'

export default class AlbumList extends Component {

  state = {
    albums: []
  }

  componentWillMount() {
    const url = 'https://rallycoding.herokuapp.com/api/music_albums'
    fetch(url).then(resp => resp.json()).then(data => this.setState({ albums: data }))
  }

  renderAlbums() {
    return this.state.albums.map(album => <AlbumDetail album={album} key={album.title}/> )
  }

  render() {
    return (
      <View>
        {this.renderAlbums()}
      </View>
      );
  }
}
