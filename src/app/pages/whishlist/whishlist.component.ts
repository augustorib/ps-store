import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhishlistService } from '../../services/whishlist.service';


@Component({
  selector: 'app-whishlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './whishlist.component.html',
  styleUrl: './whishlist.component.css'
})
export class WhishlistComponent implements OnInit{

  wishlist:string[] = []

  constructor(private service: WhishlistService)
  {

  }

  ngOnInit(): void
  { 
    this.wishlist = this.service.obterListaDeJogos()
  }

}
