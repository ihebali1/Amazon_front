import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  constructor(private http: HttpClient) { }
  getBanners(type?: string) {
    if (type) return this.http.get(`${environment.apiUrl}banner?type=${type}`)
    else return this.http.get(`${environment.apiUrl}banner`);
  }

  getBanner(id: string) {
     return this.http.get(`${environment.apiUrl}banner/${id}`);
  }
}
