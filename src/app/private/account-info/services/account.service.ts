import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  getClientInfo() {
    return this.http.get(`${environment.apiUrl}clients/mine`);
  }

  updateClientInfo(userData: any) {
    return this.http.patch(`${environment.apiUrl}clients`, userData);
  }

  addAddressToClient(address: any) {
    return this.http.patch(`${environment.apiUrl}clients/addresses/add`, address);
  }

  removeAddressFromClient(addressId: string) {
    return this.http.patch(`${environment.apiUrl}clients/addresses/${addressId}/remove`, {});
  }
}
