import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-wishlist-card-image',
  standalone: true,
  imports: [],
  templateUrl: './wishlist-card-image.component.html',
  styleUrl: './wishlist-card-image.component.css'
})
export class WishlistCardImageComponent {

  @Input()
  gameCover: string = "assets/bt-1.jpg"
}
