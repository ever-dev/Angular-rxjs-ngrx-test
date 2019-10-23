import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { UtilsService } from './services/utils.service';
import { NumbersService } from './services/numbers.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AuthService,
    UtilsService,
    NumbersService
  ]
})
export class SharedModule { }
