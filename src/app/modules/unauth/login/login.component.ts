import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UnauthService } from 'src/app/shared/services/unauth/unauth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', Validators.email),
    password: new FormControl('', Validators.minLength(6))
  })

  constructor(
    private unauthService: UnauthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    localStorage.removeItem('quote');
  }

  onLogin(): void {
    if (this.loginForm.valid) {
      this.unauthService.login(this.loginForm.value).subscribe({
        next: (response) => {
          localStorage.setItem('user', JSON.stringify(response.data._id))
          this.router.navigateByUrl('/quotes');
        },
        error: (error) => {
          console.log(error);
        }
      })
    }
  }

}
