import {injectable} from 'inversify';
import Config from 'react-native-config';

@injectable()
export class ApiService {
  private readonly newsApiUrl: string;
  private readonly newsApiKey: string;
  private readonly footballApiUrl: string;
  private readonly requestOptions: RequestInit;

  constructor() {
    this.newsApiKey = Config.NEWS_API_KEY;
    this.newsApiUrl = Config.NEWS_API_URL;
    this.footballApiUrl = 'https://api-football-v1.p.rapidapi.com/v3/';
    this.requestOptions = {
      headers: {
        'X-RapidAPI-Key': Config.RAPID_API_KEY,
      },
    };
  }

  private async fetchData(url: string): Promise<any> {
    const response = await fetch(url, this.requestOptions);
    return response.json();
  }

  public async getNews(): Promise<any> {
    const url = `${this.newsApiUrl}${this.newsApiKey}`;
    return this.fetchData(url);
  }

  public async getBestPlayer(): Promise<any> {
    const url = `${this.footballApiUrl}players/topscorers?season=2018&league=61`;
    return this.fetchData(url);
  }

  public async getGames(): Promise<any> {
    const url = `${this.footballApiUrl}fixtures?season=2022&league=61`;
    return this.fetchData(url);
  }

  public async getTeams(id: number): Promise<any> {
    const url = `${this.footballApiUrl}fixtures/lineups?fixture=${id}`;
    return this.fetchData(url);
  }
}
