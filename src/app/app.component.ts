import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hive-own';

  constructor(private translate: TranslateService, router: Router, viewportScroller: ViewportScroller) {
    translate.setDefaultLang('en');       // sets fallback language
    translate.use('en');                  // sets current active language

    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        viewportScroller.scrollToPosition([0, 0]);
      }
    });

  }
}
