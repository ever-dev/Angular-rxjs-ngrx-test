import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { UtilsService } from './services/utils.service';
import { NumbersService } from './services/numbers.service';
import { MessagesService } from './services/messages.service';
import { ThemeService } from './services/theme.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AuthService,
    UtilsService,
    NumbersService,
    MessagesService,
    ThemeService
  ]
})
export class SharedModule { }
