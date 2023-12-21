import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../user';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {
  @Input({ required: true }) user!: User;
}
