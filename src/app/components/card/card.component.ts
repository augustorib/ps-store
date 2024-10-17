import { Component, Input } from '@angular/core';
import { CardLabelComponent } from "./card-label/card-label.component";
import { CardPricingComponent } from './card-pricing/card-pricing.component';
import { CardWishlistComponent } from './card-wishlist/card-wishlist.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardLabelComponent, CardPricingComponent, CardWishlistComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input()
  gameName:string = ""

  @Input()
  gameCover:string = ""

  @Input()
  gameLabel: string = ""

  @Input()
  gameType: string = "Digital PS4"

  @Input()
  gamePrice: string = "R$ 399,90"

}
