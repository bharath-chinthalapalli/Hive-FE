import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsDetailComponent } from './components/about-us-detail/about-us-detail.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [
    CommonModule,
    AboutUsDetailComponent,
    RouterLink
  ],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {} 