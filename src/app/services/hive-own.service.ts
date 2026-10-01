import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { take } from 'rxjs';
import { ContactUs, RequestDemo } from '../modals/hive-modal';

@Injectable({
  providedIn: 'root'
})
export class HiveOwnService {
  private readonly _http = inject(HttpClient);
  private base_url = environment.HIVE_OWN_BASE_URL;
  // base_url ='http://localhost:3000/v1/mail/'

  api_end_points = {
    contact_us: `${this.base_url}contact-us`,
    request_demo: `${this.base_url}request-demo`,
  }
  getContactUs(body:ContactUs){
    return this._http.post<ContactUs>(this.api_end_points.contact_us,body).pipe(take(1))
  }
  getTryDemo(body:RequestDemo){
    return this._http.post<RequestDemo>(this.api_end_points.request_demo,body).pipe(take(1))
  }
}
