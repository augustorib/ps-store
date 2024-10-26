import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhishlistService } from '../../services/whishlist.service';
import { WishlistCardComponent } from '../../components/wishlist-card/wishlist-card.component';
import { CardWishlistComponent } from "../../components/card/card-wishlist/card-wishlist.component";
import { BdService } from '../../services/bd.service';
import { GameModel } from '../../models/gameModel';



@Component({
  selector: 'app-whishlist',
  standalone: true,
  imports: [CommonModule, WishlistCardComponent, CardWishlistComponent],
  templateUrl: './whishlist.component.html',
  styleUrl: './whishlist.component.css'
})
export class WhishlistComponent{

  wishlistGames:GameModel[] = []

  constructor(private service: WhishlistService, private bdservice: BdService)
  {
     this.wishlistGames = this.bdservice.getGamesById(this.service.gameList)
  }


}
