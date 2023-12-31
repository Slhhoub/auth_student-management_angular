import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user!:Observable<any>

  constructor(private fireauth:AngularFireAuth,private router:Router) {
    this.user=fireauth.user;
  }

  //login method
  login(email:string , password:string){
    this.fireauth.signInWithEmailAndPassword(email,password).then(
      (res)=>{
        localStorage.setItem('token','true');
        this.router.navigate(['home']);
        // if(res.user?.emailVerified==true){
        //   this.router.navigate(['home']);
        // }else{
        //   this.router.navigate(['/varify-email']);
        // }
      },
      (err)=>{
        alert('Something went wrong');
        this.router.navigate(['/login']);
      }
    )
  }
  //register method
  register(email:string,password:string){
    this.fireauth.createUserWithEmailAndPassword(email,password).then(
      (res)=>{
        alert('Registration Successful');
        this.router.navigate(['/login']);
        // this.sendEmailForVarification(res.user);
      },
      (err)=>{
        alert(err.message);
        this.router.navigate(['/register']);
      }
    )
  }
  // sign out
  logout(){
    this.fireauth.signOut().then(
      ()=>{
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      },(err)=>{
        alert(err.message);
      }
    )
  }
  // forget Password
  forgetPassword(email:string){
    this.fireauth.sendPasswordResetEmail(email).then(
      ()=>{
        this.router.navigate(['/varify-email']);
      },
      (err)=>{
        alert('Something went wrong');
      }
    )
  }

  //email verification
  sendEmailForVarification(user:any){
    user.sendEmailForVarification().then(
      (res:any)=>{
        this.router.navigate(['/varify-email']);
      },
      (err:any)=>{
        alert('Something went wrong.Not able to send mail to your email');
      }
    )
  }


}
