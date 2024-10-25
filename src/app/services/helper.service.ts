import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { ResponseData } from '../interfaces/response';
declare var vgcapluginObject: any;

@Injectable({
  providedIn: 'root'
})

export class HelperService {
  constructor(
    private httpClient: HttpClient
  ) { }

  markFormGroupTouched(formGroup) {
    for (const i in formGroup.controls) {
      if (formGroup.controls.hasOwnProperty(i)) {
        formGroup.controls[i].markAsDirty();
        formGroup.controls[i].updateValueAndValidity();
      }
    }
  }
}
