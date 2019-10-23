import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { UtilsService } from './services/utils.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    AuthService,
    UtilsService
  ]
})
export class SharedModule { }
