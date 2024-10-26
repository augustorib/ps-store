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
        description:"DIGITAL | PS4 battlefield 1",
        label:"DIGITAL",
        type:"DIGITAL | PS4"

      },
      {
        id: 2,
        name: "Battlefield 4",
        nickname: "bf-4",
        price: "R$ 269,99",
        cover: "assets/bt-4.jpg",
        description:"EXCLUSIVE | DISC | PS5",
        label:"EXCLUSIVE",
        type:"DISC | PS5"
      },
      {
        id: 3,
        name: "Assassin's Creed",
        nickname: "creed",
        price: "R$ 369,99",
        cover: "assets/ac-cover.jpg",
        description:"BEST OF YEAR | DIGITAL | PS5", 
        label:"BEST OF YEAR",
        type:"DIGITAL | PS5"
      },
      {
        id: 4,
        name: "Battlefield Hardline",
        nickname: "bf-hl",
        price: "R$ 369,99",
        cover: "assets/bt-hardline.jpg",
        description:"NEW | DIGITAL | PS3 PS4 PS5",
        label:"NEW",
        type:"DIGITAL | PS3 PS4 PS5"
      },
      {
        id: 5,
        name: "Uncharted 4",
        nickname: "Un4",
        price: "R$ 269,99",
        cover: "assets/Un_4.jpg",
        description:"GAME OF YEAR | DIGITAL | PS4 ",
        label:"BEST OF YEAR",
        type:"DIGITAL | PS4 PS5"
      },
      {
        id: 6,
        name: "Street Fighter V",
        nickname: "SFV",
        price: "R$ 199,99",
        cover: "assets/sfv.jpg",
        description:"ONLINE | PS4 | PS5",
        label:"ONLINE",
        type:"DIGITAL | PS3 PS4 PS5"
      },
      {
        id: 7,
        name: "Horizon Zero Dawn",
        nickname: "HZD",
        price: "R$ 279,99",
        cover: "assets/hzd.jpg",
        description:"ADVENTURE | PS4 ",
        label:"ADVENTURE",
        type:"DISC | PS5"
      },
      {
        id: 8,
        name: "Battlefield Bad Company 2",
        nickname: "BC",
        price: "R$ 259,99",
        cover: "assets/bt-bad-company-2.jpg",
        description:"NEW | PS4 ",
        label:"NEW",
        type:"DIGITAL | PS4"
      },
      {
        id: 9,
        name: "Battlefield 5",
        nickname: "BF5",
        price: "R$ 299,99",
        cover: "assets/bt-5.jpg",
        description:"MULTI | PS5 ",
        label:"MULTI",
        type:"MULTI | PS5"
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
      return []
    }

    return gamesInWishList
  }
}
