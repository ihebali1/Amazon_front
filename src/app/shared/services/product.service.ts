import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ENDPOINTS } from "../constants/endpoints";
import { DealProduct } from "../models/deal-product";
import { Product } from "../models/product";
import { SimpleProduct } from "../models/simple-product";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getDepartments() {
    return this.http.get(`${environment.apiUrl}${ENDPOINTS.DEPARTMENT.GET}`);
  }

  getLastviewedProducts() {
    return this.http.get(
      `${environment.apiUrl}${ENDPOINTS.HISTORY.GET_PRODUCTS}`
    );
  }

  createViewHistory(productId: string, type: string) {
    return this.http.post(
      `${environment.apiUrl}${ENDPOINTS.HISTORY.GET_PRODUCTS}`,
      {
        product: productId,
        type: type,
      }
    );
  }

  getDepartmentProducts(departmentId: string) {
    return this.http.get(
      `${environment.apiUrl}${ENDPOINTS.PRODUCT.GET}/department/${departmentId}/active`
    );
  }

  getProductActiveDeal(productId: string):Observable<DealProduct> {
    return this.http.get<DealProduct>(
      `${environment.apiUrl}${ENDPOINTS.PRODUCT.GET}/${productId}/active-deal`
    );
  }

  getSameBrand(productId: string, type: string):Observable<any> {
    return this.http.get<any>(
      `${environment.apiUrl}${ENDPOINTS.PRODUCT.GET}/${productId}/same-brand?type=${type}`
    );
  }

  addReview(reviewData: any) {
    return this.http.post(`${environment.apiUrl}reviews`, reviewData);
  }

  getReviews(productId: string, productType: string) {
    return this.http.get(
      `${environment.apiUrl}reviews?product=${productId}&productType=${productType}`
    );
  }

  getRatingStatistics(productId: string, productType: string) {
    return this.http.get(
      `${environment.apiUrl}reviews/rating-statistics?product=${productId}&productType=${productType}`
    );
  }

  getProduct(id: string, type: string) {
    return this.http.get(`${environment.apiUrl}products/${id}?type=${type}`);
  }

  getBuyableTogetherProduct(id: string) {
    return this.http.get(`${environment.apiUrl}orders/product-buyable?id=${id}`);
  }

  getProducts(params: any) {
    const queryParams = this.getQueryParams(params);
    return this.http.get(`${environment.apiUrl}products${queryParams}`);
  }

  getHotNewArrivalProducts(params?: any): Observable<SimpleProduct[]> {
    if(params) {
      const queryParams = this.getQueryParams(params);
      return this.http.get<SimpleProduct[]>(
        `${environment.apiUrl}products/hot-new-arrival${queryParams}`
      );
    }
    return this.http.get<SimpleProduct[]>(
      `${environment.apiUrl}products/hot-new-arrival`
    );
  }

  getQueryParams(queryParams: any) {
    let url = '';
    let i = 0;
    for (const a in queryParams) {
      if (!i) url += '?';
      if (i) url += '&'; 
      url += a + '=' + queryParams[a];
      i++;
    }
    return url;
  }
}
