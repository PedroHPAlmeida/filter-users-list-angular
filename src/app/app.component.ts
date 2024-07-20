import { Component, OnInit } from '@angular/core';
import { User } from './types/user/user.type';
import { UsersList } from './data/users-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  users: User[] = [];
  selectedUser: User | null = null;

  ngOnInit() {
    setTimeout(() => {
      this.users = UsersList;
    }, 3000);
  }

  onUserSelected(user: User) {
    this.selectedUser = user;
  }
}
