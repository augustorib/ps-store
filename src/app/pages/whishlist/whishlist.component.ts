import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhishlistService } from '../../services/whishlist.service';
import { WishlistCardComponent } from '../../components/wishlist-card/wishlist-card.component';
import { CardWishlistComponent } from "../../components/card/card-wishlist/card-wishlist.component";


@Component({
  selector: 'app-whishlist',
  standalone: true,
  imports: [CommonModule, WishlistCardComponent, CardWishlistComponent],
  templateUrl: './whishlist.component.html',
  styleUrl: './whishlist.component.css'
})
export class WhishlistComponent implements OnInit{

  wishlistGames:string[] = []

  constructor(private service: WhishlistService)
  {

  }

  ngOnInit(): void
  { 
    this.wishlistGames = this.service.obterListaDeJogos()
  }

}
