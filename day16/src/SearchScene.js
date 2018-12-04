// @flow
import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import styles from './styles';
import ImageBox from './ImageBox';

type Props = {
  navigateScene: ('HOME', 'SEARCH', 'FAV') => {},
  starImage: () => {},
  favorites: Map<string, string>,
};
type State = {
  searchText: string,
  imageList: Map<string, string>,
};
export default class SearchScene extends Component<State, Props> {
  state = {
    searchText: '',
    imageList: new Map(),
  };

  render() {
    let {searchText, imageList} = this.state;
    let {navigateScene, favorites, starImage} = this.props;
    return (
      <View style={styles.searchScene}>
        <View style={styles.searchBar}>
          <TextInput
            style={styles.searchInput}
            value={searchText}
            onChangeText={(text) => this._onChangeQuery(text)}
          />
          <TouchableWithoutFeedback onPress={() => this._onSearch()}>
            <View style={styles.searchButton}>
              <Text style={styles.navButtonText}>Search Picture!</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <ScrollView style={{maxHeight: 625, paddingTop: 5}}>
          <View style={styles.imagesContainer}>
            {Array.from(imageList, ([uri, desc]) => {
              return (
                <ImageBox
                  uri={uri}
                  desc={desc}
                  key={uri}
                  starImage={starImage}
                  favorites={favorites}
                />
              );
            })}
          </View>
        </ScrollView>
        <TouchableWithoutFeedback onPress={() => navigateScene('HOME')}>
          <View style={styles.backButton}>
            <Text style={styles.navButtonText}>Back</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }

  _onChangeQuery = (text) => {
    this.setState({searchText: text});
  };

  _onSearch = async () => {
    let url = `https://api.imgur.com/3/gallery/search/?q_all=${
      this.state.searchText
    }`;
    let data = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Client-ID 57788babe7ab839',
      },
    }).then((res) => res.json());

    let images = new Map();
    if (data) {
      for (let item of data.data) {
        if (item.is_album === false) {
          images.set(item.link, item.desc);
        }
      }
      this.setState({
        imageList: images,
      });
    }
  };
}
