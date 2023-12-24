import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from '../../../model/student';
import { Router } from '@angular/router';
import { DataService } from '../../../shared/data/data.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent implements OnInit {


  adduser!:FormGroup;

  constructor(private fb:FormBuilder,private route:Router,private dataservice:DataService){}

  ngOnInit(): void {
    this.checkUserValidation();
  }

  checkUserValidation(){
    this.adduser = this.fb.group(
      {
        email : ['',[Validators.required,Validators.email]],
        first_name :['',[Validators.required]],
        last_name :['',[Validators.required]],
        mobile :['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      }
    )
  }

  saveUser(user:Student){
    if(this.adduser.valid){
      this.dataservice.addStudent(user);
      alert(` add ${user.first_name} ${user.last_name} sucess`);
      this.route.navigate(['/users/list'])
    }



  }

}
