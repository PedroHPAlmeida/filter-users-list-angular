import { Component } from '@angular/core';
import { User } from './types/user/user.type';
import { UsersList } from './data/users-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  selectedUser: User | null = null;

  onUserSelected(user: User) {
    this.selectedUser = user;
  }
}
