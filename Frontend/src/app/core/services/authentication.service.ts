import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Router } from '@angular/router'
import { NodeApi } from '../../../environments/environment.development'; 
@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  constructor(private readonly _http: HttpClient, private readonly _router: Router) { }
 
 // ************************ Login Api ****************** 
  register(obj: any): Observable<any> { 
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._http.post<any>(`${NodeApi}/auth/register`, obj, {headers}) 
  }  
  user_login(obj: any): Observable<any> { 
    return this._http.post<any>(`${NodeApi}/auth/login`, obj) 
  } 
    
  logout(): void {
    localStorage.clear();
    window.location.href = "/login";
  } 


  
  
}