import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';
import { AuthGuardService } from 'src/app/guards/auth-guard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted = false;
  usersArray = [];
  loginSuccessful = false;

  ngOnInit() {
    // Passing in MD_Bootstrap form validation 
    this.userForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.userService.getSnapshotChanges().subscribe(
      list => {
        this.usersArray = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      });
  }
  // Adding variables

  userForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private router: Router, private userService: UserService, private authGuardService: AuthGuardService) { }
  get f() { return this.userForm.controls; }
  successful = false;

  onSubmit() {
    var data = this.userForm.value;
    this.usersArray.forEach(user => {
      if (user.username === data.username && user.password === data.password) {
        this.authGuardService.loginSuccessful(user);
        this.clearForm();
        alert("Login successful!");
      }
    });
  }
  clearForm() {
    switch (this.authGuardService.getCurrentUser().role) {
      case "Admin": {
        this.router.navigateByUrl('/dashboard');
        break;
      }
      case "Editor": {
        this.router.navigateByUrl('/dashboard');
        break;
      }
      case "Volunteer": {
        this.router.navigateByUrl('/dashboard');
        break;
      }
      default :{
        alert("Username or Password incorrect!");
        this.router.navigateByUrl('/admin');
      }
    }
    this.userForm.reset();
  }
}
