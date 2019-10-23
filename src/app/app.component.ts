import { Component, OnDestroy } from '@angular/core';

import { Observable, interval, Subscription, combineLatest } from 'rxjs';
import { AuthService } from './shared/services/auth.service';
import { UtilsService } from './shared/services/utils.service';
import { NumbersService } from './shared/services/numbers.service';
import { MessagesService } from './shared/services/messages.service';

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
  numberSubscription: Subscription = null;
  pollingInterval: Observable<number> = interval(1500);
  numberList: number[] = [];
  filter: string = '';

  constructor(private authService: AuthService,
    private utilsService: UtilsService,
    private numbersService: NumbersService,
    private messagesService: MessagesService
  ) {
    // Task1: start or stop polling when network connection changed.
    this.onlineSubscription = utilsService.getOnlineStatus().subscribe(isConnected => {
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

    // Task2
    this.userLoginSubscription = combineLatest(utilsService.getOnlineStatus(),
      this.authService.isLoggedIn(),
      (onlineStatus, isLoggedIn) => ({ onlineStatus, isLoggedIn })).subscribe(({ onlineStatus, isLoggedIn }) => {
        if (onlineStatus && isLoggedIn) {
          console.log('User is online and logged in');
        }
      });

    // Task3
    this.numberSubscription = interval(2000).subscribe(() => {
      this.numbersService.getNumber().subscribe((newNumber) => {
        this.numberList.push(newNumber);
        console.log('Numbers List:', this.numberList);
      }).unsubscribe();
    })
  }

  // Unsubscribe all subscriptions
  ngOnDestroy() {
    this.onlineSubscription.unsubscribe();
    this.userLoginSubscription.unsubscribe();
    if (this.poller) {
      this.poller.unsubscribe();
    }
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
