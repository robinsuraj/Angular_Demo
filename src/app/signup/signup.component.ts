import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BasicServiceService } from '../../service/basic-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../app.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  signedup=false;
  constructor(private service:BasicServiceService) { }

  ngOnInit() {
    this.initForm();

  }
  initForm() {
    this.signUpForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
      email: new FormControl('', [   Validators.required,Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)  ]),
      password: new FormControl('', [Validators.required, Validators.maxLength(16), Validators.minLength(8)]),
      mobileNumber: new FormControl('', [ Validators.required ,Validators.maxLength(10), Validators.minLength(10)])
    });
  }

      signup(){
        let data={
          "firstName":this.signUpForm.controls.firstName.value,
          "lastName":this.signUpForm.controls.lastName.value,
          "email":this.signUpForm.controls.email.value,
          "password":this.signUpForm.controls.password.value,
          "contactNumber":this.signUpForm.controls.mobileNumber.value,
        }

        this.service.signup(data).subscribe(res=>{
          console.log(res);
          if(res.success){
            this.signedup=true;

            console.log("success");
          }
        });
      }

}
