import { Routes } from "@angular/router";
import { ToolBarComponent } from "./shared/components/tool-bar/tool-bar.component";

export const routes: Routes = [
  {
    path: '',
    component: ToolBarComponent,
    title: 'Hive Own',
    children: [
      {
        path: "",
        loadComponent:()=>import('./features/landing-page/landing-page.component').then(m=>m.LandingPageComponent),
        title: 'Home | Hive Own',
      },
      {
        path: "about",
        loadComponent:()=>import('./features/about-us/about-us.component').then(m=>m.AboutUsComponent),
        title: 'About | Hive Own',
      },
      {
        path: "services",
        loadComponent:()=>import('./features/services-new/services-new.component').then(m=>m.ServicesNewComponent),
        title: 'Services | Hive Own',
      },
      {
        path: "services/benefits-hive",
        loadComponent:()=>import('./features/benefits-hive/benefits-hive.component').then(m=>m.BenefitsHiveComponent),
        title: 'Services | Benefits Hive | Hive Own',
      },
      {
        path: 'services/all-industries',
        loadComponent:()=>import('./features/sell-all-industries/sell-all-industries.component').then(m=>m.SellAllIndustriesComponent),
        title: 'Services | All Industries | Hive Own',
      },
      {
        path:'services/all-industries/industries-view/:industryType',
        loadComponent:()=>import('./features/industries-view/industries-view.component').then(m=>m.IndustriesViewComponent),
        title: 'Services | Industry View | Hive Own',
      },
      {
        path: "contact",
        loadComponent:()=>import('./features/contact-us-new/contact-us-new.component').then(m=>m.ContactUsNewComponent),
        title: 'Contact | Hive Own',
      },
      {
        path: "deep-technical",
        loadComponent:()=>import('./features/deep-techincal-update/deep-techincal-update.component').then(m=>m.DeepTechincalUpdateComponent),
        title: 'Deep Technical | Hive Own',

      },
      {
        path: "deep-technical/:ticketStatus",
        loadComponent:()=>import('./features/deep-techincal-update/deep-techincal-update.component').then(m=>m.DeepTechincalUpdateComponent),
        title: 'Deep Technical | Hive Own',
      },
      {
        path: "demo",
        loadComponent:()=>import('./features/try-demo-new/try-demo-new.component').then(m=>m.TryDemoNewComponent),
        title: 'Try Demo | Hive Own',
      },
    ]
  },

  {
    path: "**",
    redirectTo: "",
  },
];
