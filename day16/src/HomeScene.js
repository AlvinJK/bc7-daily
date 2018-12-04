// @flow
import React from 'react';
import {Text, View, TouchableWithoutFeedback} from 'react-native';

import styles from './styles';
type Props = {
  navigateScene: ('HOME' | 'SEARCH' | 'FAV') => {},
};

export default function HomeScene(props: Props) {
  let {navigateScene} = props;

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => navigateScene('SEARCH')}>
        <View style={styles.navButton}>
          <Text style={styles.navButtonText}>Search Picture!</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => navigateScene('FAV')}>
        <View style={styles.navButton}>
          <Text style={styles.navButtonText}>Favorite Picture!</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}
