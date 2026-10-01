import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-benefits-hive',
  imports: [CommonModule, RouterLink],
  templateUrl: './benefits-hive.component.html',
  styleUrl: './benefits-hive.component.scss'
})
export class BenefitsHiveComponent {


  cardList = signal<any[]>([
    {
      cardTitle: 'Post-Quantum Data Protection:',
      service: 'HIVE can provide post-quantum protection by encrypting data using non-mathematical, indeterministic encryption patterns that are guaranteed to be unique for each encryption process—even when using the same keys and input data. This makes it significantly harder for attackers to decrypt the information, even with the most powerful computers available today.',
      bebefits: 'Combines the utmost protection without compromising performance that makes HIVE the encryption technology of choice for complex and intensive use-cases such as DB encryption and real-data applications.',
      borderColor: 'orange'
    },
    {
      cardTitle: 'Strong File and Data Storage Encryption:',
      service: 'HIVE was designed to provide unique and powerful protection for large and data without running out of unique encryption patterns that are generated infinitely and uniquely for each encryption process with a mathematically infinitely small chance of any repetitions.',
      bebefits: 'Protect large data files and storages while enabling sharing of encrypted data in the public space through the utilization of asymmetric encryptions that allows the encryption of data using unique public key and decryption of data using unique private key.',
      borderColor: 'orange'
    },
    {
      cardTitle: 'Maximum Security for Real-Time High-Performance Encryption:',
      service: "Current stream encryption technologies rely on fixed, mathematically based encryption mechanisms that cannot generate unique encryption patterns, making them vulnerable and limiting their application. Thanks to HIVE's innovative design, it offers unparalleled protection for real-time and stream data due to its efficiency and ability to generate infinite, unique encryption patterns with a mathematically infinitesimal probability of repetition. This makes HIVE an ideal choice for encrypting data in real-time applications.",
      bebefits: 'HIVE can widen the uses of efficient, cheap and strong encryption for stream and real-time applications among large numbers of users due to its asymmetric configurations.',
      borderColor: 'orange'
    },


    {
      cardTitle: 'Secure Communication Protocols:',
      service: 'Underpinning secure messaging, voice calls, and video conferencing by providing the underlying encryption for communication protocols.',
      bebefits: 'Ensures that conversations and shared content remain private and protected from eavesdropping.',
      borderColor: 'black'
    },
    {
      cardTitle: 'Secure IoT Device Communication:',
      service: 'Providing strong, yet lightweight, encryption for data exchange between resource-constrained IoT devices and central platforms or other devices.',
      bebefits: 'Protects sensitive data collected by IoT sensors, controls actuators securely, and prevents device tampering in smart cities, industrial IoT, and connected vehicle environments.',
      borderColor: 'black'
    },
    {
      cardTitle: 'Enhanced Public-Private Key Infrastructure (PKI):',
      service: 'Offering a new paradigm for asymmetric encryption, potentially enhancing digital signatures, secure key exchange, and identity verification.',
      bebefits: 'Provides a quantum-resistant alternative or augmentation to current PKI systems for authentication and non-repudiation',
      borderColor: 'black'
    },


    {
      cardTitle: 'Critical Infrastructure Protection:',
      service: 'Securing operational technology (OT) and industrial control systems (ICS) from cyber threats.',
      bebefits: 'Protects vital national assets like power grids, water treatment plants, and transportation networks from sophisticated cyberattacks, preventing disruptions and ensuring public safety.',
      borderColor: 'orange'
    },
    {
      cardTitle: 'Intellectual Property (IP) and Sensitive Research Data Protection:',
      service: 'Encrypting proprietary designs, research findings, trade secrets, and confidential corporate data.',
      bebefits: 'Prevents corporate espionage and unauthorized access to valuable R&D and business-critical information.',
      borderColor: 'orange'
    },
    {
      cardTitle: 'Regulatory Compliance and Data Privacy:',
      service: 'Helping organizations meet stringent data protection regulations by providing a robust encryption layer.',
      bebefits: 'Reduces legal and financial risks associated with data breaches and non-compliance.',
      borderColor: 'orange'
    },
  ]);
}
