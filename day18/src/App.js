// @flow
import React from 'react';
import {Text, View, ScrollView, FlatList} from 'react-native';

import styles from './styles/stopwatch';

import CircleButton from './component/CircleButton';

type Lap = {
  id: number,
  duration: string,
};
type Props = {};
type State = {
  startTime: ?number,
  currentTime: number,
  timerText: string,
  isRunning: boolean,
  laps: Array<Lap>,
};
export default class App extends React.Component<Props, State> {
  state = {
    startTime: null,
    currentTime: Date.now(),
    timerText: '00:00.00',
    isRunning: false,
    laps: [],
  };

  _timerId = null;

  componentWillUnmount = () => {
    if (this._timerId != null) {
      clearTimeout(this._timerId);
    }
  };
  render() {
    let {timerText, isRunning, laps} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>{LABEL_HEADER}</Text>
        </View>
        <View style={styles.timer}>
          <Text style={styles.timerText}>{timerText}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <CircleButton
            label={LABEL_BUTTON_LAP}
            extraStyle={[styles.btnLap]}
            pressFunction={this._onLap}
          />
          {isRunning ? (
            <CircleButton
              label={LABEL_BUTTON_STOP}
              extraStyle={[styles.btnStop]}
              pressFunction={this._onStop}
            />
          ) : (
            <CircleButton
              label={LABEL_BUTTON_START}
              extraStyle={[styles.btnStart]}
              pressFunction={this._onStart}
            />
          )}
        </View>
        <View style={styles.lapContainer}>
          <FlatList
            data={laps}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <View
                style={
                  item.id === 1
                    ? [styles.lapItem, styles.lapItemFirst]
                    : styles.lapItem
                }
              >
                <Text style={styles.lapText}>Lap {item.id.toString()}</Text>
                <Text style={styles.lapText}>{item.duration}</Text>
              </View>
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </View>
    );
  }

  _onStart = () => {
    let now = Date.now();
    this.setState({
      startTime: now,
      currentTime: now,
      isRunning: true,
      laps: [],
    });
    this._timerId = setTimeout(this._checkTimer, 33);
  };
  _onStop = () => {
    clearTimeout(this._timerId);
    this._timerId = null;
    let newText = this._calculateCurrentTimer();
    this.setState({
      startTime: null,
      isRunning: false,
      timerText: newText,
    });
  };
  _onLap = () => {
    let {laps, isRunning} = this.state;
    if (isRunning) {
      let newId = 1;
      if (laps.length > 0) {
        newId = laps.length + 1;
      }
      let currentTimer = this._calculateCurrentTimer();
      this.setState({laps: [...laps, {id: newId, duration: currentTimer}]});
    }
  };
  _checkTimer = () => {
    let {isRunning} = this.state;
    if (isRunning != null) {
      let newText = this._calculateCurrentTimer();
      this.setState({
        currentTime: Date.now(),
        timerText: newText,
      });
      this._timerId = setTimeout(this._checkTimer, 30);
    }
  };

  _calculateCurrentTimer = () => {
    let now = Date.now();
    let {startTime} = this.state;
    if (startTime != null) {
      let diff = now - startTime;
      let secDiff = (diff / 1000).toFixed(2);
      let minDiff = Math.floor(secDiff / 60).toString();
      secDiff = (secDiff % 60).toFixed(2).toString();
      return minDiff.padStart(2, '0') + ':' + secDiff.padStart(5, 0);
    }
  };
}

const LABEL_HEADER = 'STOPWATCH';
const LABEL_BUTTON_LAP = 'LAP';
const LABEL_BUTTON_START = 'START';
const LABEL_BUTTON_STOP = 'STOP';
