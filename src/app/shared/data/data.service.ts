import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Student } from '../../model/student';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afs : AngularFirestore) { }

  //add student
  addStudent(sutdent:Student){
    sutdent.id= this.afs.createId();
    return this.afs.collection('/Students').add(sutdent);
    
  }
  // get all students
  getAllStudents(){
    return this.afs.collection('/Students').snapshotChanges();
  }
  // delete student
  deleteStudent(student:Student){
    return this.afs.doc('/Students/'+student.id).delete();
  }
  //updateStudent
  updateStudent(student:Student){
    this.deleteStudent(student);
    this.addStudent(student);
  }
}
