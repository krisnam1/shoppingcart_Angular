import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl="http://localhost:8090/users" 

  constructor(private http: HttpClient) { }

  saveUserInfo(user:any):Observable<any>{

    return this.http.post(this.baseUrl,user);
  }

  updateUserInfo(user:any):Observable<any>{

    return this.http.put(this.baseUrl,user);
  }

  deleteUserInfo(id:any):Observable<any>{
    return this.http.delete(this.baseUrl+id);
  }

  showUserById(id:any):Observable<any>{
    return this.http.get(this.baseUrl+id);
  }

  showListUser():Observable<any>{
  return this.http.get(this.baseUrl);
  }
}
