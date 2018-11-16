//@flow
class EventEmitter {
  callbacks: Map<string, Array<Function>> = new Map();
  outputLog: Array<string> = [];
  addListener(eventName: string, fnToCall: Function) {
    if (this.callbacks.has(eventName)) {
      this.callbacks.set(eventName, [
        ...this.callbacks.get(eventName),
        fnToCall,
      ]);
    } else {
      this.callbacks.set(eventName, [fnToCall]);
    }
  }

  removeListener(eventName: string, fnToRemove: Function) {
    if (this.callbacks.has(eventName)) {
      let fnList = this.callbacks.get(eventName);
      let newList = [];
      for (let fn of fnList) {
        if (fnToRemove !== fn) {
          newList.push(fn);
        }
      }
      this.callbacks.set(eventName, newList);
    }
  }

  emit(eventName: string) {
    if (this.callbacks.has(eventName)) {
      let fnArray = this.callbacks.get(eventName);
      for (let fn of fnArray) {
        this.outputLog.push(fn());
      }
    }
  }
}

export {EventEmitter};
