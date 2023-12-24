import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  UserLogin!:FormGroup;

  constructor(private fb:FormBuilder,private auth:AuthService){}

  ngOnInit(): void {
    this.checkValidation();
  }

  checkValidation(){
    this.UserLogin= this.fb.group({
      email : ['',[Validators.required,Validators.email]],
      password : ['',[Validators.required,Validators.minLength(6)]],
      rememberMe: [false,Validators.requiredTrue]
    });
  }


  loginUser(user:any){
    this.auth.login(user.email,user.password);
  }

}
