import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WhishlistService {

  listaDejogos:string[] = [];

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
}
