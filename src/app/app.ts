import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Profile } from './profile/profile';
import { Counter } from './counter/counter';

@Component({
  selector: 'app-root',
  imports: [Login,Profile,Counter],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class App {
  // protected readonly title = signal('Angular-Learning');
  title = "This is for interpolation basics";
  x = 10;
  y = 21;
  user1 = "Arpit";
}
