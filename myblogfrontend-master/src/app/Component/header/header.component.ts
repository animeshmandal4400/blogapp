import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../Service/auth.service';
import { LoginService } from '../../Service/login.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private temp:AuthService,private log:LoginService){}
  isVisible = false;
  toggleVisibility() {
    this.isVisible = !this.isVisible;


  }
  toggleVis() {
    this.log.logout()
    this.isVisible = false;
    this.temp.logout();
    
  }

  

}
