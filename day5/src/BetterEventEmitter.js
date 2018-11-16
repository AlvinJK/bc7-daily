// @flow
type Subscription = {
  unsubscribe: () => void,
};

type StringFunction = () => string;

class BetterEventEmitter {
  callbacks: Map<string, Set<Function>> = new Map();
  outputLog: Array<string> = [];
  addListener(eventName: string, fnToCall: StringFunction): Subscription {
    let eventList = this.callbacks.get(eventName);
    if (eventList == null) {
      eventList = new Set();
      this.callbacks.set(eventName, eventList);
    }
    eventList.add(fnToCall);
    return {
      unsubscribe: () => {
        if (eventList) {
          eventList.delete(fnToCall);
        }
      },
    };
  }

  emit(eventName: string) {
    let eventList = this.callbacks.get(eventName);
    if (eventList) {
      for (let fn: StringFunction of eventList) {
        this.outputLog.push(fn());
      }
    }
  }
}

export type {Subscription};
export {BetterEventEmitter};
