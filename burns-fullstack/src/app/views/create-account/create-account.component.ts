import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {
  registerForm: FormGroup;
  loginCreds = {
    email: '',
    username: '',
    password: ''
  };

  // A quick way to reference fields from the html side
  get email() { return this.registerForm.get('username'); }
  get username() { return this.registerForm.get('username'); }
  get password() { return this.registerForm.get('password'); }


  constructor(private formBuilder: FormBuilder,
    private dService: DataService,
    private lService: LoginService,
    private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  submitForm() {
    if (this.registerForm.invalid) {
      alert('Make sure your password is correct length!');
      return;
      // or you can just return
    } else {
      console.log(this.registerForm.value);
      this.dService.CreateAccount(this.registerForm.value);
      // Know that we need to do proper validation - this will be in another lecture

      // alert('Succesful!');
      this.registerForm.reset();
    }
  }
}
