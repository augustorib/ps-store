import { Component } from '@angular/core';
import { MenuBarLogoComponent } from './menu-bar-logo/menu-bar-logo.component';
import { MenuBarItemComponent } from "./menu-bar-item/menu-bar-item.component";
import { MenuBarSocialComponent } from './menu-bar-social/menu-bar-social.component';



@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [MenuBarLogoComponent, MenuBarItemComponent, MenuBarSocialComponent],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent {


}
