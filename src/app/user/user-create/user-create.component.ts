import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormGroup, FormControl, Validators} from "@angular/forms";


@Component({
  selector: 'app-userCreate',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})

export class UserCreateComponent {
  registerForm = new FormGroup({
    registerEmail: new FormControl(null, [Validators.required, Validators.email, Validators.pattern(/^(?=.{1,64}@)[A-Za-z0-9_-]+(\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*(\.[A-Za-z]{2,})$/)]),
    registerName: new FormControl(null, Validators.required),
    registerOrganization: new FormControl(null, Validators.required),
    registerRole: new FormControl(null, Validators.required)
  })


  constructor(private http: HttpClient) {
  }

  createUser(){
    this.http.post('/auth/register/', {
      name: this.registerForm.value.registerName,
      email: this.registerForm.value.registerEmail,
      organization: this.registerForm.value.registerOrganization,
      role: 'SPINE_ADMIN',
    })
      .subscribe();
  }

  getDataFromForms(){

  }

}