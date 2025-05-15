import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { deadlineSeconds } from './deadline.model';

@Injectable({
  providedIn: 'root'
})
export class DeadlineService {

  constructor(private http: HttpClient) { }
  getDeadline(): Observable< deadlineSeconds > {  
    return this.http.get<deadlineSeconds>('/api/deadline');  
  }  
}
