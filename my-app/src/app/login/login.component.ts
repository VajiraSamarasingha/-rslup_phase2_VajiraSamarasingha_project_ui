import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username = '';
  password = '';
  login(){
    const username = "Vajira";
    const password = "Vajira123"

    if (this.username === username && this.password === password){
      alert("Login Successful");
    }
    else{
      alert("Login Failed");
    }
  }
}
