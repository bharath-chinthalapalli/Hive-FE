import { Component, inject, OnInit, signal, ViewChild } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../footer/footer.component";
@Component({
  selector: 'app-tool-bar',
  imports: [CommonModule, RouterModule, RouterOutlet, MatToolbarModule, MatMenuModule, MatIcon, FooterComponent],
  templateUrl: './tool-bar.component.html',
  styleUrl: './tool-bar.component.scss'
})
export class ToolBarComponent implements OnInit {
  @ViewChild('servicesTrigger') servicesTrigger!: MatMenuTrigger;

  menuRefs: string[] = [];
  isMobileMenuOpen = false;
  mobileServicesOpen = false;
  mobileDeepTechOpen = false;
  hoveredMenu: string = '';

  hoveredItem: string = '';
  private _router = inject(Router);

  navigationLinks = signal<any[]>([
    { label: 'Home', path: '', dropdown: 'false', optionMenu: [] },
    { label: 'About Us', path: 'about', dropdown: 'false', optionMenu: [] },
    {
      label: 'Services', path: 'services', dropdown: 'true',
      optionMenu: [
        {
          option: 'Benefits of HIVE',
          route: '/services/benefits-hive'
        },
        {
          option: 'See All Industries',
          route: '/services/all-industries'
        }
      ]
    },
    {
      label: 'Deep Technical', path: 'deep-technical', dropdown: 'true',
      optionMenu: [
        {
          option: 'Technical Specifications',
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
          option: 'HIVE Vs AES',
          route: '/deep-technical/hive_vs_aes'
        },
        {
          option: 'Public-Private Key Capabilities',
          route: '/deep-technical/public_private_key_capabilities'
        }
      ]
    },
    { label: 'Try a Demo', path: 'demo', dropdown: 'false', optionMenu: [] }
  ]);


  optionMenu = signal<any[]>([
    {
      option: 'Benefits of HIVE',
      route: '/services/benefits-hive'
    },
    {
      option: 'See All Industries',
      route: '/services/all-industries'
    }
  ]);

  deepTechincalOptionMenu = signal<any[]>([
    {
      option: 'Technical Specifications',
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
    // {
    //   option: 'HIVE Vs AES',
    //   route: '/deep-technical/hive_vs_aes'
    // },
    {
      option: 'Public-Private Key Capabilities',
      route: '/deep-technical/public_private_key_capabilities'
    }
  ]);



  ngOnInit(): void {
    // Automatically close mobile menu after navigation
    this._router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isMobileMenuOpen = false;
      }
    });

    // Generate dummy refs to bind to [matMenuTriggerFor]
    this.menuRefs = this.navigationLinks().map((_, i) => `menu${i}`);
  }

  isLinkActive(path: string): boolean {
    return this._router.url === '/' + path || (path === '' && this._router.url === '/');
  }
  navToContent(item: any) {
    const ticketStatus = item.route
    this._router.navigate([ticketStatus]);
    console.log(ticketStatus)
  }

  //   openMenu(trigger: any) {
  //   setTimeout(() => trigger.openMenu(), 100);
  // }

  // closeMenu(trigger: any) {
  //   setTimeout(() => trigger.closeMenu(), 200);
  // }


  openServices(): void {
    this.servicesTrigger.openMenu();
  }

  closeServices(): void {
    this.servicesTrigger.closeMenu();
  }



}
