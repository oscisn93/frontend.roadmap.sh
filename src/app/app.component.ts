import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrls: ['../styles.css']
})
export class AppComponent {
  title = 'Flash Cards';
  items = [
    {
      title: 'US History',
      link: '/quiz/us-history',
    },
    {
      title: 'Psychology',
      link: '/quiz/psychology',
    },
  ];
}
