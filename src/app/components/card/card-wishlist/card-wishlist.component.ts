import { Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { WhishlistService } from '../../../services/whishlist.service';


@Component({
  selector: 'app-card-wishlist',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './card-wishlist.component.html',
  styleUrl: './card-wishlist.component.css'
})
export class CardWishlistComponent implements OnInit {

  @Input()
  gameId:number = 0

  @Input()
  gameName:string = ""

  //Icone para indicar se o jogo está na wishlist ou não
  offWishlist = faHeartRegular
  onWishlist = faHeartSolid

  mostrarOffWishlist:boolean = true
  mostrarOnWishlist:boolean = false

  corOnWishlist:string = "red"

  constructor(private service:WhishlistService){
    
  }


  ngOnInit(): void {
    this.verificarExibicaoIcone()
  }

  gerenciarWishList(gameId:number):void
  {
  
    if(this.mostrarOffWishlist)
    {
      this.inverterValoresBoolean()
      //this.adicionarJogoNaWishList(gameName)
      this.adicionarJogoNaWishList(gameId)
    }

    else
    {
      this.inverterValoresBoolean()
      //this.removerJogoNaWishList(gameName)
      this.removerJogoNaWishList(gameId)
    }

  }
  
  adicionarJogoNaWishList(gameId:number):void
  {
    //this.service.adicionarJogoNaWishlist(gameName)
    this.service.adicionarJogoNaWishlistPorId(gameId)
  }

  removerJogoNaWishList(gameId:number):void
  {
    //this.service.removerJogoNaWishLlist(gameName)
    this.service.removerJogoNaWishLlistPorId(gameId)
  }

  inverterValoresBoolean(): void
  {
     this.mostrarOffWishlist = !this.mostrarOffWishlist
     this.mostrarOnWishlist  = !this.mostrarOnWishlist
  }

  verificarExibicaoIcone():void
  {
    //const jogosNaWishlist = this.service.obterListaDeJogos()

    const jogosNaWishlist = this.service.obterListaDeJogosPorId()

    if(jogosNaWishlist.includes(this.gameId))
    {
      this.mostrarOnWishlist = true
      this.mostrarOffWishlist = false
    }

  }
}
