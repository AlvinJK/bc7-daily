import createCallLog from '../createCallLog.js';

let checkerTime = '2018-11-13 00:00:00';
let deterministicTime = () => checkerTime;
let callLog = createCallLog(deterministicTime);

it('should log calls', () => {
  callLog.add('INCOMING', '081384761451');
  callLog.add('OUTGOING', '081384761452');
  expect(callLog.getRecent(1)).toEqual([
    {
      type: 'INCOMING',
      phoneNumber: '081384761451',
      timestamp: checkerTime,
    },
  ]);
  expect(callLog.getRecent(2)).toEqual([
    {
      type: 'INCOMING',
      phoneNumber: '081384761451',
      timestamp: checkerTime,
    },
    {
      type: 'OUTGOING',
      phoneNumber: '081384761452',
      timestamp: checkerTime,
    },
  ]);

  callLog.add('MISSED', 'secret number');
  expect(Array.isArray(callLog.getRecent(10))).toBe(true);
  expect(callLog.getRecent(10)).toEqual([
    {
      type: 'INCOMING',
      phoneNumber: '081384761451',
      timestamp: checkerTime,
    },
    {
      type: 'OUTGOING',
      phoneNumber: '081384761452',
      timestamp: checkerTime,
    },
    {
      type: 'MISSED',
      phoneNumber: 'secret number',
      timestamp: checkerTime,
    },
  ]);
});
