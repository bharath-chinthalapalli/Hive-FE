import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sell-all-industries',
  imports: [CommonModule, RouterLink],
  templateUrl: './sell-all-industries.component.html',
  styleUrl: './sell-all-industries.component.scss'
})
export class SellAllIndustriesComponent {
  private _router = inject(Router);

  allInductriesListNew = signal<any[]>([
    {
      image: 'financial_services.svg',
      image_white: 'financial_services_white.svg',
      title: 'Financial Services',
      subTitle: 'Uncompromising security for critical transactions',
      row: '1',
      type: 'financial_services'
    },
    {
      image: 'government_defense.svg',
      image_white: 'government_defense_white.svg',
      title: 'Government & Defense',
      subTitle: 'Unbreakable security for national assets',
      row: '1',
      type: 'government_defense'
    },
    {
      image: 'healthcare_industries.svg',
      image_white: 'Healthcare_white.svg',
      title: 'Healthcare',
      subTitle: 'Protecting patient privacy in a quantum age',
      row: '1',
      type: 'healthcare_industries'
    },
    {
      image: 'iot_edge.svg',
      image_white: 'iot_edge_white.svg',
      title: 'IoT & Edge Computing',
      subTitle: 'Lightweight, robust security for connected devices',
      row: '1',
      type: 'iot_edge'
    },
    {
      image: 'cloud_data_centers.svg',
      image_white: 'cloud_data_centers_white.svg',
      title: 'Cloud & Data Centers',
      subTitle: 'Unrivaled security for hyperscale data',
      row: '1',
      type: 'cloud_data_centers'
    },
        {
      image: 'r_d_industries.svg',
      image_white: 'r_d_industries_white.svg',
      title: 'R&D and IP Protection',
      subTitle: 'Protecting your innovation from the ground up.',
      row: '2',
      type: 'r_d_industries'
    },
    {
      image: 'automotive.svg',
      image_white: 'automotive_white.svg',
      title: 'Automotive',
      subTitle: 'Driving secure connectivity in the future of mobility',
      row: '2',
      type: 'automotive_industries'
    },
    {
      image: 'critical_infrastructure.svg',
      image_white: 'critical_infrastructure_white.svg',
      title: 'Critical Infrastructure',
      subTitle: 'Protecting the foundations of society',
      row: '2',
      type: 'critical_infrastructure'
    },
    {
      image: 'tele_communications.svg',
      image_white: 'tele_communications_white.svg',
      title: 'Telecommunications',
      subTitle: 'Securing the Backbone of Digital Communication',
      row: '2',
      type: 'telecommunications_industries'
    },
  ])

  navToIndustries(industryType: any) {
    this._router.navigate(['services', 'all-industries', 'industries-view', industryType]);
  }
}

