import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../environments/environment.development";
import {catchError, Observable, retry, throwError} from "rxjs";
import {CountUsers, ModelAddUser, User} from "../Entity/Services/models/User";

@Injectable({
  providedIn: 'root'
})
export class UserRequestService {
  private readonly _urlUser: string;
  private readonly _getCountUsers: string;


  constructor(private http:HttpClient) {
    this._urlUser =   environment.host + environment.apiMethods.User;
    this._getCountUsers =environment.host + environment.apiMethods.GetCountUsers;

  }

  GetUser(pages: number): Observable<User[]> {
    const params = new HttpParams().set('pages', pages.toString());
    return this.http.get<User[]>(this._urlUser, { params });
  }

  GetCountUser(): Observable<CountUsers> {
    return this.http.get<CountUsers>(this._getCountUsers);
  }

  AddUser(dtoUser: ModelAddUser): Observable<User> {
    return this.http.post<User>(this._urlUser, dtoUser);
  }
}



