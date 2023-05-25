import { inject, injectable } from 'inversify';
import { makeObservable } from 'mobx';
import axios, { AxiosResponse } from "axios";
import { Environment } from '../../config/Environment';
import Config from 'react-native-config';

const url1 = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=335db48143244d828d000a78c5b9c35d';
@injectable()
export class ApiService {
    private readonly urlNewsApi: string;
    private readonly newsApiKey: string;

    constructor() {
        this.newsApiKey = Config.NEWS_API_KEY;
        this.urlNewsApi = Config.NEWS_API_URL;
    }

    public async getNews(): Promise<any> {
        const response = await fetch(this.urlNewsApi + this.newsApiKey);
        const jsonData = await response.json();
        return jsonData
    }

}
