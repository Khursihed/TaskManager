import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { AllTaskService } from '../../../core/services/AllTasks.service';
@Component({
  selector: 'app-get-all-tasks',
  templateUrl: './get-all-tasks.component.html',
  styleUrl: './get-all-tasks.component.css'
})
export class GetAllTasksComponent {
  Alltask:any = [];
  SortedValue:any = []
  constructor(private AllTaskService: AllTaskService, private router: Router, private fb: FormBuilder) {
  }
  ngOnInit(){
    this.AllTaskService.GetTasks().subscribe(response =>{
      console.log(response)
    //  this.SortedValue = response.sort((a.priority: any, b: any) => b - a);
      this.Alltask = response;
      
    })
  }
}
