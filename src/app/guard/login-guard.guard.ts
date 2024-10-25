import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';  // Import AuthService để kiểm tra token

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(): boolean {
    const token = this.authService.getToken();

    // Kiểm tra nếu người dùng đã có token (đã đăng nhập)
    if (token) {
      // Nếu đã có token, chuyển hướng người dùng tới trang dashboard hoặc trang chính
      this.router.navigate(['/']);  // Điều hướng về trang dashboard (hoặc trang chính)
      return false;  // Không cho phép truy cập trang login
    }

    // Nếu không có token, cho phép truy cập trang login
    return true;
  }
}
