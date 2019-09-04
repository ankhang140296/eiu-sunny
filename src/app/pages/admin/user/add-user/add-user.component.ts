import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  submitted = false;
  user;

  ngOnInit() {
    // Passing in MD_Bootstrap form validation 
    this.userForm = this.formBuilder.group({
      contactFormUserName: ['', Validators.required],
      contactFormEmail: ['', [Validators.required, Validators.email]],
      contactFormMobile: ['', [Validators.required, Validators.minLength(10)]],
      contactFormPassword: ['', [Validators.required, Validators.minLength(8)]],
      contactFormRole: ['', Validators.required]
    });
  }
  // Adding variables
  username = '';
  email = '';
  mobile = '';
  password = '';
  role = "";

  userForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private datePipe: DatePipe,
    private router: Router, private userService: UserService) { }
  get f() { return this.userForm.controls; }
  onSubmit() {
    this.submitted = true;
    if (this.userForm.valid) {
      alert('Add new user successful!');
      this.user = this.userService.createUser(this.username, this.email, this.password, this.mobile,this.role);
      this.userService.addUser(this.user);
      this.clearForm();
    }
  }
  clearForm() {
    this.userForm.reset();
    this.router.navigateByUrl('/user');
  }

}
