import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

interface LoginResponse {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor(private httpClient: HttpClient) { }

  login(body: LoginResponse) {
    const url = `${environment.SERVICE_API}auth/login`;
    return this.httpClient.post(url, body).toPromise();
  }

  register(body) {
    const url = `${environment.SERVICE_API}auth/register`;
    return this.httpClient.post(url, body).toPromise();
  }


  // refreshToken(body) {
  //   const url = `${environment.SERVICE_API}api/Account/TokenRefresh`;
  //   return this.httpClient.post(url, body);
  // }
}
