import { inject, injectable } from 'inversify';
import { makeObservable } from 'mobx';
import axios, { AxiosResponse } from "axios";

//https://swapi.dev/api/people/?search=r2
//https://swapi.dev/api/people/?page=2

@injectable()
export class ApiService {
    private urlApi = 'https://swapi.dev/api/';
    public getPeople(): Promise<AxiosResponse<any, any>> {
        return axios.get(this.urlApi + 'people')
    }
    public getNextPeoplePage(nextPage: number): Promise<AxiosResponse<any, any>> {
        return axios.get(this.urlApi + 'people/?page=' + nextPage.toString())
    }

    public getSearchedPeople(search: string): Promise<AxiosResponse<any, any>> {
        return axios.get(this.urlApi + 'people/?search=' + search)
    }
}
