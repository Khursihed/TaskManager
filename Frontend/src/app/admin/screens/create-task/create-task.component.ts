import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateTaskService } from '../../../core/services/createtask.service';
@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css'
})
export class CreateTaskComponent {
  CreateTask:FormGroup;
  constructor(private CreateTaskService: CreateTaskService, private router: Router,private fb: FormBuilder) {
    this.CreateTask = this.fb.group({
      Title: ['', [Validators.required]],
      Date: ['', [Validators.required]],
      Priority: ['', [Validators.required]],
      Textarea: ['', [Validators.required]]
    });
  }
  Create(){
var obj ={
  "title":this.CreateTask.value.Title,
  "description": this.CreateTask.value.Textarea,
  "dueDate": this.CreateTask.value.Date,
  "priority":this.CreateTask.value.Priority
}
console.log(obj)
this.CreateTaskService.CreateTask(obj).subscribe(rsp =>{
  console.log(rsp)
})
  }
}
