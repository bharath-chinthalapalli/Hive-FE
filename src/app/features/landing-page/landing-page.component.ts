import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { TryDemoComponent } from './components/try-demo/try-demo.component';
import { IndustriesComponent } from "./components/industries/industries.component";
import { UnderstandingComponent } from './components/understanding/understanding.component';
import { HeroBannerComponent } from "./components/hero-banner/hero-banner.component";
import { HiveEncryptionComponent } from "./components/hive-encryption/hive-encryption.component";
import { EncryptionReimaginedComponent } from "./components/encryption-reimagined/encryption-reimagined.component";
import { HiveAdvantageNewComponent } from "./components/hive-advantage-new/hive-advantage-new.component";
import { KeyFactsNumbersComponent } from "./components/key-facts-numbers/key-facts-numbers.component";
@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    CommonModule,
    SharedModule,
    TryDemoComponent,
    IndustriesComponent,
    UnderstandingComponent,
    HeroBannerComponent,
    HiveEncryptionComponent,
    EncryptionReimaginedComponent,
    HiveAdvantageNewComponent,
    KeyFactsNumbersComponent
],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  scrollToLearnMore() {
    const element = document.getElementById('learnMoreSection');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
} 