import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardsService implements CanActivate {

  constructor(private authservice:AuthService , private route:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean |Observable<boolean> | Promise<boolean> {
   return new Promise(resolve=>{
    this.authservice.user.subscribe(
      user =>{
        if(user) resolve(true);
        else{
          this.route.navigate(['/login']);
          resolve(false)
        }
      }
    )
   })
  }


}
