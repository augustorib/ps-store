import { Component } from '@angular/core';

@Component({
  selector: 'app-wishlist-card-info',
  standalone: true,
  imports: [],
  templateUrl: './wishlist-card-info.component.html',
  styleUrl: './wishlist-card-info.component.css'
})
export class WishlistCardInfoComponent {

  
  gameName:string =""

  gamePrice:string =""

  descricao:string =""
}
