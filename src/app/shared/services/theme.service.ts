import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import { Theme } from '../shared.interface';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  currentTheme: BehaviorSubject<Theme> = new BehaviorSubject('theme-1');

  constructor() { }

  changeTheme(newTheme: Theme) {
    this.currentTheme.next(newTheme);
  }
  getCurrentTheme(): Observable<Theme> {
    return this.currentTheme.asObservable();
  }
}
