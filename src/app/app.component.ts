import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DeadlineCounterComponent } from './deadline-counter/deadline-counter.component';

@Component({
 
  selector: 'app-root',
  imports: [RouterOutlet,DeadlineCounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'deadline-counter';
}
