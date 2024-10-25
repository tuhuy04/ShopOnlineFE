import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ResponseData } from '../interfaces/response';


export abstract class BaseService {

  table = ''
  _httpClient : HttpClient;
  constructor(
    httpClient: HttpClient,
    tableName: string
  ) {
    this.table = tableName;
    this._httpClient = httpClient;
  }


  layTatca(): Promise<ResponseData> {
    const url = `${environment.SERVICE_API}api/${this.table}/LayTatca`;
    return this._httpClient.get<ResponseData>(url).toPromise();
  }

  create(body) : Promise<ResponseData> {
    const url = `${environment.SERVICE_API}api/${this.table}/ThemMoi`;
    return this._httpClient.post<ResponseData>(url, body).toPromise();
  }

  update(body) : Promise<ResponseData> {
    const url = `${environment.SERVICE_API}api/${this.table}/CapNhatThongTin`;
    return this._httpClient.post<ResponseData>(url, body).toPromise();
  }

  getDetail(id) : Promise<ResponseData> {
    const url = `${environment.SERVICE_API}api/${this.table}/TimTheoId/${id}`;
    return this._httpClient.get<ResponseData>(url).toPromise();
  }

  delete(id) : Promise<ResponseData> {
    const url = `${environment.SERVICE_API}api/${this.table}/Xoa/${id}`;
    return this._httpClient.post<ResponseData>(url, {}).toPromise();
  }

  timTheoDieuKien(body) {
    const url = `${environment.SERVICE_API}api/${this.table}/TimTheoDieuKien`;
    return this._httpClient.post<ResponseData>(url, body).toPromise();
  }

  timTheoMa(ma) : Promise<ResponseData> {
    const url = `${environment.SERVICE_API}api/${this.table}/TimTheoMa?ma=${ma}`;
    return this._httpClient.get<ResponseData>(url).toPromise();
  }
  
}
