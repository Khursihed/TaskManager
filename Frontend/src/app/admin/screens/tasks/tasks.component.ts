import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateTaskService } from '../../../core/services/createtask.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  selectedDate:string='';
  TaskData:any = [];
  constructor(private CreateTaskService: CreateTaskService, private router: Router,private fb: FormBuilder) {
  }
  GetTaskByDate(){
    console.log(this.selectedDate);
    this.CreateTaskService.GetTaskById(this.selectedDate).subscribe(responsed =>{
      console.log(responsed)
      this.TaskData = responsed[0]
     
     
    })
  }
}
