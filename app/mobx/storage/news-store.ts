import { inject, injectable } from 'inversify';
import { action, makeObservable, observable } from 'mobx';
import { Types } from '../../ioc/types';
import { ApiService } from '../../service/api/api';
import { News } from '../dto/news';


const _ = require('lodash');


@injectable()
export class NewsStorage {
    @inject(Types.ApiService) private ApiService: ApiService;

    @observable private allNews: News[];

    constructor() {
        this.allNews = [];

    }

    @action
    public getAllNews(): News[] {
        return this.allNews;
    }

    public async getDataNews() {
        try {
            const dataNews = await this.ApiService.getNews();
            dataNews.articles.forEach((item: any) => {
                this.allNews.push(new News(item));
            });

        } catch (e) {
            console.error('getDataNews error', e);
        }
    }



    @action
    public setAllNews(value: News[]) {
        this.allNews = value;
    }

}
