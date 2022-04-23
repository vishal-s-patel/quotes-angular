import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UnauthService } from 'src/app/shared/services/unauth/unauth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  profileForm = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    password: new FormControl('', Validators.minLength(6))
  })

  constructor(
    private unauthService: UnauthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSave() {
    if (this.profileForm.valid) {
      this.unauthService.signup(this.profileForm.value).subscribe({
        next: (response) => {
          this.router.navigateByUrl('/');
        },
        error: (error) => {
          console.log(error);
        }
      })
    }
  }
}
