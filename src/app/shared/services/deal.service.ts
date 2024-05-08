import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ENDPOINTS } from '../constants/endpoints';
import { DealProduct } from '../models/deal-product';
import { DealsTypeEnum } from '../models/deals';

@Injectable({
  providedIn: 'root'
})
export class DealService {

  constructor(private http: HttpClient) {}

  getActiveDealProducts(type?: DealsTypeEnum): Observable<DealProduct[]> {
    if (type) return this.http.get<DealProduct[]>(`${environment.apiUrl}deals/active-products?type=${type}`);
    else return this.http.get<DealProduct[]>(`${environment.apiUrl}deals/active-products`);
  }

  getBrandActiveProducts(brand: string) {
    return this.http.get<DealProduct[]>(`${environment.apiUrl}deals/active-products?brand=${brand}`);
  }

}
