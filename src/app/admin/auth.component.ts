import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { NgForm } from '@angular/forms'
import { AuthService } from '../model/auth.service'

@Component({
  templateUrl: 'auth.component.html',
})
export class AuthComponent {
  public username: string
  public password: string
  public errorMessage: string

  constructor(private router: Router, private auth: AuthService) {}

  authenticate(form: NgForm) {
    console.log('auth called with form')
    if (form.valid) {
      console.log('valid form')
      this.auth.authenticate(this.username, this.password).subscribe((response) => {
        console.log(`response: ${response}`)
        if (response) {
          this.router.navigateByUrl('/admin/main')
        }
        this.errorMessage = 'Authentication Failed'
      })
    } else {
      this.errorMessage = 'Form Data Invalid'
    }
  }
}
