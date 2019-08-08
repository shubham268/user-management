import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'https://reqres.in/api/';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  postLogin(data):Observable<any>{
    return this.http.post(`${baseUrl}login`,data);
  }

  postRegister(data):Observable<any>{
    return this.http.post(`${baseUrl}register`,data);
  }

  getUsers():Observable<any>{
    return this.http.get(`${baseUrl}users`);
  }

  deleteUser(id):Observable<any>{
    return this.http.delete(`${baseUrl}user/${id}`);
  }
}
