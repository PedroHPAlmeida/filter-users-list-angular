import { Component, OnInit } from '@angular/core';
import { User } from './types/user/user.type';
import { UsersList } from './data/users-list';
import { FilterOptions } from './types/filter-options.type';
import { filterUsers } from './utils/filter-users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  users: User[] = [];
  filteredUsers: User[] = [];
  selectedUser: User | null = null;

  ngOnInit() {
    setTimeout(() => {
      this.users = UsersList;
      this.filteredUsers = this.users;
    }, 1);
  }

  onFilter(filtersOptions: FilterOptions) {
    this.filteredUsers = filterUsers(filtersOptions, this.users);
  }

  onUserSelected(user: User) {
    this.selectedUser = user;
  }
}
