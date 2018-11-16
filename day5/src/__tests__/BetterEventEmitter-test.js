// @flow
import {BetterEventEmitter} from '../BetterEventEmitter';
import type {Subscription} from '../BetterEventEmitter';
it('should log every string returned', () => {
  let evt = new BetterEventEmitter();

  let listener1 = evt.addListener('test', () => {
    return 'I do things in production only';
  });
  let listener2 = evt.addListener('test', () => {
    return 'development is for the faint of heart';
  });
  let listener3 = evt.addListener('real', () => {
    return 'now you are talking my language';
  });

  evt.emit('test');
  expect(evt.outputLog).toEqual([
    'I do things in production only',
    'development is for the faint of heart',
  ]);

  evt.emit('fake_event');
  expect(evt.outputLog).toEqual([
    'I do things in production only',
    'development is for the faint of heart',
  ]);

  evt.emit('real');
  expect(evt.outputLog).toEqual([
    'I do things in production only',
    'development is for the faint of heart',
    'now you are talking my language',
  ]);
  listener1.unsubscribe();
  evt.emit('test');
  expect(evt.outputLog).toEqual([
    'I do things in production only',
    'development is for the faint of heart',
    'now you are talking my language',
    'development is for the faint of heart',
  ]);
});
