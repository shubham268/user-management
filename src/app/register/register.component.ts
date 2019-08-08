import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private usersService:UsersService, private router:Router) { }

  ngOnInit() {
  }

  onSubmit(form:NgForm){
    let creds = form.value;
    this.usersService.postRegister(creds).subscribe(
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
