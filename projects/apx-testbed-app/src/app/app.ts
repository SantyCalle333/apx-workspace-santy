import { Component, signal } from '@angular/core';


import { ApxSideMenuComponent, TitleColor } from 'apx-side-menu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ApxSideMenuComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent {
  title = 'apx-testbed-app';

  TitleColor = TitleColor;
  isAuthenticated = signal(true);
}
