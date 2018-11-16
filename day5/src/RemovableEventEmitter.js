// @flow
type VoidFunction = () => void;
class RemovableEventEmitter {
  actions: Map<string, Map<number, VoidFunction>> = new Map();
  idCounter: number = 0;

  addListener(eventName: string, action: VoidFunction): number {
    let actionList = this.actions.get(eventName);
    if (!actionList) {
      actionList = new Map();
      this.actions.set(eventName, actionList);
    }
    this.idCounter += 1;
    actionList.set(this.idCounter, action);
    return this.idCounter;
  }

  removeListenerByID(id: number) {
    for (let actions of this.actions.values()) {
      if (actions.has(id)) {
        actions.delete(id);
      }
    }
  }

  emit(eventName: string) {
    let actionList = this.actions.get(eventName);
    if (actionList) {
      for (let action of actionList.values()) {
        action();
      }
    }
  }
}

export {RemovableEventEmitter};
export type {VoidFunction};
