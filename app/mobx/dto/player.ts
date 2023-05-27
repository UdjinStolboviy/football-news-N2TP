import { action, makeObservable, observable } from "mobx";


export class Player {


    private readonly firstName: string;
    private readonly lastName: string;
    private readonly numberPlayer: string;





    constructor(row: any) {
        this.firstName = row.firstName;
        this.lastName = row.lastName;
        this.numberPlayer = row.numberPlayer;
    }

    public getFirstName(): string {
        return this.firstName;
    }

    public getLastName(): string {
        return this.lastName;
    }

    public getNumberPlayer(): string {
        return this.numberPlayer;
    }


}