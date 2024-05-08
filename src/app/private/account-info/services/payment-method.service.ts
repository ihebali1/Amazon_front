import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ENDPOINTS } from 'src/app/shared/constants/endpoints';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentMethodService {

  constructor(private http: HttpClient) { }

  getPaymentMethods() {
    return this.http.get(
      `${environment.apiUrl}${ENDPOINTS.PAYMENT_METHOD.GET}`
    );
  }
}
