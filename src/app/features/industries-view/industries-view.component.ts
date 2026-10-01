import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-industries-view',
  imports: [CommonModule, RouterLink],
  templateUrl: './industries-view.component.html',
  styleUrl: './industries-view.component.scss'
})
export class IndustriesViewComponent implements OnInit {
  private _activatedRoute = inject(ActivatedRoute);
  industryType = signal<string | null>('');
  
  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((params) => {
      this.industryType.set(params.get('industryType'));
    })
  }

  selectedIndustry = computed(() => {
    const type = this.industryType();
    return type && this.industriesMap[type] ? this.industriesMap[type] : null;
  });

  // view_industry_details_array = signal<any[]>([
  //   {
  //     title: 'Financial Services & Banking',
  //     img: 'financial_services_view_page.svg',
  //     problem: 'High-value transactions, stringent regulations, ever-evolving cyber threats (including quantum), and the need for long-term data archival demand encryption that is not just current, but future-proof.',
  //     hive_solution: '',
  //     key_benefits: 'Enhanced Trust, Robust Fraud Prevention, Seamless Regulatory Compliance, Future-Proof Infrastructure.',
  //     specific_examples: 'Interbank fund transfers, secure online banking platforms, protecting credit card processing, securing investment portfolios, and enhancing blockchain-based financial systems.'
  //   }
  // ]);

  industriesMap: Record<string, IndustryDetails> = {
    financial_services: {
      key: 'financial_services',
      title: 'Financial Services & Banking',
      breadCrumb:'Financial Services',
      img: 'financial_services_view_page.svg',
      problem: 'High-value transactions, stringent regulations, ever-evolving cyber threats (including quantum), and the need for long-term data archival demand encryption that is not just current, but future-proof.',
      hive_solution: [
        {
          listHighlight: 'Quantum-resistant transaction security:',
          listNormal: 'Protects real-time financial transactions against quantum and advanced classical attacks.'
        },
        {
          listHighlight: 'Secure customer data:',
          listNormal: 'Safeguards Personally Identifiable Information (PII) and sensitive account details with unparalleled encryption strength.'
        },
        {
          listHighlight: 'Regulatory compliance:',
          listNormal: 'Helps meet and exceed compliance requirements for data privacy.'
        },
        {
          listHighlight: 'Fraud prevention:',
          listNormal: 'Reduces the risk of data compromise that could lead to financial fraud.'
        },
      ],
      key_benefits: 'Enhanced trust, robust fraud prevention, seamless regulatory compliance, future-proof infrastructure.',
      specific_examples: 'Interbank fund transfers, secure online banking platforms, protecting credit card processing, securing investment portfolios, and enhancing blockchain-based financial systems.'
    },

    government_defense: {
      key: 'government_defense',
      title: ' Government & Defense',
      breadCrumb:'Government & Defense',
      img: 'government_details.svg',
      problem: 'Classified information, critical national infrastructure, intelligence data, and secure military communications face constant, sophisticated threats, including state-sponsored cyberattacks and the impending quantum threat.',
      hive_solution: [
        {
          listHighlight: 'Top-secret data protection:',
          listNormal: 'Secures highly classified and sensitive government data at rest and in transit.'
        },
        {
          listHighlight: 'Quantum-resistant communications:',
          listNormal: 'Ensures secure voice, video, and data communications for military and intelligence operations, even against quantum adversaries.'
        },
        {
          listHighlight: 'Critical infrastructure defense:',
          listNormal: 'Protects vital systems (e.g., energy grids, water supply, command centers) from cyber warfare.'
        },
        {
          listHighlight: 'Unassailable secrecy:',
          listNormal: 'Its non-mathematical basis offers an unprecedented layer of defense against advanced cryptanalysis.'
        },
      ],
      key_benefits: 'National security fortification, absolute confidentiality, strategic resilience, quantum-safe operations.',
      specific_examples: 'Encrypting diplomatic communications, securing classified document archives, protecting satellite data links, safeguarding defense systems from cyber espionage, and securing battlefield communications.'
    },

    healthcare_industries: {
      key: 'healthcare_industries',
      title: 'Healthcare',
        breadCrumb:'Healthcare',
      img: 'health_care_details.svg',
      problem: 'Healthcare organizations handle vast amounts of highly sensitive Protected Health Information (PHI) and critical medical research data.Compliance with regulations  is strict, and data breaches can have severe consequences for patient trust and legal standing.',
      hive_solution: [
        {
          listHighlight: 'Absolute patient data privacy:',
          listNormal: 'Ensures the confidentiality and integrity of electronic health records (EHR) and other PHI.'
        },
        {
          listHighlight: 'Secure telemedicine:',
          listNormal: 'Provides robust encryption for real-time video consultations and data sharing in telehealth platforms.'
        },
        {
          listHighlight: 'Research data integrity:',
          listNormal: 'Protects sensitive medical research, clinical trial data, and genomic information from unauthorized access.'
        },
        {
          listHighlight: 'Regulatory assurance:',
          listNormal: 'Helps organizations meet stringent compliance requirements.'
        },
      ],
      key_benefits: 'Enhanced patient trust, regulatory compliance, data integrity, future-proof privacy.',
      specific_examples: 'Secure storage and transmission of EHRs, encrypted communications for telemedicine, protecting medical imaging data, securing genomic research databases, and safeguarding hospital IT networks.'
    },

    iot_edge: {
      key: 'iot_edge',
      title: 'IoT & Edge Computing',
      breadCrumb:'IoT & Edge Computing',
      img: 'iot_details.svg',
      problem: 'IoT devices often have limited processing power and memory, making traditional heavy encryption challenging. Yet, they collect vast amounts of sensitive data, demanding strong, real-time security at the edge, even against emerging quantum threats.',
      hive_solution: [
        {
          listHighlight: 'Lightweight Footprint:',
          listNormal: 'Its minimal memory usage (e.g., 16KB) makes it ideal for resource-constrained devices.'
        },
        {
          listHighlight: 'High-Speed Edge Encryption:',
          listNormal: 'Enables real-time data encryption and decryption directly on devices, crucial for operational technology.'
        },
        {
          listHighlight: 'Quantum-Resistant Device-to-Cloud:',
          listNormal: 'Secures data from the point of origin to the cloud, protecting against future quantum attacks.'
        },
        {
          listHighlight: 'Dynamic Security for Fleets:',
          listNormal: 'Map tuning allows for unique, session-specific encryption even across massive device deployments.'
        },
      ],
      key_benefits: 'Efficient Edge Security, Scalable IoT Protection, Real-time Performance, Quantum-Safe IoT.',
      specific_examples: 'Securing smart home sensors and actuators, industrial IoT (IIoT) control systems, connected vehicle data, smart city infrastructure, and remote environmental monitoring.'
    },

    cloud_data_centers: {
      key: 'cloud_data_centers',
      title: 'Cloud Computing & Data Centers',
      breadCrumb:'Cloud & Data Centers',
      img: 'cloud_details.svg',
      problem: 'Cloud environments and data centers store and process massive volumes of sensitive data, making them prime targets.Ensuring data confidentiality and integrity across complex, distributed infrastructures is a monumental task, compounded by the quantum threat.',
      hive_solution: [
        {
          listHighlight: 'Hyperscale data encryption:',
          listNormal: 'Capable of encrypting over 1 x 10^2,982 Exabytes of data, suitable for the largest data lakes and archives'
        },
        {
          listHighlight: 'Data at rest & in transit:',
          listNormal: 'Provides robust encryption for data stored on servers, databases, and transferred across networks within and between data centers.'
        },
        {
          listHighlight: 'Quantum-resistant cloud:',
          listNormal: 'Future-proofs cloud data against the capabilities of quantum computers.'
        },
        {
          listHighlight: 'High throughput:',
          listNormal: 'Its speed ensures that even high-volume data streams are encrypted efficiently without performance bottlenecks.'
        },
      ],
      key_benefits: 'Comprehensive cloud security, scalable data protection, quantum-safe storage, performance without compromise.',
      specific_examples: 'Encrypting multi-tenant cloud storage, securing virtual machine instances, protecting data in SaaS applications, encrypting database backups, and securing inter-data center communication links.'
    },

    r_d_industries: {
      key: 'r_d_industries',
      title: 'Research & Development (R&D) & Intellectual Property (IP) Protection',
      breadCrumb:'R&D and IP Protection',
      img: 'research_details.svg',
      problem: 'Proprietary research, trade secrets, unpatented designs, and sensitive R&D data are invaluable assets constantly targeted by corporate espionage and cyber theft. The long-term nature of R&D requires encryption that will remain secure for decades.',
      hive_solution: [
        {
          listHighlight: 'Unbreachable IP security:',
          listNormal: 'Provides the highest level of encryption for critical intellectual property and R&D findings.'
        },
        {
          listHighlight: 'Quantum-safe for long-term data:',
          listNormal: 'Ensures that sensitive research data remains protected even against future quantum computing capabilities.'
        },
        {
          listHighlight: 'Secure collaboration:',
          listNormal: 'Enables secure sharing of research data among authorized teams and partners.'
        },
        {
          listHighlight: 'Non-mathematical defense:',
          listNormal: 'Offers superior protection against sophisticated attempts to reverse-engineer or compromise proprietary algorithms and data.'
        },
      ],
      key_benefits: 'Innovation safeguard, long-term IP protection, secure collaboration, strategic advantage.',
      specific_examples: 'Encrypting design blueprints and schematics, securing scientific experimental results, protecting new drug formulations, safeguarding software source code, and encrypting confidential merger and acquisition data.'
    },

    automotive_industries: {
      key: 'automotive_industries',
      title: 'Automotive (Connected & Autonomous Vehicles)',
      breadCrumb:'Automotive',
      img: 'automotive_details.svg',
      problem: 'Connected and autonomous vehicles generate and exchange vast amounts of sensitive data (V2X communication, sensor data, personal driver information). Protecting this data from hacking, espionage, and manipulation is paramount for safety and privacy.',
      hive_solution: [
        {
          listHighlight: 'Secure V2X communication:',
          listNormal: 'Encrypts vehicle-to-vehicle (V2V), vehicle-to-infrastructure (V2I), and vehicle-to-cloud (V2C) data in real-time.'
        },
        {
          listHighlight: 'Sensor data integrity:',
          listNormal: 'Protects the authenticity and confidentiality of critical sensor data used for autonomous driving.'
        },
        {
          listHighlight: 'Quantum-resistant updates:',
          listNormal: 'Ensures over-the-air (OTA) software updates are securely delivered and protected against future quantum threats.'
        },
        {
          listHighlight: 'Low latency encryption:',
          listNormal: 'High speed for real-time decision-making in autonomous systems.'
        },
      ],
      key_benefits: 'Enhanced vehicle safety, data privacy assurance,quantum-safe mobility, reliable connectivity.',
      specific_examples: 'Encrypting sensor fusion data, securing vehicle diagnostic information, protecting personal driver profiles, authenticating remote commands, and securing firmware updates.'
    },

    critical_infrastructure: {
      key: 'critical_infrastructure',
      title: 'Critical Infrastructure (Energy, Water, Transportation)',
      breadCrumb:'Critical Infrastructure',
      img: 'critical_infrastructure_details.svg',
      problem: 'Operational Technology (OT) and Industrial Control Systems (ICS) that manage essential services (e.g., power grids, water supply, transportation) are increasingly connected and vulnerable to cyberattacks.A breach could lead to widespread disruption and catastrophic consequences.',
      hive_solution: [
        {
          listHighlight: 'Robust OT/ICS Security:',
          listNormal: 'Provides strong, quantum-resistant encryption for SCADA systems and other industrial controls.'
        },
        {
          listHighlight: 'Real-time protection:',
          listNormal: 'High-speed encryption enables secure, low-latency communication crucial for immediate operational responses.'
        },
        {
          listHighlight: 'Resilience against sabotage:',
          listNormal: 'Non-mathematical design makes it extremely difficult for adversaries to compromise control systems.'
        },
        {
          listHighlight: 'Lightweight for legacy systems:',
          listNormal: 'Adaptable for integration into diverse and sometimes older industrial systems.'
        },
      ],
      key_benefits: 'Operational resilience, public Safety assurance, quantum-safe control, enhanced stability',
      specific_examples: 'Securing smart grid communications, protecting water treatment plant controls, encrypting railway signaling systems, securing air traffic control communications, and safeguarding oil and gas pipelines.'
    },

    telecommunications_industries: {
      key: 'telecommunications_industries',
      title: 'Critical Infrastructure (Energy, Water, Transportation)',
      breadCrumb:'Tele Communications',
      img: 'telecommunications_details.svg',
      problem: 'Telecom networks are fundamental to global communication, carrying massive volumes of sensitive voice, video, and data traffic.Protecting this infrastructure from interception and ensuring uninterrupted service are critical challenges, especially with the rise of quantum computing.',
      hive_solution: [
        {
          listHighlight: 'Quantum-resistant traffic encryption:',
          listNormal: 'Secures voice, video, and data communication across 4G, 5G, and future networks against quantum attacks.'
        },
        {
          listHighlight: 'High-speed data flow:',
          listNormal: 'Its superior performance ensures encryption doesnt create bottlenecks in high-throughput network environments.'
        },
        {
          listHighlight: 'Network infrastructure protection:',
          listNormal: 'Secures control planes, signaling systems, and critical network elements from unauthorized access and tampering.'
        },
        {
          listHighlight: 'End-to-end communication security:',
          listNormal: 'Provides robust encryption for user-to-user communications.'
        },
      ],
      key_benefits: 'Secure network backbone, future-proof communications, enhanced privacy, service continuity.',
      specific_examples: 'Encrypting 5G network slices, securing mobile device communications, protecting network management interfaces, encrypting data on fiber optic backbones, and ensuring secure routing information.'
    },
  };
}

type Solution = {
  listHighlight: string;
  listNormal: string;
};

type IndustryDetails = {
  key: string;
  title: string;
  img: string;
  breadCrumb:string;
  problem: string;
  hive_solution: Solution[];
  key_benefits: string;
  specific_examples: string;
};
