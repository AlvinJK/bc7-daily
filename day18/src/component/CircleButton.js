// @flow
import React from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';

import styles from '../styles/stopwatch';

type Props = {
  label: string,
  extraStyle: ?Array<number>,
  pressFunction: () => void,
};
export default function CircleButton(props: Props) {
  let {label, extraStyle, pressFunction} = props;
  let componentStyle = [styles.circleButton];
  let outerStyle = [styles.outerCircleButton];
  if (extraStyle != null) {
    componentStyle = [styles.circleButton, ...extraStyle];
    outerStyle = [styles.outerCircleButton, ...extraStyle];
  }
  return (
    <TouchableWithoutFeedback onPress={() => pressFunction()}>
      <View style={outerStyle}>
        <View style={componentStyle}>
          <Text>{label}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
