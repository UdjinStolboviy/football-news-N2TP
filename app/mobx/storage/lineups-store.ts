import { inject, injectable } from 'inversify';
import { action, makeObservable, observable, observe } from 'mobx';
import { Types } from '../../ioc/types';
import { ApiService } from '../../service/api/api';
import { News } from '../dto/news';
import { Game } from '../dto/game';
import { Player } from '../dto/player';


const _ = require('lodash');


@injectable()
export class LineupsStorage {
    @inject(Types.ApiService) private ApiService: ApiService;

    private couchHome: string;
    private couchAway: string;
    private teamHome: Player[];
    private teamAway: Player[];
    private substitutesHome: Player[];
    @observable private substitutesAway: Player[];

    constructor() {
        makeObservable(this);
        this.couchHome = '';
        this.couchAway = '';
        this.teamHome = [];
        this.teamAway = [];
        this.substitutesHome = [];
        this.substitutesAway = [];
    }

    public getCouchHome(): string {
        return this.couchHome;
    }


    public getCouchAway(): string {
        return this.couchAway;
    }


    public getTeamHome(): Player[] {
        return this.teamHome;
    }


    public getTeamAway(): Player[] {
        return this.teamAway;
    }


    public getSubstitutesHome(): Player[] {
        return this.substitutesHome;
    }


    public getSubstitutesAway(): Player[] {

        return this.substitutesAway;
    }

    public async getLineupsTeams(id: number) {
        try {
            const dataGame = await this.ApiService.getTeams(id);

            this.couchHome = dataGame.response[0].coach.name;
            this.couchAway = dataGame.response[1].coach.name;
            dataGame.response[0].startXI.forEach((item: any) => {
                const playerData = {
                    name: item.player.name,
                    numberPlayer: item.player.number,
                }
                this.teamHome.push(new Player(playerData));
            }
            );
            dataGame.response[1].startXI.forEach((item: any) => {
                const playerData = {
                    name: item.player.name,
                    numberPlayer: item.player.number,
                }
                this.teamAway.push(new Player(playerData));
            }
            );

            dataGame.response[0].substitutes.forEach((item: any) => {
                const playerData = {
                    name: item.player.name,
                    numberPlayer: item.player.number,
                }
                this.substitutesHome.push(new Player(playerData));
            }
            );
            dataGame.response[1].substitutes.forEach((item: any) => {
                const playerData = {
                    name: item.player.name,
                    numberPlayer: item.player.number,
                }
                action(() => {
                    this.substitutesAway.push(new Player(playerData));
                })();
            }
            );

            console.log('getTeams', dataGame);

        } catch (e) {
            console.error('getTeams error', e);
        }
    }

    public clearData() {
        action(() => {
            this.couchHome = '';
            this.couchAway = '';
            this.teamHome = [];
            this.teamAway = [];
            this.substitutesHome = [];
            this.substitutesAway = [];
        })();
    }




}
