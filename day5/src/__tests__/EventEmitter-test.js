// @flow
import {EventEmitter} from '../EventEmitter';

it('should log every string returned', () => {
  let evt: EventEmitter = new EventEmitter();

  let fn1 = () => {
    return 'I do things in production only';
  };
  evt.addListener('test', fn1);
  evt.addListener('test', () => {
    return 'development is for the faint of heart';
  });
  evt.addListener('real', () => {
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
  evt.removeListener('test', fn1);

  evt.emit('test');
  expect(evt.outputLog).toEqual([
    'I do things in production only',
    'development is for the faint of heart',
    'now you are talking my language',
    'development is for the faint of heart',
  ]);
});
