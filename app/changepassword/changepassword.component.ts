import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }
 name=localStorage.getItem("ename");
  oldPassword:string='';
  newPassword:string='';

  msg:string;
  showalert;

  public changePassword()
  {
this.showalert=false;

let accno=localStorage.getItem("accno");
let email=localStorage.getItem("email");

if(this.oldPassword!=this.newPassword)
{

  this.userService.changePassword(email,this.newPassword).subscribe((data)=>{

   this.msg=data;
this.oldPassword='';
this.newPassword='';
    
this.showalert=true;

  },(error)=>{

this.msg=error;
this.showalert=true;

  })

}
else
{
  this.msg="Old Password and New Password is same";
  this.showalert=true;
}

  }

}
