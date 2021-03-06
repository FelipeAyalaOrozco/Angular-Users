import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {TokenService} from './shared/services/token.service'
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class LoginGuard implements CanActivate {
 constructor(private _route:Router,
  private _token:TokenService){}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    if(localStorage.getItem('token')){
      return true;
   }else{
     this._route.navigate(['/']);
   }
  }
  
}
