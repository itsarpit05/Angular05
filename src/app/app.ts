import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // protected readonly title = signal('Angular-Learning');
  title = "This is for interpolation basics";
  x = 10;
  y = 21;
  user1 = "Arpit";
}
