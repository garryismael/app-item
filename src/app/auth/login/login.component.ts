import { Component, OnInit } from '@angular/core';
import { LoginFormGroup } from 'src/app/forms/login.form';
import { User } from 'src/app/models/login.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: LoginFormGroup = new LoginFormGroup();
  invalidLogin = false;
  user: User = new User();
  constructor(
    private authService: AuthService
  ) {}

  ngOnInit() {
    localStorage.removeItem('id_token');
  }

  onSubmit(): void {
    if (this.form.valid) {
      Object.keys(this.form.controls)
        .forEach(c => this.user[c] = this.form.controls[c].value);
      // tslint:disable-next-line: deprecation
      this.authService.login(this.user).subscribe(data => {
        if (data.token) {
          localStorage.setItem('id_token', data.token);
        } else {
          this.invalidLogin = true;
        }
      });
    }
  }
}
