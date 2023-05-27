import { inject, injectable } from 'inversify';
import { action, makeObservable, observable } from 'mobx';
import { Types } from '../../ioc/types';
import { ApiService } from '../../service/api/api';
import { News } from '../dto/news';
import { Game } from '../dto/game';


const _ = require('lodash');


@injectable()
export class GameStorage {
    @inject(Types.ApiService) private ApiService: ApiService;

    @observable private allGame: Game[];

    constructor() {
        this.allGame = [];

    }

    @action
    public getAllGame(): Game[] {
        return this.allGame;
    }

    public async getDataGame() {
        try {
            const dataGame = await this.ApiService.getGames();
            dataGame.response.forEach((item: any) => {
                const fixtureData = {
                    id: item.fixture.id,
                    date: item.fixture.date,
                    teamsHomeId: item.teams.home.id,
                    teamsHomeName: item.teams.home.name,
                    teamsHomeLogo: item.teams.home.logo,
                    teamsHomeWinner: item.teams.home.winner,
                    teamsHomeGoals: item.goals.home,
                    teamsAwayId: item.teams.away.id,
                    teamsAwayName: item.teams.away.name,
                    teamsAwayLogo: item.teams.away.logo,
                    teamsAwayWinner: item.teams.away.winner,
                    teamsAwayGoals: item.goals.away,
                }
                this.allGame.push(new Game(fixtureData));
            });
            console.log('dataGame', dataGame);

        } catch (e) {
            console.error('getDataGames error', e);
        }
    }

    @action
    getFavoriteGames(): Game[] {
        return this.allGame.filter((item: Game) => item.getFavorite());
    }



    @action
    public setAllGames(value: Game[]) {
        this.allGame = value;
    }

}
