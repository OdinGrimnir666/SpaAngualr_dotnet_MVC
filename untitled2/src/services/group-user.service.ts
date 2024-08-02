import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../environments/environment.development";
import {catchError, Observable, retry, throwError} from "rxjs";
import {User} from "../Entity/Services/models/User";
import {GroupUser} from "../Entity/Services/models/GroupUser";

@Injectable({
  providedIn: 'root'
})
export class GroupUserService {

  private readonly _getGroup: string;

  constructor(private http:HttpClient) {
    this._getGroup =  environment.host + environment.apiMethods.Group;

  }

   GetGroup(): Observable<GroupUser[]> {

    return this.http.get<GroupUser[]>(this._getGroup);
  }

   AddGroup(nameGroup: string) : Observable<GroupUser> {
    return this.http.post<GroupUser>(this._getGroup, {NameGroup: nameGroup});
  }

}
