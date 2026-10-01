import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";

@Component({
  selector: "app-try-demo",
  templateUrl: "./try-demo.component.html",
  styleUrls: ["./try-demo.component.scss"],
  standalone: true,
  imports: [CommonModule],
})
export class TryDemoComponent {
  constructor(private router: Router) {}
  navToDemo() {
    this.router.navigate(['/demo']);
  }
}
