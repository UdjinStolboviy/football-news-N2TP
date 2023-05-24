import { injectable } from 'inversify';
import { NavigationContainerRef } from '@react-navigation/core';

@injectable()
export class Navigator {

  private navigator: NavigationContainerRef<any> | null;

  public getNavigator(): NavigationContainerRef<any> | null {
    return this.navigator;
  }

  public setNavigator(value: NavigationContainerRef<any> | null) {
    this.navigator = value;
  }
}
