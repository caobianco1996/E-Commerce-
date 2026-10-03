import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(100)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(254)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordsMatch });
  }

  get passwordMismatch(): boolean {
    return this.form.hasError('passwordMismatch') && this.form.get('confirmPassword')?.touched === true;
  }

  private passwordsMatch(control: AbstractControl) {
    const password = control.get('password')?.value;
    const confirmation = control.get('confirmPassword')?.value;
    return password === confirmation ? null : { passwordMismatch: true };
  }

  onSubmit(): void {
    this.submitted = true;
    this.form.markAllAsTouched();
  }
}
