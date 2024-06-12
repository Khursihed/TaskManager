import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './screens/dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { ScreensComponent } from './screens/screens.component';
import { CreateTaskComponent } from './screens/create-task/create-task.component';
import { TasksComponent } from './screens/tasks/tasks.component';

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
      }
    ],
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
