import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  generateToken(credentials:any)
  {
    return this.http.post(`http://localhost:9093/auth/login`,credentials)
  }
  loginUser(token)
  {
    localStorage.setItem("token",token)
    return true;
  }
  //to check user is logged in or not
  isLoggedIn()
  {
    let token=localStorage.getItem("token");
    if(token==undefined || token==='' || token==null)
    {
      return false;
    }
    else
    {
      return true;
      
    }
  }

  logout(){
    localStorage.removeItem('token');
    return true;
  }
  getToken()
  {
    return localStorage.getItem("token")
  }
}


