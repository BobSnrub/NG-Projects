import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  registerForm: FormGroup;
  loginCreds = {
    username: '',
    password: ''
  };
  // A quick way to reference fields from the html side
  get username() { return this.registerForm.get('username'); }
  get password() { return this.registerForm.get('password'); }


  constructor(private formBuilder: FormBuilder,
    private dService: DataService,
    private lService: LoginService,
    private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  submitForm() {
    if (this.registerForm.invalid) {
      alert('Fix errors on form');
      // or you can just return
    } else {
      console.log(this.registerForm.value);
      this.lService.Login(this.registerForm.value);
      // Know that we need to do proper validation - this will be in another lecture
      // alert('Succesful!');
      this.registerForm.reset();
    }
  }
  // This function is used if you didn't use a reactive form.
  onSubmission(uName, pWord) {
    // this.username
    // this.password
    this.loginCreds.username = uName;
    this.loginCreds.password = pWord;

    this.lService.Login(this.loginCreds);
  }
}
