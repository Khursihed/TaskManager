import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
// Import your components
import { DashboardComponent } from './admin/screens/dashboard/dashboard.component';
import { AdminModule } from './admin/admin.module';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';

// Define your routes
const routes: Routes = [

  {
    path:'admin',
    loadChildren: () => import('./admin/admin.module').then(module => module.AdminModule),
    canActivate : [AuthGuard]
  }, // Default route
  {
    path:'',component:LoginComponent
  },
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'login',component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AdminModule]
