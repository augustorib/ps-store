import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from "../../components/card/card.component";
import { BdService } from '../../services/bd.service';
import { GameModel } from '../../models/gameModel';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  games:GameModel[] = []

  constructor(private bdService:BdService)
  {
    this.games = bdService.games
  }
}
