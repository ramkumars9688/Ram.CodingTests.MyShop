import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { Country } from '../models/country';
import { User } from '../models/user';
import { CountryService } from '../services/country-service/country.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user: User;
  @Output() userChange = new EventEmitter<User>();

  countries$: Observable<Country[]>;

  userForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    country: new FormControl('', [
      Validators.required])
  });

  constructor(private _countryService: CountryService) { }

  ngOnInit() {
    this.countries$ = this._countryService.getCountries()
  }

  userFormChange()
  {
    let country = (this.userForm.get('country').valid && this.userForm.get('country').value) ? 
    this.userForm.get('country').value : undefined;

    let email = (this.userForm.get('email').valid && this.userForm.get('email').value) ? 
    this.userForm.get('email').value : undefined;

    console.log(country);

    this.userChange.emit({ email: email, country: country });
  }

}
