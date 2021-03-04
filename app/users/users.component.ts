import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userservice:UserService,private router:Router) 
  { }

  users:User[]=[];
  ngOnInit(): void 
  {
this.getAllUsers();

  }

public getAllUsers()
{


  this.userservice.allUsers().subscribe(data=>{

    //alert(JSON.stringify(data["data"]));
    
    this.users=data["data"];
    //alert(JSON.stringify(this.users));
    
    },error=>{
    
    
      alert(JSON.stringify(error));
    
    });

}

  public permissionChecking(accno:number)
  {

    this.userservice.getPermission(accno).subscribe((data)=>{
      alert(data);
this.users=[];
this.getAllUsers();

    },(error)=>{

      alert("error:"+JSON.stringify(error));
    });

  }

}
