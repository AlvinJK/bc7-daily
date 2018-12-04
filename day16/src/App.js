// @flow
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import HomeScene from './HomeScene';
import SearchScene from './SearchScene';
import FavoriteScene from './FavoriteScene';

type Props = {};
type State = {
  currentPage: 'HOME' | 'SEARCH' | 'FAV',
  favImages: Map<string, string>,
};
export default class App extends Component<Props, State> {
  state = {
    currentPage: 'HOME',
    favImages: new Set(),
  };

  render() {
    let {currentPage, favImages} = this.state;
    let content = '';
    switch (currentPage) {
      case 'SEARCH':
        content = (
          <SearchScene
            navigateScene={this._navigateScene}
            favorites={favImages}
            starImage={this._starImage}
          />
        );
        break;
      case 'FAV':
        content = (
          <FavoriteScene
            navigateScene={this._navigateScene}
            favorites={favImages}
            starImage={this._starImage}
          />
        );
        break;
      case 'HOME':
      default:
        content = <HomeScene navigateScene={this._navigateScene} />;
        break;
    }

    return <View style={styles.mainContainer}>{content}</View>;
  }

  _navigateScene = (target) => {
    this.setState({currentPage: target});
  };

  _starImage = (url, desc) => {
    let {favImages} = this.state;
    let newMap = new Map(favImages);
    newMap.has(url) ? newMap.delete(url) : newMap.set(url, desc);
    this.setState({
      favImages: newMap,
    });
  };
}
