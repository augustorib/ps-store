import { Injectable } from '@angular/core';
import { GameModel, defaultValue } from '../models/gameModel';

@Injectable({
  providedIn: 'root'
})
export class BdService {

  games:GameModel[] =[]

  constructor() {

    this.games = [
      {
        id: 1,
        name: "Battlefield 1",
        nickname: "bf-1",
        price: "R$ 129,99",
        cover: "assets/bt-1.jpg",
        description:"DIGITAL | PS4 battlefield 1"
      },
      {
        id: 2,
        name: "Battlefield 4",
        nickname: "bf-4",
        price: "R$ 269,99",
        cover: "assets/bt-4.jpg",
        description:"EXCLUSIVE | DISC | PS5"
      },
      {
        id: 3,
        name: "Assassin's Creed",
        nickname: "creed",
        price: "R$ 369,99",
        cover: "assets/ac-cover.jpg",
        description:"BEST OF YEAR | DIGITAL | PS5"
      },
      {
        id: 4,
        name: "Battlefield Hardline",
        nickname: "bf-hl",
        price: "R$ 369,99",
        cover: "assets/bt-hardline.jpg",
        description:"NEW | DIGITAL | PS3 PS4 PS5"
      },

    ]
  
  }

  getGameById(id:number):GameModel
  {
   const model = this.games.find(game => game.id == id)

    if(model === undefined)
    {
      return defaultValue()
    }

    return model
  }

  getGamesById(gameIds:number[]):GameModel[]
  {
    const gamesInWishList = this.games.filter(game => gameIds.includes(game.id))

    if(gamesInWishList.length === 0)
    {
      return [defaultValue()]
    }

    return gamesInWishList
  }
}
