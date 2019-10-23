import { Injectable } from '@angular/core';
import { Subject, Observable, interval, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NumbersService {

  myNumber$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() {
    interval(500).subscribe(() => {
      console.log('my number changes');
      this.myNumber$.next(Math.floor(Math.random() * 1000));
    });
  }

  getNumber(): Observable<number> {
    return this.myNumber$.asObservable();
  }
}
