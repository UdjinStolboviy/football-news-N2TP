import { action, makeObservable, observable } from "mobx";
import { NewsRow } from "./news-row";


export class Game {


    private readonly id: number;
    private readonly date: string;
    private readonly teamsHomeId: number;
    private readonly teamsHomeName: string;
    private readonly teamsHomeLogo: string;
    private readonly teamsHomeWinner: boolean;
    private readonly teamsHomeGoals: number;
    private readonly teamsAwayId: number;
    private readonly teamsAwayName: string;
    private readonly teamsAwayLogo: string;
    private readonly teamsAwayWinner: boolean;
    private readonly teamsAwayGoals: number;
    @observable private favorite: boolean = false;




    constructor(row: any) {
        makeObservable(this);
        this.id = row.id;
        this.date = row.date;
        this.teamsHomeId = row.teamsHomeId;
        this.teamsHomeName = row.teamsHomeName;
        this.teamsHomeLogo = row.teamsHomeLogo;
        this.teamsHomeWinner = row.teamsHomeWinner;
        this.teamsHomeGoals = row.teamsHomeGoals;
        this.teamsAwayId = row.teamsAwayId;
        this.teamsAwayName = row.teamsAwayName;
        this.teamsAwayLogo = row.teamsAwayLogo;
        this.teamsAwayWinner = row.teamsAwayWinner;
        this.teamsAwayGoals = row.teamsAwayGoals;
    }

    public getFavorite(): boolean {
        return this.favorite;
    }

    @action
    public setFavorite(value: boolean) {
        this.favorite = value;
    }

    public getId(): number {
        return this.id;
    }

    public getDate(): string {
        return this.date;
    }

    public getTeamsHomeId(): number {
        return this.teamsHomeId;
    }

    public getTeamsHomeName(): string {
        return this.teamsHomeName;
    }

    public getTeamsHomeLogo(): string {
        return this.teamsHomeLogo;
    }

    public getTeamsHomeWinner(): boolean {
        return this.teamsHomeWinner;
    }

    public getTeamsHomeGoals(): number {
        return this.teamsHomeGoals;
    }

    public getTeamsAwayId(): number {
        return this.teamsAwayId;
    }

    public getTeamsAwayName(): string {
        return this.teamsAwayName;
    }

    public getTeamsAwayLogo(): string {
        return this.teamsAwayLogo;
    }

    public getTeamsAwayWinner(): boolean {
        return this.teamsAwayWinner;
    }

    public getTeamsAwayGoals(): number {
        return this.teamsAwayGoals;
    }



}