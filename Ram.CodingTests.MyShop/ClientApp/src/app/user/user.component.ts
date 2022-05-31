import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Country } from '../models/country';
import { User } from '../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() countries: Country[];
  @Input() user: User;
  @Output() userChange = new EventEmitter<User>();

  userForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    country: new FormControl('', [
      Validators.required])
  });

  constructor() { }

  ngOnInit() {
  }

  userFormChange() {
    const country = (this.userForm.get('country').valid && this.userForm.get('country').value) ?
    this.userForm.get('country').value : undefined;

    const email = (this.userForm.get('email').valid && this.userForm.get('email').value) ?
    this.userForm.get('email').value : undefined;

    this.userChange.emit({ email: email, country: country });
  }

}
