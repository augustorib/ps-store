import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart as faHeartRegular, IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { WhishlistService } from '../../../services/whishlist.service';


@Component({
  selector: 'app-card-wishlist',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './card-wishlist.component.html',
  styleUrl: './card-wishlist.component.css'
})
export class CardWishlistComponent {
  
  //Icone para indicar se o jogo está na wishlist ou não
  offWishlist = faHeartRegular
  onWishlist = faHeartSolid

  mostrarOffWishlist:boolean = true
  mostrarOnWishlist:boolean = false

  corOnWishlist:string = "red"

  constructor(){
    
  }

  gerenciarWishList():void
  {
  
    if(this.mostrarOffWishlist)
    {
      this.inverterValoresBoolean()
      this.adicionarJogoNaWishList()
    }
    else
    {
      this.inverterValoresBoolean()
      this.removerJogoNaWishList()
    }

  }
  
  adicionarJogoNaWishList():void
  {
    console.log("adicionar jogo na whislist")
  }

  removerJogoNaWishList():void
  {
    console.log("removendo jogo na whislist");
  }

  inverterValoresBoolean(): void
  {
     this.mostrarOffWishlist = !this.mostrarOffWishlist
     this.mostrarOnWishlist  = !this.mostrarOnWishlist
  }
}
