// @flow
type CallType = 'INCOMING' | 'OUTGOING' | 'MISSED';

type Call = {
  type: CallType,
  phoneNumber: string,
  timestamp: string,
};

type TimestampFunction = () => string;

let defaultCreateTimestamp = () => new Date().toISOString();
function createCallLog(
  createTimestamp: TimestampFunction = defaultCreateTimestamp,
) {
  if (createTimestamp == null) {
    createTimestamp = () => new Date().toISOString();
  }
  let callLog: Array<Call> = [];

  return {
    add: (type: CallType, phoneNumber: string) => {
      callLog.push({
        type,
        phoneNumber,
        timestamp: createTimestamp(),
      });
    },
    getRecent: (maxNum: number): Array<Call> => {
      return callLog.slice(0, maxNum);
    },
  };
}

export default createCallLog;

let tester = (): boolean => {
  return true;
};
