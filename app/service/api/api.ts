import { inject, injectable } from 'inversify';
import { makeObservable } from 'mobx';
import axios, { AxiosResponse } from "axios";
import { Environment } from '../../config/Environment';
import Config from 'react-native-config';


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
        const myHeaders = new Headers();
        myHeaders.append("X-RapidAPI-Host", "api-football-v1.p.rapidapi.com");
        myHeaders.append("X-RapidAPI-Key", "38e4bc24fbmshd4e9a9bd4ca6714p115d6fjsn271619dce665");

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        const response = await fetch('https://api-football-v1.p.rapidapi.com/v3/' + 'players/topscorers?season=2018&league=61', requestOptions);
        const jsonData = await response.json();
        return jsonData
    }

}
