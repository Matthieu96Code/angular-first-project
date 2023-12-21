import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gdg-app';
  name = 'Njarasoa';
  age = 32;
  count = 2;
  tempName = 'N/A';
  mycolor = '';

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  nameChanged(name: string) {
    this.tempName = name;
  }
}
