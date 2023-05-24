import { action, makeObservable, observable } from "mobx";
import { PeopleRow } from "./people-row";


export class People {


    private readonly name: string;
    private readonly height: string;
    private readonly mass: string;
    private readonly hair_color: string;
    private readonly skin_color: string;
    private readonly eye_color: string;
    private readonly birth_year: string;
    private readonly gender: string;
    private readonly homeworld: string;
    private readonly films: string[];
    private readonly species: string[];
    private readonly vehicles: string[];
    private readonly starships: string[];
    private readonly created: string;
    private readonly edited: string;
    private readonly url: string;
    @observable private favorite: boolean = false;


    constructor(row: PeopleRow) {
        makeObservable(this);
        this.name = row.name;
        this.height = row.height;
        this.mass = row.mass;
        this.hair_color = row.hair_color;
        this.skin_color = row.skin_color;
        this.eye_color = row.eye_color;
        this.birth_year = row.birth_year;
        this.gender = row.gender;
        this.homeworld = row.homeworld;
        this.films = row.films;
        this.species = row.species;
        this.vehicles = row.vehicles;
        this.starships = row.starships;
        this.created = row.created;
        this.edited = row.edited;
        this.url = row.url;
    }

    public getName(): string {
        return this.name;
    }

    public getHeight(): string {
        return this.height;
    }

    public getMass(): string {

        return this.mass;
    }

    public getHairColor(): string {
        return this.hair_color;
    }

    public getSkinColor(): string {


        return this.skin_color;
    }

    public getEyeColor(): string {
        return this.eye_color;
    }

    public getBirthYear(): string {
        return this.birth_year;
    }

    public getGender(): string {
        return this.gender;
    }

    public getHomeworld(): string {
        return this.homeworld;
    }

    public getFilms(): string[] {
        return this.films;
    }

    public getSpecies(): string[] {
        return this.species;
    }

    public getVehicles(): string[] {
        return this.vehicles;
    }

    public getStarships(): string[] {
        return this.starships;
    }

    public getCreated(): string {
        return this.created;
    }

    public getEdited(): string {
        return this.edited;
    }

    public getUrl(): string {
        return this.url;
    }

    public getFavorite(): boolean {
        return this.favorite;
    }

    @action
    public setFavorite(value: boolean) {
        this.favorite = value;
    }
}