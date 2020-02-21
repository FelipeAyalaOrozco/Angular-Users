import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './add-user/add-user.component'
import { LoginGuard } from './login.guard';


const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "index", redirectTo: "" },
  { path: "users", canActivate:[LoginGuard], component: UsersComponent },
  { path: "adduser", canActivate:[LoginGuard], component: AddUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
