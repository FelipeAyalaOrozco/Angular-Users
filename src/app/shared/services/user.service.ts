import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {Constant} from '../classes/Constant'
import {User} from '../models/user'
import { userRegister } from '../models/UserRegister';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) { }
  getUsers():Observable<any>{
    return this._http.get(Constant.API+'/users?page=1')
  }

  getUserById(id:string):Observable<any>{
    return this._http.get(Constant.API+'/users/'+id)
  }

  AddUser(user:User):Observable<any>{
    return this._http.post(Constant.API+'/users',user)
  }
  
  registerUser(body:userRegister):Observable<any>{
    return this._http.post(Constant.API+'/users/',body,Constant.headers);
  }


}
