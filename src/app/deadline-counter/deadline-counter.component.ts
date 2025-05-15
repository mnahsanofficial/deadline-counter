import {  Component, OnInit } from '@angular/core';
import { DeadlineService } from '../deadline.service';
import { interval, Subscription, takeWhile, tap} from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'app-deadline-counter',
  imports: [HttpClientModule],
  templateUrl: './deadline-counter.component.html',
  styleUrl: './deadline-counter.component.css',
})
export class DeadlineCounterComponent implements OnInit{
 secondsLeft: number=0;
  private timerSub!: Subscription; 

  constructor(private deadlineService: DeadlineService) {}  

  ngOnInit(): void {  
    this.deadlineService.getDeadline().subscribe({
      next: (res) => {
        this.secondsLeft = res.secondsLeft;
        this.startCountdown();
      },
      error: (err) => {
        console.error('Failed to fetch deadline:', err);
      },
    });
  }  
  
  startCountdown(): void {
    this.timerSub = interval(1000)
      .pipe(
        takeWhile(() => this.secondsLeft > 0),
        tap(() => this.secondsLeft--)
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    if (this.timerSub) {
      this.timerSub.unsubscribe();
    }
  }
}
