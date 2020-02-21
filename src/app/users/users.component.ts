import { Component, OnInit } from '@angular/core';
import{UserService } from  '../shared/services/user.service'
import{User}from '../shared/models/user'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private _userService:UserService) { }

  private _user:User
  private _userdetail: User
  check=false;
  checkUser=true;

  ngOnInit() {
    this.getUsers();
    this._userdetail = new User()
  }

  getUsers(){
    this._userService.getUsers().subscribe((Response)=>(this._user=Response.data))
  }

  getUserById(id:string){
    this._userService.getUserById(id).subscribe((Response)=>(this._userdetail=Response.data))
    this.checkUser=false
  }

  AddUsers(user: User){
    this._userService.AddUser(user).subscribe((Response)=>(this._user=Response.data))
  }


}

