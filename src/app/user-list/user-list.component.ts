import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserItemComponent } from '../user-item/user-item.component';
import { User } from '../user';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, UserItemComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnChanges {
  @Input() users: User[] = [];

  currentUser!: User;

  ngOnChanges(changes: SimpleChanges): void {
    this.currentUser = this.users[0];
  }
  onDetails(userId: string) {
    console.log('Parent', userId);
  }

}
