import { inject, injectable } from 'inversify';
import { action, makeObservable, observable } from 'mobx';
import { Types } from '../../ioc/types';
import { ApiService } from '../../service/api/api';
import { News } from '../dto/news';
import { Game } from '../dto/game';
import { Player } from '../dto/player';


const _ = require('lodash');


@injectable()
export class GameStorage {
    @inject(Types.ApiService) private ApiService: ApiService;

    private couchHome: string;
    private couchAway: string;
    private teamHome: Player[];
    private teamAway: Player[];
    private substitutesHome: Player[];
    private substitutesAway: Player[];

    constructor() {
        this.couchHome = '';
        this.couchAway = '';
        this.teamHome = [];
        this.teamAway = [];
        this.substitutesHome = [];
        this.substitutesAway = [];
    }

    @action
    public getCouchHome(): string {
        return this.couchHome;
    }

    @action
    public getCouchAway(): string {
        return this.couchAway;
    }

    @action
    public getTeamHome(): Player[] {
        return this.teamHome;
    }

    @action
    public getTeamAway(): Player[] {
        return this.teamAway;
    }

    public async getTeams(id: string) {
        try {
            const dataGame = await this.ApiService.getTeams(id);
            dataGame.response.forEach((item: any) => {
                this.couchHome = item.coaches.home.name;
                this.couchAway = item.coaches.away.name;
                item.lineups.home.startXI.forEach((item: any) => {
                    const playerData = {
                        firstName: item.player.name.first,
                        lastName: item.player.name.last,
                        numberPlayer: item.player.number,
                    }
                    this.teamHome.push(new Player(playerData));
                });
                item.lineups.away.startXI.forEach((item: any) => {
                    const playerData = {
                        firstName: item.player.name.first,
                        lastName: item.player.name.last,
                        numberPlayer: item.player.number,
                    }
                    this.teamAway.push(new Player(playerData));
                });
                item.lineups.home.substitutes.forEach((item: any) => {
                    const playerData = {
                        firstName: item.player.name.first,
                        lastName: item.player.name.last,
                        numberPlayer: item.player.number,
                    }
                    this.substitutesHome.push(new Player(playerData));
                }
                );
                item.lineups.away.substitutes.forEach((item: any) => {
                    const playerData = {
                        firstName: item.player.name.first,
                        lastName: item.player.name.last,
                        numberPlayer: item.player.number,
                    }
                    this.substitutesAway.push(new Player(playerData));
                }
                );
            });
            console.log('getTeams', dataGame);

        } catch (e) {
            console.error('getTeams error', e);
        }
    }



}
