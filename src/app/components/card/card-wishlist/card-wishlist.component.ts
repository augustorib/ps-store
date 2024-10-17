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

  gerenciarWishList(gameName:string):void
  {
  
    if(this.mostrarOffWishlist)
    {
      this.inverterValoresBoolean()
      this.adicionarJogoNaWishList(gameName)
    }

    else
    {
      this.inverterValoresBoolean()
      this.removerJogoNaWishList(gameName)
    }

  }
  
  adicionarJogoNaWishList(gameName:string):void
  {
    this.service.adicionarJogoNaWishlist(gameName)
  }

  removerJogoNaWishList(gameName:string):void
  {
    this.service.removerJogoNaWishLlist(gameName)
  }

  inverterValoresBoolean(): void
  {
     this.mostrarOffWishlist = !this.mostrarOffWishlist
     this.mostrarOnWishlist  = !this.mostrarOnWishlist
  }

  verificarExibicaoIcone():void
  {
    const jogosNaWishlist = this.service.obterListaDeJogos()

    if(jogosNaWishlist.includes(this.gameName))
    {
      this.mostrarOnWishlist = true
      this.mostrarOffWishlist = false
    }

  }
}
