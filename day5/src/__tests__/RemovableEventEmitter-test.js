// @flow
import {RemovableEventEmitter} from '../RemovableEventEmitter';

it('should removeListenerByID', () => {
  let emitter = new RemovableEventEmitter();
  let count = 0;

  let id: number = emitter.addListener('user_login', () => {
    count += 1;
  });
  emitter.emit('user_login');
  expect(count).toEqual(1);
  emitter.removeListenerByID(id);
  emitter.emit('user_login');
  expect(count).toEqual(1);
});
