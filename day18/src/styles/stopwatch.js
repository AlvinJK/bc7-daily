// @flow
import {StyleSheet} from 'react-native';
import {Constants} from 'expo';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 0,
    backgroundColor: '#000',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#000',
  },
  headerText: {
    color: '#FFF',
    fontSize: 24,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  timer: {
    backgroundColor: '#000',
    flex: 6,
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerText: {
    color: '#FFF',
    fontSize: 72,
  },
  buttonContainer: {
    flex: 2,
    backgroundColor: '#000',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  outerCircleButton: {
    width: 86,
    height: 86,
    borderRadius: 43,
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#000',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnLap: {
    backgroundColor: '#CCC',
  },
  btnStart: {
    backgroundColor: '#0C0',
  },
  btnStop: {
    backgroundColor: '#C00',
  },
  lapContainer: {
    flex: 5,
    backgroundColor: '#000',
    padding: 0,
  },
  lapItem: {
    borderColor: '#444',
    borderBottomWidth: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 5,
  },
  lapItemFirst: {
    borderTopWidth: 1,
  },
  lapText: {
    fontSize: 16,
    color: '#FFF',
    marginVertical: 4,
  },
});
