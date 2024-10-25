import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { MESSAGE } from 'src/app/constants/message';
import { AuthService } from 'src/app/services/auth.service';
import { HelperService } from 'src/app/services/helper.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiService } from 'src/app/services/api.service';
import { UserInfo } from 'src/app/interfaces/userInfo';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public formLogin: FormGroup;

  constructor(
    private spinner: NgxSpinnerService,
    private fb: FormBuilder,
    private helperService: HelperService,
    private notification: NzNotificationService,
    private apiService: ApiService,
    private authService: AuthService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]], // Added email validation
      password: ['', Validators.required],
      rememberMe: [false]
    });
  }

  async login(form: { email: string; password: string; rememberMe: boolean }) {
    this.helperService.markFormGroupTouched(this.formLogin);
    if (this.formLogin.invalid) {
      return;
    }
    this.spinner.show();

    try {
      const body = {
        email: form.email.toLowerCase(), // Ensure email is lowercase
        password: form.password
      };

      const response = <UserInfo>await this.apiService.login(body);
      if (response.token) {
        this.authService.saveToken(response.token);
        this.router.navigate(['/']);
      } else {
        this.notification.error(MESSAGE.ERROR, "Lỗi đăng nhập");
      }
    } catch (err) {
      this.notification.error(MESSAGE.ERROR, MESSAGE.SYSTEM_ERROR);
    } finally {
      this.spinner.hide(); // Ensure spinner is hidden after API call
    }
  }

  register() {
    this.router.navigate(['/register']);
  }
}
