import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-menu-bar-social',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './menu-bar-social.component.html',
  styleUrl: './menu-bar-social.component.css'
})
export class MenuBarSocialComponent {

  linkedin = faLinkedin;
  github = faGithub;
}
