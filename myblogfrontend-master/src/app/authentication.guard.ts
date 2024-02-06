import { CanActivateFn, Router } from '@angular/router';

import { inject } from '@angular/core';
import { LoginService } from './Service/login.service';
export const authenticationGuard: CanActivateFn = (route, state) => {
  const jwtSer:LoginService=inject(LoginService)
  const router:Router=inject(Router);
  if(jwtSer.isLoggedIn())
  {
    console.log("you have logged in successfully")
    return true
  }
  else{
    console.log("access denied without token")
    router.navigate(['']);
    return false;
  }
  
};