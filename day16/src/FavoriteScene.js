// @flow
import React from 'react';
import {ScrollView, Text, View, TouchableWithoutFeedback} from 'react-native';
import styles from './styles';
import ImageBox from './ImageBox';

type Props = {
  navigateScene: ('HOME', 'SEARCH', 'FAV') => {},
  favorites: Map<string, string>,
};
export default function FavoriteScene(props: Props) {
  let {navigateScene, favorites, starImage} = props;
  return (
    <View style={styles.favoriteScene}>
      <ScrollView style={{maxHeight: 625, paddingTop: 5}}>
        <View style={styles.imagesContainer}>
          {Array.from(favorites, ([uri, desc]) => {
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
