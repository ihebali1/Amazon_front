import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ShippingService {
  constructor(private http: HttpClient) {}

  getStates() {
    return this.http.get(`${environment.apiUrl}states`);
  }

  getShippingCost(stateId: string) {
    return this.http.get(
      `${environment.apiUrl}carts/shipping-cost?state=${stateId}`
    );
  }
}
