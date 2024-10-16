import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu-bar-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menu-bar-item.component.html',
  styleUrl: './menu-bar-item.component.css'
})
export class MenuBarItemComponent {

}
