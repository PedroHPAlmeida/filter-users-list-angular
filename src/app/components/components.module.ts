import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { UserDetailsComponent } from './user-details/user-details.component';
import { CommonModule } from '@angular/common';
import { ToAddressPipe } from '../pipes/to-address/to-address.pipe';
import { ToPhoneNumberPipe } from '../pipes/to-phone-number.pipe';
import { FilterComponent } from './filter/filter.component';
import { FormsModule } from '@angular/forms';
import { UsersListComponent } from './users-list/users-list.component';

@NgModule({
  declarations: [
    UserDetailsComponent,
    ToAddressPipe,
    ToPhoneNumberPipe,
    FilterComponent,
    UsersListComponent,
  ],
  imports: [
    AngularMaterialModule,
    CommonModule,
    FormsModule,
  ],
  exports: [
    UserDetailsComponent,
    FilterComponent,
    FormsModule,
    UsersListComponent,
  ]
})
export class ComponentsModule { }
