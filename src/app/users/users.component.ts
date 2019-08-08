import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:any[] = [];
  selectedUser:any;
  constructor(private usersService:UsersService) { }

  ngOnInit() {
    this.usersService.getUsers().subscribe(resp=>{
      this.users = resp.data;
    },err=>{

    });
  }

  postDelete(userId,index,e){
    e.stopPropagation();
    this.usersService.deleteUser(userId).subscribe((resp)=>{
      if(this.selectedUser && userId == this.selectedUser.id){
        this.selectedUser = null;
      }
      this.users.splice(index,1);
      alert(`Deleted user`);
    },err=>{
      alert("Failed to delete user");
    });
    return false;
  }

  userSelect(user){
    this.selectedUser = {...user};
  }

  updateUser(user){
    let userIndex = this.users.findIndex(_user=>_user.id==this.selectedUser.id);
    if(userIndex == -1){
      alert("user not found");
    }
    this.users[userIndex] = {...this.selectedUser,...user};
    alert("update user");
  }

}
