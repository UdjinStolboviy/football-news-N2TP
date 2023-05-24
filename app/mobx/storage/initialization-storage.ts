import { action, makeObservable, observable } from 'mobx';
import { injectable } from 'inversify';

@injectable()
export class InitializationStorage {

  @observable private initializationSuccessful: boolean | null;
  @observable private started: boolean;
  @observable private progress: number;

  constructor() {
    makeObservable(this);
    this.initializationSuccessful = null;
    this.started = false;
    this.progress = 0;
  }


  public getInitializationSuccessful(): boolean | null {
    return this.initializationSuccessful;
  }

  @action
  public setInitializationSuccessful(value: boolean | null) {
    this.initializationSuccessful = value;
  }

  public getStarted(): boolean {
    return this.started;
  }

  @action
  public setStarted(value: boolean) {
    this.started = value;
  }

  public getProgress(): number {
    return this.progress;
  }

  @action
  public setProgress(value: number) {
    this.progress = value;
  }
}
