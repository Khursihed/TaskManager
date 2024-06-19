import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './screens/dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { ScreensComponent } from './screens/screens.component';
import { CreateTaskComponent } from './screens/create-task/create-task.component';
import { TasksComponent } from './screens/tasks/tasks.component';
import { GetAllTasksComponent } from './screens/get-all-tasks/get-all-tasks.component';
import { CreateUserComponent } from './screens/create-user/create-user.component';

const routes: Routes = [
  {
    path:'',
    component: ScreensComponent,
    children:[
      {
        path:'',
        component: DashboardComponent
      },
      {
        path:'dashboard',
        component: DashboardComponent
      },
      {
        path:'create',
        component: CreateTaskComponent
      },
      {
        path:'task',
        component: TasksComponent
      },
      {
        path:'alltask',
        component:GetAllTasksComponent
      },
      {
        path:'user',
        component:CreateUserComponent
      }
    ],
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
