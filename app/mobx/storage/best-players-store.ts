import { inject, injectable } from 'inversify';
import { action, makeObservable, observable } from 'mobx';
import { Types } from '../../ioc/types';
import { ApiService } from '../../service/api/api';
import { BestPlayers } from '../dto/best-players';


const _ = require('lodash');


@injectable()
export class BestPlayersStorage {
    @inject(Types.ApiService) private ApiService: ApiService;

    @observable private allBestPlayers: BestPlayers[];



    constructor() {

        this.allBestPlayers = [];

    }

    @action
    public getAllBestPlayers(): BestPlayers[] {
        return this.allBestPlayers;
    }

    public async getDataBestPlayers() {
        try {
            const dataDataBestPlayers = await this.ApiService.getBestPlayer();
            dataDataBestPlayers.response.forEach((item: any) => {
                const player = {
                    firstname: item.player.firstname,
                    lastname: item.player.lastname,
                    nationality: item.player.nationality,
                    photo: item.player.photo,
                    rating: item.statistics[0].games.rating,
                    position: item.statistics[0].games.position
                }
                this.allBestPlayers.push(new BestPlayers(player));
            });
        } catch (e) {
            console.error('getDataBestPlayers error', e);
        }
    }



    @action
    public setAllBestPlayers(value: BestPlayers[]) {
        this.allBestPlayers = value;
    }


}
