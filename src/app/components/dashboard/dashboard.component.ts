import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

  constructor(private auth:AuthService,private route:Router){}

  ngOnInit(): void {

  }

  logout(){
    this.auth.logout();
  }

  adduser(){
    this.route.navigate(['/user/add']);
  }

}
