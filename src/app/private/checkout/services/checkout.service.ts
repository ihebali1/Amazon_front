import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaymentIntent } from '@stripe/stripe-js';
import { Observable } from 'rxjs';
import { ENDPOINTS } from 'src/app/shared/constants/endpoints';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private http: HttpClient) { }

  createCharge(shippingInfo: any, cardToken: string): Observable<PaymentIntent> {
    return this.http.post<PaymentIntent>(
      `${environment.apiUrl}${ENDPOINTS.ORDER.POST}`,
      {...shippingInfo, cardToken: cardToken}
    );
  }
}
