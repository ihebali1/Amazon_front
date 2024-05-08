import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";
import { Router } from "@angular/router";
import { User } from "../models/user";
import { environment } from "src/environments/environment";
import { LoginData } from "../models/loginData";
import Swal from "sweetalert2";
@Injectable({
  providedIn: "root",
})
export class AuthService {
  endpoint: string = environment.apiUrl;
  headers = new HttpHeaders().set("Content-Type", "application/json");
  currentUser = {};
  constructor(private http: HttpClient, public router: Router) {}
  // Sign-up
  signUp(user: User): Observable<any> {
    let api = `${this.endpoint}auth/register/client`;
    return this.http.post(api, user);
  }
  // Sign-in
  signIn(user: LoginData) {
    return this.http
      .post<any>(`${this.endpoint}auth/login/client`, user)
      .subscribe(
        (res: any) => {
          localStorage.setItem("access_token", res.accessToken);
          localStorage.setItem("user_data", JSON.stringify(res.user));
          location.replace("public");
        },
        (err) => {
          if (typeof err.error.message == typeof "x")
            Swal.fire(err.error.message, "", "error");
          else Swal.fire("يرجى التحقق من المعطيات", "", "error");
        }
      );
  }
  getToken() {
    return localStorage.getItem("access_token");
  }
  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem("access_token");
    return authToken !== null ? true : false;
  }
  doLogout() {
    let removeToken = localStorage.clear();
      this.router.navigate(["public/auth/login"]).then(
        ()=>location.reload()
      );
      
    
  }
  // User profile
  getUserProfile(id: any): Observable<any> {
    let api = `${this.endpoint}/user-profile/${id}`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }

  isConnected() {
    if (localStorage.getItem("access_token")) {
      return true;
    } else {
      return false;
    }
  }
  // Error
  handleError(error: HttpErrorResponse) {
    let msg = "";
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }

  saveUser(userData: any) {
    localStorage.setItem("user_data", JSON.stringify(userData));
  }
  forgotPassword(email: any) {
    return this.http.post(`${environment.apiUrl}auth/forgot-password`, email);
  }
}
