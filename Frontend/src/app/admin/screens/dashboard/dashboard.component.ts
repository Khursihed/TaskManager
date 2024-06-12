import { Component } from '@angular/core';
import { DashboardService } from '../../../core/services/dashboard.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  UsersData:any=[]
  constructor(private dashboard: DashboardService, private router: Router, private fb: FormBuilder) {
  }
  ngOnInit(){
    this.dashboard.get_data().subscribe(response =>{
      console.log(response)
      this.UsersData = response
    })
  }
}
