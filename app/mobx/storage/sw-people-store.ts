import { inject, injectable } from 'inversify';
import { action, makeObservable, observable } from 'mobx';
import { People } from '../dto/people';
import { Types } from '../../ioc/types';
import { ApiService } from '../../service/api/api';


const _ = require('lodash');


@injectable()
export class PeopleStorage {
    @inject(Types.ApiService) private ApiService: ApiService;

    @observable private allPeoples: People[];
    @observable private favoritePeoples: People[];
    @observable private page: number = 0;
    @observable private load = false;
    @observable private female: number = 0;
    @observable private male: number = 0;
    @observable private other: number = 0;


    constructor() {
        makeObservable(this);
        this.allPeoples = [];
        this.favoritePeoples = [];
        this.page = 0;
        this.load = false;
        this.female = 0;
        this.male = 0;
        this.other = 0;
    }

    public getFemale(): number {
        return this.female;
    }

    @action
    public setFemale() {
        this.female++;
    }
    @action
    public setFemaleDiz() {
        this.female--;
    }
    public getMale(): number {
        return this.male;
    }

    @action
    public setMale() {
        this.male++;
    }

    @action
    public setMaleDiz() {
        this.male--;
    }

    public getOther(): number {
        return this.other;
    }

    @action
    public setOther() {
        this.other++;
    }

    @action
    public setOtherDiz() {
        this.other--;
    }


    @action
    public getLoaded(): boolean {
        return this.load;
    }

    @action
    public setLoaded(value: boolean) {
        this.load = value;
    }

    @action
    public getLoadedPeoplesByPeopleName(name: string): People | undefined {
        return this.allPeoples.find(item => item.getName() === name);
    }

    @action
    public addToLoadedPeoples(people: People) {
        const existing = this.allPeoples.find(item => item.getName() === people.getName());
        if (!existing) {
            this.allPeoples.push(people);
        }
    }

    public getFavoritePeoples(): People[] {
        return this.favoritePeoples;
    }

    @action
    public addToFavoritePeoples(people: People) {
        const existing = this.favoritePeoples.find(item => item.getName() === people.getName());
        if (!existing) {
            this.favoritePeoples.push(people);
        }
    }

    @action
    public removeFromFavoritePeoples(people: People) {
        _.remove(this.favoritePeoples, item => item.getName() === people.getName());
    }

    public isFavorite(people: People): boolean {
        return this.favoritePeoples.find(item => item.getName() === people.getName()) !== undefined;
    }

    @action
    public getAllPeoples(): People[] {
        return this.allPeoples;
    }

    @action
    public getPeopleByName(name: string): People | undefined {
        return this.allPeoples.find(item => item.getName() === name);
    }

    public getDataPeoples(): People[] {
        this.ApiService.getPeople().then((data) => {
            const peoples = data.data.results;
            peoples.forEach((people: any) => {
                this.addToLoadedPeoples(new People(people));
            }
            )
        });
        return this.allPeoples;
    }

    @action
    public getNextPagePeoples(): People[] {
        this.page++;
        this.ApiService.getNextPeoplePage(this.page).then((data) => {
            const peopleResults: any = []
            const peoples = data.data.results;
            peoples.forEach((people: any) => {
                peopleResults.push(new People(people));
            }
            )
            this.allPeoples = [...this.allPeoples, ...peopleResults]
        });

        return this.allPeoples;
    }

    public getSearchedPeoples(search: string): People[] {
        this.load = true;
        this.allPeoples = [];
        this.ApiService.getSearchedPeople(search).then((data) => {
            this.load = false;
            const peoples = data.data.results;
            peoples.forEach((people: any) => {
                this.allPeoples.push(new People(people));
            }
            )
        });

        return this.allPeoples;
    }


    @action
    public setAllPeoples(value: People[]) {
        this.allPeoples = value;
    }

    @action
    public setPage(value: number) {
        this.page = value;
    }

    public getPage(): number {
        return this.page;
    }

    @action
    public clear() {
        this.allPeoples.map((item) => {
            item.setFavorite(false);
        })
        this.favoritePeoples = [];
        this.page = 0;
        this.load = false;
        this.female = 0;
        this.male = 0;
        this.other = 0;
    }
}
