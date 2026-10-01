import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-key-facts-numbers',
  imports: [],
  templateUrl: './key-facts-numbers.component.html',
  styleUrl: './key-facts-numbers.component.scss'
})
export class KeyFactsNumbersComponent {
  private _router = inject(Router);

  allInductriesListNew = signal<any[]>([
    {
      title: 'Security Strength',
      subTitle: 'Est. 4 × 10²⁷¹ yrs to break',
    },
    {
      title: 'Speed',
      subTitle: 'Up to 4× faster than stream encryption',
    },
    {
      title: 'Data Capacity',
      subTitle: 'Encrypts over 10²⁹⁸² Exabytes',
    },
    {
      title: 'Memory Footprint',
      subTitle: 'Minimal 16KB memory footprint',
    }
  ]);

  navToDiveDeeper(){
        this._router.navigate(['deep-technical']);
  }
}
