import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChangePasswordService {

  constructor(private http:HttpClient, private router: Router) { }
  changePassword(password:any){
    return this.http.patch(`${environment.apiUrl}auth/change-password`,password)
  }
  logout() {
    localStorage.clear();
    this.router.navigate([
      '/public/auth/login'
    ]);
  }
}
