import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';

const routes: Routes = [
  { path:'' , redirectTo:'app', pathMatch:'full'  },
  { path: 'app', component: HeaderComponent,
  children:[
    {path:'', component:LoginComponent},
    {path:'login' , component: LoginComponent, },
    {path:'signup', component: SignupComponent}
          ] 
    },
    {path:'dashboard',redirectTo:'home', pathMatch:'full'  },
    {path:'home',component:DashboardHeaderComponent ,
    children:[
      { path: '', component:DashboardComponent },
        ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
