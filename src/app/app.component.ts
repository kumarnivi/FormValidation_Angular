import { Component } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms'
import { min } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  integerRegex = /^\d+$/
  emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  title = 'reactive_form';


  registerForm = new FormGroup ({
    fname : new FormControl("", [Validators.required, Validators.maxLength(32)]),
    lname : new FormControl("", [Validators.required, Validators.maxLength(32)]),
    age : new FormControl("", [Validators.required, Validators.max(60), Validators.min(18), Validators.pattern(this.integerRegex)]),
    mobile : new FormControl("", [Validators.required, Validators.maxLength(10), Validators.minLength(10)]),
    email : new FormControl("", [Validators.required, Validators.maxLength(32), Validators.pattern(this.emailRegex)]),
    password : new FormControl("", [Validators.required, Validators.maxLength(32), Validators.minLength(8)]),
    conformPassword : new FormControl("", [Validators.required, Validators.maxLength(32), Validators.minLength(8)]),

  })
}
