import Config from 'react-native-config';
import {EnvConfig} from './env-config';

export class Environment {
  static getName(): string {
    return Config[EnvConfig.appName];
  }
  static getXRapidAPIKey(): string {
    return Config[EnvConfig.XRapidAPIKey];
  }

  static getXRapidAPIUrl(): string {
    return Config[EnvConfig.XRapidAPIUrl];
  }

  static getNewsApiKey(): string {
    return Config[EnvConfig.newsApiKey];
  }

  static getNewsApiUrl(): string {
    return Config[EnvConfig.newsApiUrl];
  }
}
