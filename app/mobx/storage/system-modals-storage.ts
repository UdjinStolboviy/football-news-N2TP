import { injectable } from 'inversify';
import { action, makeObservable, observable } from 'mobx';

@injectable()
export class SystemModalsStorage {

  @observable private errorVisible: boolean;
  @observable private loaderVisible: boolean;
  @observable private isInit: boolean;

  constructor() {
    makeObservable(this);
    this.errorVisible = false;
    this.loaderVisible = false;
    this.isInit = false;
  }

  public getErrorVisible(): boolean {
    return this.errorVisible;
  }

  @action
  public setErrorVisible(value: boolean) {
    this.errorVisible = value;
  }

  public getLoaderVisible(): boolean {
    return this.loaderVisible;
  }

  @action
  public setLoaderVisible(value: boolean) {
    this.loaderVisible = value;
  }

  public getIsInit(): boolean {
    return this.isInit;
  }

  @action
  public setIsInit(value: boolean) {
    this.isInit = value;
  }
}
