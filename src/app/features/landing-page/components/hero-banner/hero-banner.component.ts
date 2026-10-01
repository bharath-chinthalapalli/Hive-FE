import { Component, inject } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-banner',
  imports: [MatMenuModule],
  templateUrl: './hero-banner.component.html',
  styleUrl: './hero-banner.component.scss'
})
export class HeroBannerComponent {
  private _router = inject(Router);

  navigateToDemo() {
    this._router.navigate(['/demo']);
  }

  onLearnMore() {
    this._router.navigate(['/deep-technical']);
  }
}
