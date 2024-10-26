import { Component, Input } from '@angular/core';
import { WishlistCardImageComponent } from './wishlist-card-image/wishlist-card-image.component';
import { WishlistCardInfoComponent } from './wishlist-card-info/wishlist-card-info.component';

@Component({
  selector: 'app-wishlist-card',
  standalone: true,
  imports: [WishlistCardImageComponent, WishlistCardInfoComponent],
  templateUrl: './wishlist-card.component.html',
  styleUrl: './wishlist-card.component.css'
})
export class WishlistCardComponent {

  @Input()
  gameCover: string = "assets/bt-1.jpg"

  @Input()
  gameName:string ="Judit"

  @Input()
  gamePrice:string ="R$ 100,99"

  @Input()
  gameDescription:string ="teste"
}
