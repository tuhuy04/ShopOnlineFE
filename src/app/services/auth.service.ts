import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { STORAGE_KEY } from '../constants/config';
import { UserInfo } from '../interfaces/userInfo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public redirectUrl: string;
  private apiURL = 'http://localhost:8000/v1/auth';

  constructor(
    private router: Router,
    private storageService: StorageService,
    private http: HttpClient  // Thêm HttpClient vào constructor
  ) { }


  register(userData: any): Observable<any> {
    return this.http.post(`${this.apiURL}/register`, userData);
  }


  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiURL}/login`, credentials);
  }


  saveToken(token: string) {
    return this.storageService.set(STORAGE_KEY.ACCESS_TOKEN, token);
  }


  getToken(): string {
    return this.storageService.get(STORAGE_KEY.ACCESS_TOKEN);
  }


  saveUser(user: UserInfo) {
    return this.storageService.set(STORAGE_KEY.USER_INFO, user);
  }


  getUser() {
    return this.storageService.get(STORAGE_KEY.USER_INFO);
  }


  saveRole(role: number) {
    return this.storageService.set(STORAGE_KEY.ROLE, role);
  }


  getRole(): number {
    return this.storageService.get(STORAGE_KEY.ROLE);
  }


  saveCart(product: any) {
    return this.storageService.set(STORAGE_KEY.CART, product);
  }


  getCart() {
    return this.storageService.get(STORAGE_KEY.CART);
  }


  logout(){
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
