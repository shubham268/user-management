import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private usersService:UsersService, private router:Router) { }

  ngOnInit() {
  }

  onSubmit(form:NgForm){
    let creds = form.value;
    this.usersService.postLogin(creds).subscribe(
      (response:any)=>{
        let {token} = response;
        localStorage.setItem('token', token);
        this.router.navigateByUrl("users");
      },
      (resp)=>{
        alert(resp.error.error);
      }
    )
  }

}
