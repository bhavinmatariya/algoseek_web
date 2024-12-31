import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header-dark',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-dark.component.html',
  styleUrl: './header-dark.component.scss',
})
export class HeaderDarkComponent {
  isMobileMenuexpand: boolean = false;

  onMobileMenuexpand() {
    this.isMobileMenuexpand = !this.isMobileMenuexpand;
  }
}
