import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent implements OnInit{

  forgotpassword!:FormGroup;

  constructor(private fb:FormBuilder,private auth:AuthService) {}

  ngOnInit(): void {
    this.checkValidation();
  }

  checkValidation(){
    this.forgotpassword= this.fb.group({
      email : ['',[Validators.required,Validators.email]],
    });
  }

  forgotPassword(user:any){
    this.auth.forgetPassword(user.email);
  }
}
