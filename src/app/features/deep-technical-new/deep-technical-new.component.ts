import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "../../shared/components/header/header.component";
import { MatExpansionModule } from "@angular/material/expansion";
import { ThreeDimensionalSection } from "./components/three-dimensional/three-dimensional";
import { EncryptionSystem } from "./components/encryption-system.component/encryption-system.component";
import { DesignCriteriaTable } from "./components/design-criteria/design-criteria";
import { AttackAnalysisTable } from "./components/attack-analysis/attack-analysis";

@Component({
  selector: "app-deep-technical-new",
  templateUrl: "./deep-technical-new.component.html",
  styleUrls: ["./deep-technical-new.component.scss"],
  standalone: true,
  imports: [CommonModule, HeaderComponent,MatExpansionModule,ThreeDimensionalSection,EncryptionSystem,DesignCriteriaTable,AttackAnalysisTable ],
})
export class DeepTechnicalNewComponent {
  sections = [
    {
      title: 'Introduction',
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/de104cd88ee31dce2efeab35863e81343cadd0e6?placeholderIfAbsent=true&apiKey=80db7a94ff96497195a901986eba8c45',
      content: 'This section introduces the core concepts.'
    },
    {
      title: 'Algorithm Description',
      
    },
    {
      title: 'Encryption System Design and Performance',
      
    },
    {
      title: 'Conclusion',
      
    }
  ];
  
}
