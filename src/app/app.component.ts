import { Component } from '@angular/core';

import { Observable, interval, Subscription, fromEvent, merge, of } from 'rxjs';
import { mapTo } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-rxjs-test';
  poller: Subscription = null;


  constructor() {
    this.getOnlineStatus().subscribe(isConnected => {
      if (isConnected) {
        console.log('start polling...');
        this.poller = interval(1500).subscribe(() => this.pollingFunction())
      } else {
        if (this.poller) {
          console.log('stop polling...');
          this.poller.unsubscribe();
        }
      }
    })
  }

  getOnlineStatus(): Observable<boolean> {
    return merge(
      of(navigator.onLine),
      fromEvent(window, 'online').pipe(mapTo(true)),
      fromEvent(window, 'offline').pipe(mapTo(false))
    );
  }

  pollingFunction(): void {
    console.log('polling...');
  }

}
