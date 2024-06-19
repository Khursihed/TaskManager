import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Router } from '@angular/router'
import { NodeApi } from '../../../environments/environment.development'; 
@Injectable({
  providedIn: 'root'
})

export class CreateTaskService {

  constructor(private readonly _http: HttpClient, private readonly _router: Router) { }
  CreateTask(obj:any):Observable<any>{
    
    return this._http.post<any>(`${NodeApi}/CreateTask`, obj)
  }
  GetTaskById(Id:any):Observable<any>{
    console.log(`${NodeApi}/GetByDate/`+Id)
    return this._http.get<any>(`${NodeApi}/GetByDate/`+Id)
  }
  UpdateTask(Id:any, Obj:any):Observable<any>{
    return this._http.put<any>(`${NodeApi}/UpdateTask/${Id}`, Obj)
  }
}