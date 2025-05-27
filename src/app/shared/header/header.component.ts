import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  showMobileMenu = false;
  
menuItems = [
  { label: 'Página Inicial', link: '/Header', icon: '🏠' },
  { label: 'Todos os Produtos', link: '/produtos', icon: '🎮' },
  { label: 'Login', link: '/login-admin', icon: '🔑' }
];


  toggleMenu() {this.showMobileMenu = !this.showMobileMenu;
  }
}