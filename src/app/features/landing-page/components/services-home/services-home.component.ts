import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel'
@Component({
  selector: 'app-services-home',
  imports: [CommonModule, SlickCarouselModule],
  templateUrl: './services-home.component.html',
  styleUrl: './services-home.component.scss'
})
export class ServicesHomeComponent {
  @ViewChild('servicesGrid') servicesGrid!: ElementRef;

  services: any[] = [
    {
      number: '1',
      title: 'Key Creation',
      description: 'Generate unique cryptographic keys tailored for secure data exchange.'
    },
    {
      number: '2',
      title: 'Map Creation',
      description: 'Design spatial encryption maps for advanced data pathing.'
    },
    {
      number: '3',
      title: 'Data Encryption',
      description: 'Protect sensitive information with cutting-edge HIVE encryption.'
    },
    {
      number: '4',
      title: 'Data Decryption',
      description: 'Easily decode secured data with trusted key-based access.'
    },
    {
      number: '5',
      title: 'Audit Trail for Encrypted Data',
      description: 'HIVE stands apart from conventional encryption standards by showcasing ciphertext uniqueness and Fourier transform analysis.'
    },
    {
      number: '6',
      title: 'Encrypting Data to be Decrypted by Multiple people',
      description: 'HIVE stands apart from conventional encryption standards by showcasing ciphertext uniqueness and Fourier transform analysis.'
    }
  ];

  scrollLeft(): void {
    if (this.servicesGrid) {
      const scrollAmount = 421 + 24; // card width + gap
      this.servicesGrid.nativeElement.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    }
  }

  scrollRight(): void {
    if (this.servicesGrid) {
      const scrollAmount = 421 + 24; // card width + gap
      this.servicesGrid.nativeElement.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  }

  cards = [
    {
      title: "Inside Hive's Non-Mathematical Encryption Engine",
      date: "21 May 2024",
      category: "Technology Insight",
      image: "insights_1.svg"
    },
    {
      title: "Why Traditional Encryption Struggles with Scale",
      date: "18 May 2024",
      category: "Data Security",
      image: "insights_2.svg"
    },
    {
      title: "How Hive Secures IoT and Edge Devices",
      date: "15 May 2024",
      category: "IoT Security",
      image: "insights_3.svg"
    },
    {
      title: "Comparing RSA, ECC, and Hive Encryption",
      date: "10 May 2024",
      category: "Encryption Comparison",
      image: "insights_4.svg"
    }
  ];

  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 5000, // <- time it takes to animate
    autoplaySpeed: 0, // <- delay between slides
    cssEase: 'linear', // <- smooth linear scroll
    pauseOnHover: false, // optional
    pauseOnFocus: false,
  };


  slickInit(e: any) {
    console.log('slick initialized');
  }

  breakpoint(e: any) {
    console.log('breakpoint');
  }

  afterChange(e: any) {
    console.log('afterChange');
  }

  beforeChange(e: any) {
    console.log('beforeChange');
  }



}
