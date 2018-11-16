import createCallLog from '../createCallLog.js';

it('should add and return a call', () => {
  let callLog = createCallLog();
  callLog.add('INCOMING', '+17775551212');
  let logList = callLog.getRecent();
  expect(logList.length).toEqual(1);
  let recentFiltered = logList.map((call) => {
    let {type, phoneNumber} = call;
    return {type, phoneNumber};
  });
  expect(recentFiltered).toEqual([
    {
      type: 'INCOMING',
      phoneNumber: '+17775551212',
    },
  ]);
});

it('should add and return a call', () => {
  let callLog = createCallLog();
  callLog.add('INCOMING', '+17775551212');
  callLog.add('OUTGOING', '+17775551213');
  let logList = callLog.getRecent();
  expect(logList.length).toEqual(2);
  let recentFiltered = logList.map((call) => {
    let {type, phoneNumber} = call;
    return {type, phoneNumber};
  });
  expect(recentFiltered).toEqual([
    {
      type: 'OUTGOING',
      phoneNumber: '+17775551213',
    },
    {
      type: 'INCOMING',
      phoneNumber: '+17775551212',
    },
  ]);
});
