import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../shared/model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {
  form!: FormGroup;
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {
    this.form = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  get f() {
    return this.form.controls;
  }

  login() {
    if (this.form.valid) {
      this.authService.getUsers().subscribe(
        (response) => {
          const user = response.find((a:any)=>{
            console.log(response.token);
            
            return a.username === this.form.value.username && a.password === this.form.value.password 
          })
        }
      );
      const { username, password } = this.form.value;

      this.authService.authenticate(username, password).subscribe(
        () => {
        },
        (error) => {
          console.error('Login failed:', error);
        }
      );
    }
  }
}
