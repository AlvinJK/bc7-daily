// @flow
import parseSchedule from '../parseSchedule';

it('should return new object', () => {
  let personObject = {
    alvin: {thursday: true, friday: false},
    bagus: {thursday: true, friday: true},
    jessica: {thursday: true, friday: true},
    willy: {thursday: false, friday: true},
    filbert: {thursday: true, friday: true},
    juan: {thursday: false, friday: true},
    sandro: {thursday: false, friday: true},
  };
  let newObject = parseSchedule(personObject);
  expect(newObject).toEqual({
    thursday: ['alvin', 'bagus', 'jessica', 'filbert'],
    friday: ['bagus', 'jessica', 'willy', 'filbert', 'juan', 'sandro'],
  });
});

it('should return new object again', () => {
  let personObject = {
    alvin: {wednesday: true, thursday: true, friday: false},
    bagus: {thursday: true, friday: true},
    jessica: {thursday: true, friday: true},
    willy: {thursday: false, friday: true},
    filbert: {thursday: true, friday: true},
    juan: {thursday: false, friday: true},
    sandro: {thursday: false, friday: true},
  };
  let newObject = parseSchedule(personObject);
  expect(newObject).toEqual({
    wednesday: ['alvin'],
    thursday: ['alvin', 'bagus', 'jessica', 'filbert'],
    friday: ['bagus', 'jessica', 'willy', 'filbert', 'juan', 'sandro'],
  });
});
