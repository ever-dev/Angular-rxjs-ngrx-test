import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { UtilsService } from './services/utils.service';
import { NumbersService } from './services/numbers.service';
import { MessagesService } from './services/messages.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AuthService,
    UtilsService,
    NumbersService,
    MessagesService
  ]
})
export class SharedModule { }
