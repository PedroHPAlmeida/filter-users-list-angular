import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { UserDetailsComponent } from './user-details/user-details.component';
import { CommonModule } from '@angular/common';
import { ToAddressPipe } from '../pipes/to-address/to-address.pipe';

@NgModule({
  declarations: [
    UserDetailsComponent,
    ToAddressPipe,
  ],
  imports: [
    AngularMaterialModule,
    CommonModule,
  ],
  exports: [
    UserDetailsComponent
  ]
})
export class ComponentsModule { }
