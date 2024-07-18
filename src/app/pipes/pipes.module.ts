import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToAddressPipe } from './to-address/to-address.pipe';
import { ToPhoneNumberPipe } from './to-phone/to-phone-number.pipe';



@NgModule({
  declarations: [
    ToAddressPipe,
    ToPhoneNumberPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ToAddressPipe,
    ToPhoneNumberPipe,
  ]
})
export class PipesModule { }
