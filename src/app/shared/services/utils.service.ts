import { Injectable } from '@angular/core';
import { Observable, fromEvent, of, merge } from 'rxjs';
import { mapTo } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  getOnlineStatus(): Observable<boolean> {
    // check network connection
    return merge(
      of(navigator.onLine),
      fromEvent(window, 'online').pipe(mapTo(true)),
      fromEvent(window, 'offline').pipe(mapTo(false))
    );
  }
}
