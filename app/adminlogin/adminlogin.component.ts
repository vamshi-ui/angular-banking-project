import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
constructor(private router:Router) { }
  ngOnInit(): void 
  {   
  }

public username='';
public password='';
 showalert;
msg;
public loginCheck()
{
  this.showalert=false;

if(this.username.trim()=='admin' && this.password.trim()=='admin')
{
 
this.router.navigate(['adminhome']);
}
else
{
this.msg="Invallid Username or Password";
this.showalert=true;
this.username='';
this.password='';
}
}
}
