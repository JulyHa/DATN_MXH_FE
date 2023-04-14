import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import {Users} from "../../model/Users";
import {Observable} from "rxjs";

const API_URL='http://localhost:8080'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }
  login(user: Users):  Observable<Users>{
    return this.httpClient.post<any>(API_URL + '/login', user);
    // let flag = true;
    // .subscribe(user => {
    //   window.localStorage.setItem("user", JSON.stringify(user));
    //   flag = true;
    // }, () => {
    //   flag = false;
    // })
    // return flag;
  }
  register(user: Users): Observable<Users> {
    return this.httpClient.post<Users>(API_URL + '/register', user);
  }
  showAllUser():Observable<Users[]>{
    return this.httpClient.get<Users[]>(API_URL+"/users")
  }
  checkEmailAndPass(user: Users):Observable<Users[]>{
    return this.httpClient.post<any>(API_URL+ "/checkUser", user)
  }

}
