import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToAddressPipe } from './to-address.pipe';
import { ToPhoneNumberPipe } from './to-phone-number.pipe';
import { StatusPipe } from './status.pipe';
import { ToDashIfEmptyPipe } from './to-dash-if-empty.pipe';



@NgModule({
  declarations: [
    ToAddressPipe,
    ToPhoneNumberPipe,
    StatusPipe,
    ToDashIfEmptyPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ToAddressPipe,
    ToPhoneNumberPipe,
    StatusPipe,
    ToDashIfEmptyPipe,
  ]
})
export class PipesModule { }
