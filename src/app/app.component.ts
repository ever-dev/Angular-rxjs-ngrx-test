import { Component, OnDestroy } from '@angular/core';

import { Observable, interval, Subscription, fromEvent, merge, of, combineLatest } from 'rxjs';
import { mapTo } from 'rxjs/operators'
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'Angular-rxjs-test';
  poller: Subscription = null;
  onlineSubscription: Subscription = null;
  userLoginSubscription: Subscription = null;
  pollingInterval: Observable<number> = interval(1500);

  constructor(private authService: AuthService) {
    //start or stop polling when network connection changed.
    this.onlineSubscription = this.getOnlineStatus().subscribe(isConnected => {
      if (isConnected) {
        console.log('start polling...');
        this.poller = this.pollingInterval.subscribe(() => this.pollingFunction())
      } else {
        if (this.poller) {
          console.log('stop polling...');
          this.poller.unsubscribe();
          this.poller = null;
        }
      }
    });

    this.userLoginSubscription = combineLatest(this.getOnlineStatus(),
      this.authService.isLoggedIn(),
      (onlineStatus, isLoggedIn) => ({ onlineStatus, isLoggedIn })).subscribe(({ onlineStatus, isLoggedIn }) => {
        if (onlineStatus && isLoggedIn) {
          console.log('User is online and logged in');
        }
      });
  }

  // Unsubscribe all subscriptions
  ngOnDestroy() {
    this.onlineSubscription.unsubscribe();
    this.userLoginSubscription.unsubscribe();
    if (this.poller) {
      this.poller.unsubscribe();
    }
  }

  getOnlineStatus(): Observable<boolean> {
    //check network connection
    return merge(
      of(navigator.onLine),
      fromEvent(window, 'online').pipe(mapTo(true)),
      fromEvent(window, 'offline').pipe(mapTo(false))
    );
  }

  //mockup polling function
  pollingFunction(): void {
    console.log('polling...');
  }

  login(): void {
    this.authService.login();
  }

  logout(): void {
    this.authService.logout();
  }
}
