import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-industries',
  imports: [CommonModule, RouterLink],
  templateUrl: './industries.component.html',
  styleUrl: './industries.component.scss'
})
export class IndustriesComponent {
  private _router = inject(Router);

  industirsCards = signal<any[]>([
    {
      image_gray: 'industries_home/Financial_Services.svg',
      image_black: 'industries_home/Financial_Services_black.svg',
      title: 'Financial Services',
      path:'/services/all-industries/industries-view/financial_services'
    },
    {
      image_gray: 'industries_home/Government_Defense.svg',
      image_black: 'industries_home/Government_Defense_dark.svg',
      title: 'Government & Defense',
      path:'/services/all-industries/industries-view/government_defense'
    },
    {
      image_gray: 'industries_home/Health_care_idustries.svg',
      image_black: 'industries_home/Health_care_idustries_dark.svg',
      title: 'Healthcare',
      path:'/services/all-industries/industries-view/healthcare_industries'
    },

    {
      image_gray: 'industries_home/IoT_Edge_Computing.svg',
      image_black: 'industries_home/IoT_Edge_Computing_white.svg',
      title: 'IoT & Edge Computing',
      path:'/services/all-industries/industries-view/iot_edge'
    },

    {
      image_gray: 'industries_home/Cloud_Data_Centers.svg',
      image_black: 'industries_home/Cloud_Data_Centers_white.svg',
      title: 'Cloud & Data Centers',
      path:'/services/all-industries/industries-view/cloud_data_centers'
    },
  ]);

  navToBenefitsHive() {
    this._router.navigate(['services', 'all-industries']);
  }
}
