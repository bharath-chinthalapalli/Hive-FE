import { Component, inject, signal } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hive-advantage-new',
  imports: [],
  templateUrl: './hive-advantage-new.component.html',
  styleUrl: './hive-advantage-new.component.scss'
})
export class HiveAdvantageNewComponent {
  private _router = inject(Router);

  
  allInductriesListNew = signal<any[]>([
    {
      image: 'Quantum-Resistant.png',
      image_white: 'Quantum-Resistant-white.png',
      title: 'Quantum-Resistant',
      subTitle: 'Built to withstand future quantum attacks.',
    },
    {
      image: 'Non_Mathematical_Core.png',
      image_white: 'Non_Mathematical_Core_white.png',
      title: 'Non-Mathematical Core',
      subTitle: 'Immune to algebraic, correlation, and slide attacks.',
    },
    {
      image: 'Blazing_Fast.png',
      image_white: 'Blazing_Fast_white.png',
      title: 'Blazing Fast',
      subTitle: 'Up to 4x faster than current stream encryption.',
    },
    {
      image: 'Massive_Capacity.png',
      image_white: 'Massive_Capacity_white.png',
      title: 'Massive Capacity',
      subTitle: 'Encrypts exabytes of data.',
    },
    {
      image: 'Unprecedented_Strength.png',
      image_white: 'Unprecedented_Strength_white.png',
      title: 'Unprecedented Strength',
      subTitle: 'Billions of unique paths and keys.',
    }
  ]);

  navToBenefitsHive(){
    this._router.navigate(['services','benefits-hive']);
  }
}
