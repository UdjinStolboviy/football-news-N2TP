import { inject, injectable } from 'inversify';
import { makeObservable } from 'mobx';

import { Environment } from '../../config/Environment';
import Config from 'react-native-config';

const myHeaders = new Headers();
myHeaders.append("X-RapidAPI-Host", Config.X_RAPIDAPI_API_URL);
myHeaders.append("X-RapidAPI-Key", Config.X_RAPIDAPI_KEY);

const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

@injectable()
export class ApiService {
    private readonly urlNewsApi: string;
    private readonly newsApiKey: string;
    private readonly XRapidAPIKey: string;
    private readonly XRapidAPIUrl: string;

    constructor() {
        this.newsApiKey = Config.NEWS_API_KEY;
        this.urlNewsApi = Config.NEWS_API_URL;
        this.XRapidAPIKey = Config.X_RAPIDAPI_KEY;
        this.XRapidAPIUrl = Config.X_RAPIDAPI_API_URL;

    }

    public async getNews(): Promise<any> {
        const response = await fetch(this.urlNewsApi + this.newsApiKey);
        const jsonData = await response.json();
        return jsonData
    }

    public async getBestPlayer(): Promise<any> {

        const response = await fetch('https://api-football-v1.p.rapidapi.com/v3/' + 'players/topscorers?season=2018&league=61', requestOptions);
        const jsonData = await response.json();
        return jsonData
    }

    public async getGames(): Promise<any> {

        const response = await fetch('https://api-football-v1.p.rapidapi.com/v3/' + 'fixtures?season=2022&league=61', requestOptions);
        const jsonData = await response.json();
        return jsonData
    }

    public async getTeams(id: number): Promise<any> {

        const response = await fetch('https://api-football-v1.p.rapidapi.com/v3/' + 'fixtures/lineups?fixture=' + `${id}`, requestOptions);
        const jsonData = await response.json();
        return jsonData
    }

}
