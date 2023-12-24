import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VarifyEmailComponent } from './components/varify-email/varify-email.component';
import { AddUserComponent } from './components/users/add-user/add-user.component';
import { ListComponent } from './components/users/list/list.component';
import { AuthGuardsService } from './shared/guards/auth-guards.service';


const routes: Routes = [
  {path : '' , redirectTo:'login',pathMatch:'full'},
  {path : 'login',component:LoginComponent , title:'login'},
  {path : 'register',component:RegisterComponent , title:'register'},
  {path : 'home',component:DashboardComponent , title:'home',canActivate:[AuthGuardsService]},
  {path : 'forgot-password',component:ForgotPasswordComponent , title:'forgot-password'},
  {path : 'varify-email',component:VarifyEmailComponent , title:'varify-email'},
  {path : 'user/add',component:AddUserComponent , title:'add-user',canActivate:[AuthGuardsService]},
  {path : 'users/list',component:ListComponent , title:'list-users',canActivate:[AuthGuardsService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
