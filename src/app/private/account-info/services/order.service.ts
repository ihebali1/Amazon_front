import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ENDPOINTS } from 'src/app/shared/constants/endpoints';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  getMyOrders(): Observable<any> {
    return this.http.get(
      `${environment.apiUrl}${ENDPOINTS.ORDER.MINE}`
    );
  }

  getOrder(orderId: string):Observable<any>{
    return this.http.get(
      `${environment.apiUrl}${ENDPOINTS.ORDER.GET}/${orderId}`
    );
  }
}
