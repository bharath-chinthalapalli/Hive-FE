import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-common-cipher-attacks',
  imports: [],
  templateUrl: './common-cipher-attacks.component.html',
  styleUrl: './common-cipher-attacks.component.scss'
})
export class CommonCipherAttacksComponent {

  commonListArray = signal<any[]>([
    {
      sNo : '1',
      attack : 'Exhaustive Search (Brute Force Attack)',
      description :'Exposing the inner state of the systems such as encryption key or encryption functions by applying and analyzing all possible input.',
      impactHive:'Given the complexity of the present invention and design, theoretically it would take more than 8.5x109,608 year to discover the encryption function and more than 2x10264 years to break the key using brute force attack using the power of the most powerful supercomputers available nowadays that can do up to 33.86×10¹5 Floating-Point Operations Per Second (FLOPS)'
    },
      {
      sNo : '2',
      attack : 'Re-used Key Attack',
      description :'Extracting the plain text by sending two messages A and B using the same key and through working out the logical relationship between the key and the cipher of the two messages using XOR function',
      impactHive:'No impact as there is no mathematical relationship between the cells in the encryption key/path.'
    },
     {
      sNo : '3',
      attack : 'Bit-Flipping (Fault Attack)',
      description :'Altering the content of the plain text by combining known part of the cipher text with a new message using XOR relationship to yield a desired outcome',
      impactHive:'No predictable result can be achieved as there is no relationship between the plain text and cipher text, which removes any controlled impact. However this can result in disrupting the plain that can result in a general denial of service type of attack.'
    },
    {
      sNo : '4',
      attack : 'Algebraic Attack ',
      description :'Used in stream cipher that is based on linear feedback shift registers (LFSR) and it aims at finding and resolving set of low degree equation derived from the key and the cipher in order to expose the key',
      impactHive:'No impact as there is no mathematical relationship between the cells in the encryption key/path.'
    },
    {
      sNo : '5',
      attack : 'Correlation Attack ',
      description :'Used in stream cipher that is based on linear feedback shift registers (LFSR) and it aims at exposing any statistical dependencies between the key and the cipher text. ',
      impactHive:'No impact as there is no statistical relationship between the cells in the encryption key/path.'
    },
    {
      sNo : '6',
      attack : 'Distinguishing Attack ',
      description :'Using a linear function to distinguish the cipher distribution from the random distribution.',
      impactHive:'Further research might be needed to determine the impact'
    },
    {
      sNo : '7',
      attack : 'Chosen-IV Attack',
      description :'This attacks aims at extracting the initialization vector from the memory of linear feedback shift registers (LFSR) in order to exploit the weakness in the key scheduling algorithm by finding and resolving system of equations.',
      impactHive:'No impact as there is no mathematical relationship between the cells in the encryption key/path.'
    },
    {
      sNo : '8',
      attack : 'Slide Attack ',
      description :'Uses possible relationship in the cipher text by comparing the outcome of two encryption runs at one step shift between the two outcomes.',
      impactHive:'No impact as there is no mathematical relationship between the cells in the encryption key/path.'
    },
    {
      sNo : '9',
      attack : 'Cube Attack',
      description :'Discovers any low degree polynomial between of the output as a function of the key and the plain text in order to derive the key.',
      impactHive:'No impact as there is no mathematical relationship between the cells in the encryption key/path.'
    },
    {
      sNo : '10',
      attack : 'Guess and Determine Attack',
      description :'Guesses as set of the state elements of the cryptosystem and compares it with resulting key sequences with complexity up to 2224 ',
      impactHive:'Limited and manageable given the complexity of the present invention and design, theoretically it would take more than 8.5×109,608 year to discover the element of the cryptosystem using the power of the most powerful supercomputers available nowadays. '
    }
  ]);
}
