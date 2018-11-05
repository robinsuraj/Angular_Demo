import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { BasicServiceService } from '../../service/basic-service.service';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  loggedIn=false;
  constructor(private fb: FormBuilder, private service:BasicServiceService,private myRoute: Router) { }

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.loginForm = this.fb.group({
        email: new FormControl('', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
        password: new FormControl('', [Validators.required, Validators.maxLength(16), Validators.minLength(8)])
    });
  }

  login(){
    let data={
      "email":this.loginForm.controls.email.value,
      "password":this.loginForm.controls.password.value
    }

    this.service.login(data).subscribe(res=>{
      console.log(res);
      if(res.success){
        console.log(res);
        this.loggedIn=true;
        this.myRoute.navigate(['dashboard']);
        console.log("success");
      }
    })
    
  }
}
