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
  UsersData:any=[];
  Alltask:any = [];
  lowPriorityTasks: any[]=[];
  MediumPriorityTasks: any[]=[];
  HighPriorityTasks: any[]=[];

  constructor(private dashboard: DashboardService, private router: Router, private fb: FormBuilder) {
  }
  ngOnInit(){
   
    this.dashboard.GetTasks().subscribe(response =>{
      // console.log(response)
      this.Alltask = response;
      var Task=0
    
       this.lowPriorityTasks = this.Alltask.filter((task: { priority: string; }) => task.priority === 'Low');
       this.MediumPriorityTasks = this.Alltask.filter((task: { priority: string; }) => task.priority === 'Medium');
       this.HighPriorityTasks = this.Alltask.filter((task: { priority: string; }) => task.priority === 'High');
console.log(this.HighPriorityTasks.length)
      
      
    })
  }
}
