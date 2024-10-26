import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WhishlistService {

  listaDejogos:string[] = [];

  gameList:number[] = [];

  constructor() { }

  obterListaDeJogos(): string[]
  {
    return this.listaDejogos
  }

  adicionarJogoNaWishlist(game:string) : void
  {
    this.listaDejogos.push(game);
  }

  removerJogoNaWishLlist(game:string): void
  {
    const index:number = this.listaDejogos.indexOf(game)

    if(index > -1)
    this.listaDejogos.splice(index, 1)
  }


  //Implementando coma utilização de Ids, para utilizar em conjunto com o bdService
  obterListaDeJogosPorId(): number[]
  {
    return this.gameList
  }

  adicionarJogoNaWishlistPorId(id:number) : void
  {
    this.gameList.push(id);
  }

  removerJogoNaWishLlistPorId(id:number): void
  {
    const index:number = this.gameList.indexOf(id)

    if(index > -1)
    this.gameList.splice(index, 1)
  }
}
