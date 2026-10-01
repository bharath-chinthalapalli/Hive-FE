import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { HttpRequestInterceptor } from './core/interceptors/http.interceptor';
import { routes } from './app.routes';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { RECAPTCHA_V3_SITE_KEY, RECAPTCHA_SETTINGS } from 'ng-recaptcha';
import { environment } from '../environments/environment';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([HttpRequestInterceptor])
    ),
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      })
    ),
    { provide: RECAPTCHA_V3_SITE_KEY, useValue: environment.recaptcha.siteKeyV3 },
    { provide: RECAPTCHA_SETTINGS, useValue: { siteKey: environment.recaptcha.siteKeyV2 } }
  ]
};
