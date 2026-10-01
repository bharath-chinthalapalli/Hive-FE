import { Component, ElementRef, signal, ViewChild } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "../../shared/components/header/header.component";
import { MatIcon } from "@angular/material/icon";
import { BenefitsHiveComponent } from "../benefits-hive/benefits-hive.component";
import { Router, RouterLink } from "@angular/router";
import { SlickCarouselModule } from "ngx-slick-carousel";

@Component({
  selector: "app-services-new",
  templateUrl: "./services-new.component.html",
  styleUrls: ["./services-new.component.scss"],
  standalone: true,
  imports: [CommonModule, RouterLink, SlickCarouselModule],
})
export class ServicesNewComponent {
  @ViewChild('servicesGrid') servicesGrid!: ElementRef;

  constructor(private _router: Router) {
  }

  quantum_threats = signal<any[]>([
    {
      image: 'post_quantum.svg',
      title: 'Post-Quantum'
    },
    {
      image: 'zero_overhead.svg',
      title: 'Zero overhead on data size'
    },
    {
      image: 'symmetric.svg',
      title: 'Symmetric'
    },
    {
      image: 'zero_overhead.svg',
      title: 'Asymmetric (public private key)'
    },
    {
      image: 'block_encrypt.svg',
      title: 'Block Encryption'
    },
    {
      image: 'stream_encrypt.svg',
      title: 'Stream Encryption'
    },
    {
      image: 'fast_encrypt.svg',
      title: 'Fast encryption & decryption'
    },
  ]);

  cards = [
    {
      icon: 'services_1.svg',
      title: 'HIVE Encryption Core Module',
      description: 'Integrate our highly optimized HIVE encryption engine directly into your applications and systems for robust, quantum-resistant security.'
    },
    {
      icon: 'services_2.svg',
      title: 'Custom Integration Support',
      description: 'Our expert team provides bespoke support and consultation to seamlessly integrate HIVE encryption into your existing IT architecture.'
    },
    {
      icon: 'services_3.svg',
      title: 'Security Audits & Consultation',
      description: 'Leverage our cryptographic expertise to assess your current security posture and identify how HIVE encryption can enhance your defense strategies.'
    },
    {
      icon: 'services_4.svg',
      title: 'Licensing & Partnership Programs',
      description: 'Explore flexible licensing models and strategic partnership opportunities to bring cutting-edge quantum-safe encryption to your products and services.'
    }
  ];


  slideConfig = {
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    infinite: true,              
    autoplaySpeed: 0,             // no delay between transitions
    speed: 3500,                  
    cssEase: 'linear',            // smooth, continuous animation
    pauseOnHover: true,
    pauseOnFocus: true,
    pauseOnDotsHover: false,
    draggable: true,
    swipe: true,
      adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1740,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  scrollLeft() {
    this.servicesGrid.nativeElement.scrollLeft -= 340;
  }

  scrollRight() {
    this.servicesGrid.nativeElement.scrollLeft += 340;
  }

  navToBenefitsHive() {
    this._router.navigate(['/services/benefits-hive'])
  }

  navToSellAllIndustries() {
    this._router.navigate(['/services/all-industries'])
  }
  navToDemo() {
    this._router.navigate(['/demo'])
  }

}
