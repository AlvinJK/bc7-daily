// @flow
import React from 'react';
import {Text, TouchableWithoutFeedback, View, Image} from 'react-native';
import styles from './styles';

type Props = {
  uri: string,
  desc: string,
  starImage: () => {},
  favorites: Map<string, string>,
};

export default function ImageBox(props: Props) {
  let {uri, desc, starImage, favorites} = props;
  return (
    <View style={styles.imageBlock}>
      <TouchableWithoutFeedback onPress={() => starImage(uri)}>
        <View style={styles.imageBox}>
          <Image source={{uri}} style={styles.image} />
          {favorites.has(uri) ? <View style={styles.starred} /> : null}
        </View>
      </TouchableWithoutFeedback>
      <Text style={{width: 200}}>{desc}</Text>
    </View>
  );
}
