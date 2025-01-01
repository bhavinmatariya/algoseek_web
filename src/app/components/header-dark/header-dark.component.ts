import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-dark',
  standalone: true,
  imports: [CommonModule, RouterLink],
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
