import { action, makeObservable, observable } from 'mobx';
import { injectable } from 'inversify';

@injectable()
export class NavigationStorage {

  @observable private currentTabRouteName: string | null;

  constructor() {
    makeObservable(this);
    this.currentTabRouteName = null;
  }

  public getCurrentTabRouteName(): string | null {
    return this.currentTabRouteName;
  }

  @action
  public setCurrentTabRouteName(value: string | null) {
    this.currentTabRouteName = value;
  }
}
