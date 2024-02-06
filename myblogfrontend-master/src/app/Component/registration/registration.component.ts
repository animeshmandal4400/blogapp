import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { register } from '../../model/register';
import { AuthService } from '../../Service/auth.service';
import { CrudService } from '../../Service/crud.service';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  reg = {
    fName: '',
    lName: '',
    username: '',
    email: '',
    password: '',
    cnfrmPassword: '',
  };
  private flag: boolean = false;

  constructor(private router: Router, private crudServ: CrudService) {}

  private isEmailValid(email: string): boolean {
    // Use a more comprehensive email validator
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }

  onSubmit(reg:register) {
    if (!this.isEmailValid(this.reg.email)) {
      alert('Invalid email format.');
      return; // Stop further execution if email format is invalid
    } else {
      if (this.reg.password !== this.reg.cnfrmPassword) {
        alert('Passwords do not match.');
        return; // Stop further execution if passwords do not match
      } else {
        console.log(this.reg);
        this.router.navigateByUrl('/');
        console.log(reg)
    this.crudServ.registerUser(reg).subscribe(data=>{
      alert("Registration Successful")
    },error=>alert("user is not registered")
    )

  }
}
  }
}