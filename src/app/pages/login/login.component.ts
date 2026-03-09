import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  username: string = '';
  password: string = '';


  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  login() {
    this.authService.login(this.username, this.password)
      .subscribe({
        next: (res: any) => {
          this.authService.saveToken(res.token);
          console.log('Login success');
        },
        error: (err) => {
          console.log('Invalid credentials');
        }
      });
  }
}
