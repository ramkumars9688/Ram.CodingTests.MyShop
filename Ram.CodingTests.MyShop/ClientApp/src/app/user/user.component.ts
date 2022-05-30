import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user: User;
  @Output() userChange = new EventEmitter<User>();

  userForm = new FormGroup({
    email: new FormControl('',[
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])
    });
    
  constructor() { }

  ngOnInit() {
  }

  onEmailChange()
  {
    if(this.userForm.get('email').valid && this.userForm.get('email').value)
    {
      this.userChange.emit({email: this.userForm.get('email').value});
    }
    else
    {
      this.userChange.emit({email: undefined});
    }
  }

}
