import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Router } from '@angular/router'
import { NodeApi } from '../../../environments/environment.development'; 
@Injectable({
  providedIn: 'root'
})

export class DashboardService {

  constructor(private readonly _http: HttpClient, private readonly _router: Router) { }
  get_data():Observable<any>{
    return this._http.get<any>(`${NodeApi}/employees/getemp`)
  }

}