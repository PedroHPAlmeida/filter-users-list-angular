import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { UserDetailsComponent } from './user-details/user-details.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    UserDetailsComponent
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
