import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(private httpClient: HttpClient) { }

  listUser(pagination: {
    pageCurrent: number,
    pageSize: number,
    order?: string, search?: string
  }): Promise<any> {
    const url = `${environment.SERVICE_API}/get-user/?pageCurrent=${pagination.pageCurrent}&pageSize=${pagination.pageSize}&searchValue=${pagination.search}`;

    return this.httpClient.get(url).toPromise();
  }

  addUser(data: any): Promise<any> {
    const url = `${environment.SERVICE_API}/add-user/`;

    return this.httpClient.post(url, data).toPromise();
  }

  editUser(data: any): Promise<any> {
    // const user_id = data?.id;
    const url = `${environment.SERVICE_API}/update-user/`;

    return this.httpClient.put(url, data).toPromise();
  }


  deleteUser(data: any): Promise<any> {
    const options = {
      body: {
        id: data.id
      }
    };
    const url = `${environment.SERVICE_API}/delete-user/`;

    return this.httpClient.delete(url, options).toPromise();
  }


}