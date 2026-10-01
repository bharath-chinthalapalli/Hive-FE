import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThreeDimensionalSection } from '../three-dimensional/three-dimensional';
import { AttackAnalysisTable } from '../attack-analysis/attack-analysis';
import { DesignCriteriaTable } from '../design-criteria/design-criteria';

@Component({
  selector: 'encryption-system',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './encryption-system.component.html',
  styleUrls: ['./encryption-system.component.scss']
})
export class EncryptionSystem {}
