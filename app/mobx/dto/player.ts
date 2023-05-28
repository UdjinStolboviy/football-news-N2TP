import { action, makeObservable, observable } from "mobx";


export class Player {


    private readonly name: string;
    private readonly numberPlayer: string;





    constructor(row: any) {
        this.name = row.name;
        this.numberPlayer = row.numberPlayer;
    }

    public getName(): string {
        return this.name;
    }

    public getNumberPlayer(): string {
        return this.numberPlayer;
    }


}