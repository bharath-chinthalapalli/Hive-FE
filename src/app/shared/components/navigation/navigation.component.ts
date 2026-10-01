import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

interface NavigationLink {
  label: string;
  path: string;
  dropdown: string;
  optionMenu: any;
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule, MatMenuModule]
})
export class NavigationComponent implements OnInit {

  menuRefs: string[] = [];
  isMobileMenuOpen = false;
  hoveredItem: string = '';

  navigationLinks: NavigationLink[] = [
    { label: 'Home', path: '', dropdown: 'false', optionMenu: [] },
    { label: 'About Us', path:'about', dropdown: 'false', optionMenu: [] },
    {
      label: 'Services', path:'services', dropdown: 'true',
      optionMenu: [
        {
          option: 'Benefits of Hive',
          route: '/services/benefits-hive'
        },
        {
          option: 'See All Industries',
          route: '/services/all-industries'
        }
      ]
    },
    {
      label: 'Deep Technical', path:'deep-technical', dropdown: 'true',
      optionMenu: [
        {
          option: 'Technical Spectifications',
          route: '/deep-technical/technical_specifications'
        },
        {
          option: 'Algorithm Description',
          route: '/deep-technical/algorithm_description'
        },
        {
          option: 'System Design & Performance',
          route: '/deep-technical/system_design_and_performance'
        },
        {
          option: 'Common Cipher Attacks',
          route: '/deep-technical/common_cipher_attacks'
        },
        {
          option: 'Hive Vs AES',
          route: '/deep-technical/hive_vs_aes'
        },
        {
          option: 'Public-Private Key Capabilities',
          route: '/deep-technical/public_private_key_capabilities'
        }
      ]
    },
    { label: 'Try a Demo', path:'demo', dropdown: 'false', optionMenu: [] }
  ];
  constructor(private router: Router) { }


  ngOnInit(): void {
    // Automatically close mobile menu after navigation
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isMobileMenuOpen = false;
      }
    });

    // Generate dummy refs to bind to [matMenuTriggerFor]
    this.menuRefs = this.navigationLinks.map((_, i) => `menu${i}`);
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  handleLinkClick(): void {
    // No need to set isMobileMenuOpen = false here, handled in NavigationEnd
  }

  handleContactClick(): void {
    // No need to set isMobileMenuOpen = false here, handled in NavigationEnd
  }

  isLinkActive(path: string): boolean {
    return this.router.url === '/' + path || (path === '' && this.router.url === '/');
  }

  navToContent(item: any) {
    const ticketStatus = item.route
    this.router.navigate([ticketStatus]);
    console.log(ticketStatus)
  }


}
