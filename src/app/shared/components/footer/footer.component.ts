import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  private _router = inject(Router);

  footerArray = signal<any[]>([
    {
      title: 'Product',
      navLinks: [
        {
          link: 'Features',
          path:'/services/benefits-hive'
        },
        {
          link: 'Industries We Serve',
          path:'/services/all-industries'
        },
        {
          link: 'Deep Technical',
          path:'/deep-technical'
        },
      ]
    },
    {
      title: 'Company',
      navLinks: [
        {
          link: 'Home',
          path:'/'
        },
        {
          link: 'About Us',
          path:'/about'
        },
        {
          link: 'Services',
          path:'/services'
        },
      ]
    },
    {
      title: 'Resources',
      navLinks: [
        {
          link: 'Help Center',
          path:'/contact'
        }
      ]
    },
  ])

  navToContact() {
    this._router.navigate(['/contact'])
  }
}
