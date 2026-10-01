import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-public-private-key-capabilities',
  imports: [],
  templateUrl: './public-private-key-capabilities.component.html',
  styleUrl: './public-private-key-capabilities.component.scss'
})
export class PublicPrivateKeyCapabilitiesComponent {

  private _router = inject(Router);

  list = signal<any[]>([
    {
      listItem: "Traditional Asymmetric Encryption's Reliance on Math",
      subListItem: [
        {
          subItem: 'In systems like RSA, the public key is mathematically derived from two large prime numbers, and the private key is another number mathematically related to these primes (e.g., modular inverse).The security relies on the difficulty of reversing this mathematical derivation (e.g., factoring the large number from the public key to find the primes).',
        },
        {
          subItem: 'Similarly, ECC relies on the difficulty of the elliptic curve discrete logarithm problem.The public key is a point on a curve derived from the private key through a specific mathematical operation.',
        },
      ]
    },
    {
      listItem: "HIVE's Non-Mathematical Asymmetric Approach:",
      subListItem: [
        {
          subItem: "HIVE encryption shifts away from this mathematical dependency entirely. Instead of numbers related by equations, HIVE's public and private 'keys' are established through specific, distinct configurations or values within the HIVE map's cells.",
        },
        {
          subItem: 'The core idea is that the HIVE map itself can contain specific "markers" or "paths" that define public and private components, but these components are not mathematically computable from one another.',
        },
      ]
    },
    {
      listItem: "Public/Private Key Generation within the HIVE Map:",
      subListItem: [
        {
          subItem: '<strong class="text-[#231F20]">Specific cell configurations:</strong> Imagine that within the vast multi-dimensional HIVE map, certain "Encryption Cells" can be designated with a "public" value and others with a "private" value, or even a cell containing both a public and a private component without a direct mathematical link between them.',
        },
        {
          subItem: "<strong class='text-[#231F20]'>Public/private paths/configurations:</strong> A 'public key' in HIVE could be a specific, complex configuration of accessible cells or a defined 'public path' through the map. The corresponding 'private key' would be a different, inaccessible (without specific knowledge) configuration or a 'private path' that is inherently linked to the public one structurally within the map's unique design, but not mathematically derivable from it.",
        },
        {
          subItem: "<strong class='text-[#231F20]'>No mathematical derivation: </strong>Crucially, the system is designed such that you cannot compute the private part from the public part through a mathematical function. Their relationship is embedded in the inherent spatial arrangement and the random coupling of values within the specific cells of the HIVE Map itself.",
        },
      ]
    },
    {
      listItem: 'How it Works for Secure Exchange (Conceptual):',
      subListItem: [
        {
          subItem: "<strong class='text-[#231F20]'>Encryption with public part:</strong> To send a secure message, Alice would use Bob's 'public part' (which could be a specific set of cell values, or a way to traverse the map publically) to encrypt her message within the framework of the HIVE map. This public part guides the encryption along a path that leads to a specific ciphertext, but only by traversing using a complementary 'private part' can the original message be revealed.",
        },
        {
          subItem: "<strong class='text-[#231F20]'>Decryption with private part:</strong> Bob, possessing the corresponding 'private part' (which is inherently linked to the public part through the unique structure of the HIVE Map but not mathematically derivable from it), would use it to decrypt the message by navigating the same Hive Map. The private part's uniqueness allows only Bob to follow the exact decryption path or access the necessary inverse transformations within the specific, randomly coupled cells of his map.",
        },
        {
          subItem: "<strong class='text-[#231F20]'>The 'secret' is the map's Internal Structure/Path:</strong> The 'secret' isn't a prime number or a point on a curve, but the intricate and unique random couplings within the HIVE map's cells, combined with the specific private configurations or paths that are non-mathematically tied to their public counterparts."
        }
      ]
    },
  ]);

  navToContact() {
    this._router.navigate(['/contact']);
  }
}
