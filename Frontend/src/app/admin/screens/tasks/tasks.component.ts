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
  ShowData:number=0;
  Id: any[] = [];
    constructor(private CreateTaskService: CreateTaskService, private router: Router,private fb: FormBuilder) {
  }
  GetTaskByDate(){
    this.ShowData = 0
    console.log(this.selectedDate);
    this.CreateTaskService.GetTaskById(this.selectedDate).subscribe(responsed =>{
      console.log(responsed)
      this.TaskData = responsed
     
     
    })
  }
  Edit(Data:any){

    this.ShowData = 1;
    
    this.Id.push(Data)
    console.log(this.Id)

  }
  UpdateData(){
    this.ShowData = 1;
console.log(this.Id[0]._id)
    var obj ={
      "title": this.Id[0].title,
      "description": this.Id[0].description,
      "dueDate": this.Id[0].dueDate,
      "priority": this.Id[0].priority
    }
    console.log(obj)
   if(confirm('Can I Update The Data Admin!')){
    this.CreateTaskService.UpdateTask(this.Id[0]._id,obj).subscribe(res=>{
      console.log(res)
      
    })
   }else{
    return
   }
  }
  Delete(x:any){
    console.log(x)

    if(confirm('Are You Sure To Delete The Data Of This Task?'))
      {
        this.CreateTaskService.DeleteTaskById(x).subscribe(rsponse =>{
          console.log(rsponse)
          location.reload();
        })
      }else{
        return
      }
    }
    Back(){
      history.back()
    }
}
