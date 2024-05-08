import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Brand } from "../models/brand";

@Injectable({
  providedIn: "root",
})
export class BrandService {
  constructor(private http: HttpClient) { }

  getBrands(params?: any): Observable<Brand[]> {
    const queryParams = this.getQueryParams(params);
    return this.http.get<Brand[]>(`${environment.apiUrl}brands${queryParams}`);
  }

  getBrand(id: string): Observable<Brand> {
    return this.http.get<Brand>(`${environment.apiUrl}brands/${id}`);
  }

  getQueryParams(queryParams: any) {
    let url = '';
    let i = 0;
    if(queryParams)
    for (const a in queryParams) {
      if (!i) url += '?';
      if (i) url += '&'; 
      url += a + '=' + queryParams[a];
      i++;
    }
    return url;
  }

}
