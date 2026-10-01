import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttackAnalysis } from '../../encryption-system-types';

@Component({
  selector: 'attack-analysis-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './attack-analysis.html',
  styleUrls: ['./attack-analysis.scss']
})
export class AttackAnalysisTable {
  attacks: AttackAnalysis[] = [
    {
      id: '1',
      name: 'Exhaustive Search (Brute Force Attack)',
      description: 'Exposing the inner state of the systems such as encryption key or encryption functions by applying and analyzing all possible input.',
      impact: 'Given the complexity of the present invention and design, theoretically it would take more than 8.5x109,608 year to discover the encryption function and more than 2x10264 years to break the key using Brute Force Attack using the power of the most powerful supercomputers available nowadays that can do up to 33.86×10¹5 Floating-Point Operations Per Second (FLOPS)'
    },
    {
      id: '2',
      name: 'Re-used Key Attack',
      description: 'Extracting the plain text by sending two messages A and B using the same key and through working out the logical relationship between the key and the cipher of the two messages using XOR function',
      impact: 'No impact as there is no mathematical relationship between the cells in the encryption key/path.'
    },
    {
      id: '3',
      name: 'Bit-Flipping (Fault Attack)',
      description: 'Altering the content of the plain text by combining known part of the cipher text with a new message using XOR relationship to yield a desired outcome',
      impact: 'No predictable result can be achieved as there is no relationship between the plain text and cipher text, which removes any controlled impact. However this can result in disrupting the plain that can result in a general Denial of Service type of attack.'
    },
    {
      id: '4',
      name: 'Algebraic Attack',
      description: 'Used in stream cipher that is based on Linear Feedback Shift Registers (LFSR) and it aims at finding and resolving set of low degree equation derived from the key and the cipher in order to expose the key',
      impact: 'No impact as there is no mathematical relationship between the cells in the encryption key/path.'
    },
    {
      id: '5',
      name: 'Correlation Attack',
      description: 'Used in stream cipher that is based on Linear Feedback Shift Registers (LFSR) and it aims at exposing any statistical dependencies between the key and the cipher text. ',
      impact: 'No impact as there is no statistical relationship between the cells in the encryption key/path. '
    },
    {
      id: '6',
      name: 'Distinguishing Attack',
      description: 'Using a linear function to distinguish the cipher distribution from the random distribution.',
      impact: 'Further research might be needed to determine the impact'
    },
    {
      id: '7',
      name: 'Chosen-IV Attack',
      description: 'This attacks aims at extracting the Initialization Vector from the memory of Linear Feedback Shift Registers (LFSR) in order to exploit the weakness in the key scheduling algorithm by finding and resolving system of equations.',
      impact: 'No impact as there is no mathematical relationship between the cells in the encryption key/path.'
    },
    {
      id: '8',
      name: 'Slide Attack',
      description: 'Uses possible relationship in the cipher text by comparing the outcome of two encryption runs at one step shift between the two outcomes.',
      impact: 'No impact as there is no mathematical relationship between the cells in the encryption key/path.'
    },
    {
      id: '9',
      name: 'Cube Attack',
      description: 'Discovers any low degree polynomial between of the output as a function of the key and the plain text in order to derive the key.',
      impact: 'No impact as there is no mathematical relationship between the cells in the encryption key/path.'
    },
    // Add all other attacks from the design...
    {
      id: '10',
      name: 'Guess and Determine Attack',
      description: 'Guesses as set of the state elements of the cryptosystem and compares it with resulting key sequences with complexity up to 2224',
      impact: 'Limited and manageable Given the complexity of the present invention and design, theoretically it would take more than 8.5×109,608 year to discover the element of the cryptosystem using the power of the most powerful supercomputers available nowadays.'
    }
  ];
}
