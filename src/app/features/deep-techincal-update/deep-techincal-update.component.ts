import { Component, inject, OnInit, signal } from '@angular/core';
import { TechnicalSpecificationsComponent } from "../deep-technical-components/technical-specifications/technical-specifications.component";
import { MatIcon } from '@angular/material/icon';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AlgorithmComponent } from "../deep-technical-components/algorithm/algorithm.component";
import { CommonCipherAttacksComponent } from "../common-cipher-attacks/common-cipher-attacks.component";
import { PublicPrivateKeyCapabilitiesComponent } from "../deep-technical-components/public-private-key-capabilities/public-private-key-capabilities.component";
import { RigorousProofsComponent } from "../rigorous-proofs/rigorous-proofs.component";
import { SystemDesignAndPerformanceComponent } from "../deep-technical-components/system-design-and-performance/system-design-and-performance.component";

@Component({
  selector: 'app-deep-techincal-update',
  imports: [TechnicalSpecificationsComponent, RouterLink, MatIcon, AlgorithmComponent, CommonCipherAttacksComponent, PublicPrivateKeyCapabilitiesComponent, SystemDesignAndPerformanceComponent],
  templateUrl: './deep-techincal-update.component.html',
  styleUrl: './deep-techincal-update.component.scss'
})
export class DeepTechincalUpdateComponent implements OnInit {
  constructor(private router: Router) {}
  private _activatedRoute = inject(ActivatedRoute);
  ticketStatus: string | null = null;
  showTechnicalSpecifications = signal<boolean>(true);
  showAlgorithm = signal<boolean>(false);
  showRigorousProofs = signal<boolean>(false);
  showSystemDesign = signal<boolean>(false);
  showCommonCipher = signal<boolean>(false);
  showPublicPrivateKey = signal<boolean>(false);

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((params) => {
      this.ticketStatus = params.get('ticketStatus');
      if (this.ticketStatus) {
        this.expandSectionByTicketStatus(this.ticketStatus);

        // Scroll after delay (once the section is visible)
        setTimeout(() => {
          const targetElement = document.getElementById(this.ticketStatus!);
          if (targetElement) {
            const yOffset = -100; // Adjust based on header height
            const y = targetElement.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
          } else {
            console.warn('No section found with id:', this.ticketStatus);
          }
        }, 300); // Slightly more delay to allow DOM rendering
      }
    });
  }

  expandSectionByTicketStatus(status: string) {
    this.showTechnicalSpecifications.set(false); // Hide the intro section

    switch (status) {
      case 'algorithm_description':
        this.showAlgorithm.set(true);
        this.showSystemDesign.set(false);
        this.showCommonCipher.set(false);
        this.showPublicPrivateKey.set(false);
        this.showTechnicalSpecifications.set(false);
        break;

      case 'system_design_and_performance':
        this.showSystemDesign.set(true);
        this.showAlgorithm.set(false);
        this.showCommonCipher.set(false);
        this.showPublicPrivateKey.set(false);
        this.showTechnicalSpecifications.set(false);
        break;

      case 'common_cipher_attacks':
        this.showCommonCipher.set(true);
        this.showSystemDesign.set(false);
        this.showAlgorithm.set(false);
        this.showPublicPrivateKey.set(false);
        this.showTechnicalSpecifications.set(false);
        break;

      case 'public_private_key_capabilities':
        this.showPublicPrivateKey.set(true);
        this.showCommonCipher.set(false);
        this.showSystemDesign.set(false);
        this.showAlgorithm.set(false);
        this.showTechnicalSpecifications.set(false);
        break;

      default:
        this.showTechnicalSpecifications.set(true);
        this.showPublicPrivateKey.set(false);
        this.showCommonCipher.set(false);
        this.showSystemDesign.set(false);
        this.showAlgorithm.set(false);

        break;
    }
  }

  openAlgorithm() {
    this.showTechnicalSpecifications.set(false);
    this.showAlgorithm.set(true);
    setTimeout(() => {
      const el = document.getElementById('algorithm_description');
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100); // Delay to allow DOM to render
  }
  closeAlgorithm() {
    this.showTechnicalSpecifications.set(true);
    this.showAlgorithm.set(false);
  }
  openSystemDesign() {
    this.showSystemDesign.set(true);
    this.showTechnicalSpecifications.set(false);
    this.showAlgorithm.set(false);
    setTimeout(() => {
      const el = document.getElementById('system_design_and_performance');
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  }
  closeSystemDesign() {
    this.showSystemDesign.set(false);
    this.showTechnicalSpecifications.set(false);
    this.showAlgorithm.set(true);
  }
  openCommonCipher() {
    this.showCommonCipher.set(true);
    this.showSystemDesign.set(false);
    this.showAlgorithm.set(false);
    this.showTechnicalSpecifications.set(false);
     setTimeout(() => {
      const el = document.getElementById('common_cipher_attacks');
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  }
  closeCommonCipher() {
    this.showCommonCipher.set(false);
    this.showSystemDesign.set(true);
    this.showAlgorithm.set(false);
    this.showTechnicalSpecifications.set(false);
  }

  openPublicPrivateKey() {
    this.showPublicPrivateKey.set(true);
    this.showSystemDesign.set(false);
    this.showAlgorithm.set(false);
    this.showTechnicalSpecifications.set(false);
    this.showCommonCipher.set(false);
     setTimeout(() => {
      const el = document.getElementById('public_private_key_capabilities');
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  }
  closePublicPrivateKey() {
    this.showPublicPrivateKey.set(false);
    this.showSystemDesign.set(false);
    this.showAlgorithm.set(false);
    this.showTechnicalSpecifications.set(false);
    this.showCommonCipher.set(true);
  }

  goToHome() {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/']);
    });
  }
}
