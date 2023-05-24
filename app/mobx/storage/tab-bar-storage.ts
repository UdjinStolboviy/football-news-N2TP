import { injectable } from 'inversify';
import { action, makeObservable, observable } from 'mobx';
import { SharedValue } from 'react-native-reanimated';

@injectable()
export class TabBarStorage {

  @observable private gestureProgressSharedValue: SharedValue<number> | null;

  constructor() {
    makeObservable(this);
    this.gestureProgressSharedValue = null;
  }

  public getGestureProgressSharedValue(): SharedValue<number> | null {
    return this.gestureProgressSharedValue;
  }

  public setGestureProgressSharedValue(value: SharedValue<number> | null) {
    this.gestureProgressSharedValue = value;
  }
}
