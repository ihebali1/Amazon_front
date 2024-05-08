import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ENDPOINTS } from 'src/app/shared/constants/endpoints';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http: HttpClient) { }

  getStoreInfo(vendorId: string) {
    return this.http.get(`${environment.apiUrl}${ENDPOINTS.VENDOR.GET}/${vendorId}`)
  }

  getStoreProducts(vendorId: string) {
    return this.http.get(`${environment.apiUrl}${ENDPOINTS.PRODUCT.GET}?vendor=${vendorId}`)
  }

  getStoreHotNewProducts(vendorId: string) {
    return this.http.get(`${environment.apiUrl}${ENDPOINTS.PRODUCT.GET_HOT_NEW}?vendor=${vendorId}`)
  }
}
