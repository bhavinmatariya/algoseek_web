import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header-dark',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-dark.component.html',
  styleUrl: './header-dark.component.scss',
})
export class HeaderDarkComponent {
  isMobileMenuexpand: boolean = false;
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 680;
  }

  onMobileMenuexpand() {
    this.isMobileMenuexpand = !this.isMobileMenuexpand;
  }
}
