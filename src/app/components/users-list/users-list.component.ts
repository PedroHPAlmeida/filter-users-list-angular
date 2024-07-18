import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '../../types/user/user.type';
import { UsersList } from '../../data/users-list';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {
  users: User[] = UsersList;
  displayedColumns: string[] = ['name', 'date', 'status'];

  @Output('onUserSelected') userSelectedEmitt = new EventEmitter<User>();

  onUserSelected(user: User) {
    this.userSelectedEmitt.emit(user);
  }
}
