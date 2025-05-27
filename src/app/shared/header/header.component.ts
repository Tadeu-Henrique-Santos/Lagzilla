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
    { label: 'Todos os Jogos', link: '/app-games', icon: '🎮' },
    { label: 'Login Cliente', link: 'app-pessoa-login', icon: '👤' },
    { label: 'Login Admin', link: '.app-pessoa-login', icon: '🔐' }
  ];

  toggleMenu() {this.showMobileMenu = !this.showMobileMenu;
  }
}