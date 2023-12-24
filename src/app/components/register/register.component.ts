import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  UserRegister!:FormGroup;

  constructor(private fb:FormBuilder,private auth:AuthService) {}

  ngOnInit(): void {
    this.checkValidation();
  }

  checkValidation(){
    this.UserRegister= this.fb.group({
      email : ['',[Validators.required,Validators.email]],
      password : ['',[Validators.required,Validators.minLength(6)]],
      rememberMe: [false,Validators.requiredTrue]
    });
  }

  saveUser(user:any){
    console.log(' email : ' + user.email + ' password : ' + user.password);

    this.auth.register(user.email,user.password);
  }

}
