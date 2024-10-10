import { Component } from '@angular/core';
import { CardLabelComponent } from "./card-label/card-label.component";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardLabelComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

}
