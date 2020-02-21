import { Component, OnInit } from '@angular/core';
import { userRegister } from '../shared/models/UserRegister';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from '../shared/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  _userRegister:userRegister;
  _registerForm: FormGroup;
  active=true
  
  

  constructor(private _formBuilder: FormBuilder,
    private _userService:UserService,private _router: Router) { }

  ngOnInit() {
    this._userRegister=new userRegister();
    this._registerForm= this._formBuilder.group({ 
      name: ["", [Validators.required, Validators.minLength(1)]],
    job: ["", [Validators.required, Validators.minLength(1)]]})
  }
  registerUser(){
    if (this._registerForm.valid) {
      // do call here
      const registerObject: userRegister = {
        name: this._registerForm.get("name").value,
        job: this._registerForm.get("job").value,
        
      }
      this._userService.registerUser(registerObject).subscribe(response => {
        this._userRegister=response
        this.active=false
        console.log(response);
        });
    } else {
      alert("Debes llenar todos los campos.")
    }

  }

}
