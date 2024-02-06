import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../Service/auth.service';
import { DataService } from '../Service/data.service';
import { LoginService } from '../Service/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  credentials={
    username:"",
    password:""
  }
  constructor(private jwtSer:LoginService, private router: Router){
  }
  temo:boolean=true;
  checkStatus(d1:string)
  {
    if(d1==null)
    {
      this.temo=false;
      
    }
  }
  onSubmit() 
    {
      if((this.credentials.username!='' && this.credentials.password!='') && (this.credentials.username!=null && this.credentials.password!=null))
      {
        console.log("Login ready to send data to server")
        this.jwtSer.generateToken(this.credentials).subscribe(
          (response:any)=>{
            console.log(response.token)
            this.jwtSer.loginUser(response.token)
            this.router.navigate(['/posts']);
          },
          error=>{
            console.log(error)
            alert("Incorrect username or password")
          } 
        )
      }
      else{
        alert("All are mandatory fields")
      }
    }
}


