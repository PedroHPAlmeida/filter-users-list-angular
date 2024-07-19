import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToAddressPipe } from './to-address.pipe';
import { ToPhoneNumberPipe } from './to-phone-number.pipe';
import { StatusPipe } from './status.pipe';



@NgModule({
  declarations: [
    ToAddressPipe,
    ToPhoneNumberPipe,
    StatusPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ToAddressPipe,
    ToPhoneNumberPipe,
    StatusPipe,
  ]
})
export class PipesModule { }
