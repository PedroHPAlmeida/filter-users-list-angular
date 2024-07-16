import { Component, Input } from '@angular/core';
import { User } from '../../types/user/user.type';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {
  @Input({ required: true }) user: User | undefined;
}
