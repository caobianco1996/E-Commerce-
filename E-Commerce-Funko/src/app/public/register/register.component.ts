import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form : FormGroup;

  constructor(
    private _fb : FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = this._fb.group({
      name : new FormControl(null, Validators.required),
      email : new FormControl(null, Validators.required),
      password : new FormControl(null, Validators.required),
      gender : new FormControl(null, Validators.required),
      zipCode : new FormControl(null, Validators.required),
      address : new FormControl(null, Validators.required),
      number : new FormControl(null, Validators.required),
      city : new FormControl(null, Validators.required),
      state : new FormControl(null, Validators.required),
      district : new FormControl(null, Validators.required),
      phoneNumber : new FormControl(null, Validators.required),
      documentNumber : new FormControl(null, Validators.required),
      confirmPassword : new FormControl(null, Validators.required),
      birthDay : new FormControl(null, Validators.required),
    })
  }
}
