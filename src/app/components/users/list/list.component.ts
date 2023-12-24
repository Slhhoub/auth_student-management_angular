import { Component, OnInit } from '@angular/core';
import { Student } from '../../../model/student';
import { DataService } from '../../../shared/data/data.service';
import { AuthService } from '../../../shared/auth.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit{

  SudentList : Student[]=[];
  constructor(private dataservice:DataService,private auth:AuthService){}

  ngOnInit(): void {
    this.getAllSudents();
  }

  getAllSudents(){
    this.dataservice.getAllStudents().subscribe(res=>{
        this.SudentList = res.map((e:any)=>{
          const data = e.payload.doc.data();
          data.id = e.payload.doc.id;
          return data;
        })
      },
      (error)=>{
        alert('Error while fetching student data');
      }
    )
  }

  deleteStudent(student:Student){
    if(window.confirm('Are you sure you want to delee '+ student.first_name + ' '+ student.last_name+'?')){
      this.dataservice.deleteStudent(student);
    }
  }

}
