function createCallLog() {
  let callLog = [];
  return {
    add: (type, phoneNumber) => {
      callLog.push({type, phoneNumber});
    },
    getRecent: () => {
      let recentLog = [];
      for (let i = callLog.length - 1; i >= 0; i--) {
        recentLog.push(callLog[i]);
      }
      return recentLog;
    },
  };
}

export default createCallLog;
