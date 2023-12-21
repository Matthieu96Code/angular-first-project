import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { User } from './user';
import { UserListComponent } from './user-list/user-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, UserDetailsComponent, UserListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gdg-app';
  users: User[] = [
    {
      id: 'a2bf',
      name: 'RaKNj',
      sex: 'M'
    },
    {
      id: 'a2aa',
      name: 'AliK',
      sex: 'M'
    },
    {
      id: 'a19f',
      name: 'Ell@d',
      sex: 'F'
    }
  ]

  currenttUser: User = this.users[0];
}
