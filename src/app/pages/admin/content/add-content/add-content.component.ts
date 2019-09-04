import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';
import { ArticleService } from 'src/app/shared/article.service';

@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.component.html',
  styleUrls: ['./add-content.component.css']
})
export class AddContentComponent implements OnInit {
  public form: FormGroup;
  public contactList: FormArray;
  // returns all form groups under contacts
  get contactFormGroup() {
    return this.form.get('contacts') as FormArray;
  }

  constructor(private fb: FormBuilder, private articleService: ArticleService, private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      title: [null, Validators.compose([Validators.required])],
      description: [null],
      date: new Date().toLocaleString(),
      contacts: this.fb.array([this.createContact()])
    });

    // set contactlist to this field
    this.contactList = this.form.get('contacts') as FormArray;
  }

  // contact formgroup
  createContact(): FormGroup {
    return this.fb.group({
      imageURL: [null, Validators.compose([Validators.required])], // i.e Email, Phone
      content: [null, Validators.compose([Validators.required])], // i.e. Home, Office
    });
  }

  // add a contact form group
  addContact() {
    this.contactList.push(this.createContact());
  }

  // remove contact from group
  removeContact(index) {
    // this.contactList = this.form.get('contacts') as FormArray;
    this.contactList.removeAt(index);
  }

  // triggered to change validation of value field type
  // changedFieldType(index) {
  //   let validators = null;

  //   if (this.getContactsFormGroup(index).controls['type'].value === 'email') {
  //     validators = Validators.compose([Validators.required, Validators.email]);
  //   } else {
  //     validators = Validators.compose([
  //       Validators.required,
  //       Validators.pattern(new RegExp('^\\+[0-9]?()[0-9](\\d[0-9]{9})$')) // pattern for validating international phone number
  //     ]);
  //   }

  //   this.getContactsFormGroup(index).controls['value'].setValidators(
  //     validators
  //   );

  //   this.getContactsFormGroup(index).controls['value'].updateValueAndValidity();
  // }

  // get the formgroup under contacts form array
  getContactsFormGroup(index): FormGroup {
    // this.contactList = this.form.get('contacts') as FormArray;
    const formGroup = this.contactList.controls[index] as FormGroup;
    return formGroup;
  }

  // method triggered when form is submitted
  submit() {
    if (this.form.valid) {
      alert('Add new article successful!');
      this.articleService.addArticle(this.form.value);
      this.clearForm();
    }
  }

  clearForm() {
    this.form.reset();
    this.contactList.reset();
  }
}
