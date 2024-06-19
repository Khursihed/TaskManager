import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Import RouterModule for router-outlet usage

import { AdminRoutingModule } from './admin-routing.module';
import { MenuComponent } from './menu/menu.component';
import { ScreensComponent } from './screens/screens.component';
import { SharedModule } from "../shared/shared.module";
import { DashboardComponent } from './screens/dashboard/dashboard.component';
import { CreateTaskComponent } from './screens/create-task/create-task.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { ReactiveFormsModule } from '@angular/forms';
import { TasksComponent } from './screens/tasks/tasks.component';
import { GetAllTasksComponent } from './screens/get-all-tasks/get-all-tasks.component';
import { CreateUserComponent } from './screens/create-user/create-user.component';

@NgModule({
    declarations: [
        MenuComponent,
        ScreensComponent,
        DashboardComponent,
        CreateTaskComponent,
        TasksComponent,
        GetAllTasksComponent,
        CreateUserComponent
    ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        SharedModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class AdminModule { }
