import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router, RouterModule } from "@angular/router";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
  standalone: true,
  imports: [CommonModule,RouterModule],
})
export class ContactComponent {
  constructor(private router: Router) {}
  // Navigation items
  productLinks = [
    { name: "Features", route: "/" },
    { name: "Pricing", route: "/" },
    { name: "Documentation", route: "/" },
    { name: "Releases", route: "/" },
  ];

  companyLinks = [
    { name: "Home", route: "/" },
    { name: "About Us", route: "/about" },
    { name: "Services", route: "/services" },
    { name: "Deep Technical", route: "/deep-technical" },
  ];

  resourceLinks = [
    { name: "Community", route: "/" },
    { name: "Help Center", route: "/" },
    { name: "Partners", route: "/" },
  ];

  navigateToDemo() {
    this.router.navigate(['/contact']);
  }

}
