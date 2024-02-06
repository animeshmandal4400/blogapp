import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { register } from '../model/register';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  baseUrl="http://localhost:9093/auth/register"
  constructor(private httpcl:HttpClient)  { }
  registerUser(reg:register):Observable<Object>{
    console.log(reg)
    return this.httpcl.post(`${this.baseUrl}`,reg);
  }
}
