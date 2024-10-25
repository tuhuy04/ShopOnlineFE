import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { MESSAGE } from 'src/app/constants/message';
import { ResponseData } from 'src/app/interfaces/response';
import { AuthService } from 'src/app/services/auth.service';
import { HelperService } from 'src/app/services/helper.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from 'src/environments/environment';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
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
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required],
      username: ['', Validators.required],
    })
  }

  async register(form) {
    this.helperService.markFormGroupTouched(this.formLogin);
    if (this.formLogin.invalid) {
      return;
    }

    try {
      const body = {
        email: form.email,
        password: form.password,
        username: form.username,
      }

      let response = <any>await this.apiService.register(body);
      if (response.status === 200 && response.dataSave) {
        this.router.navigate(['/login']);
      } else {
        this.notification.error(MESSAGE.ERROR, response.error);
      }
    } catch (err) {
      this.notification.error(MESSAGE.ERROR, MESSAGE.SYSTEM_ERROR);
    }
  }

}
