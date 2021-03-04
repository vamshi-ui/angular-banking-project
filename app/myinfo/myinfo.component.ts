import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-myinfo',
  templateUrl: './myinfo.component.html',
  styleUrls: ['./myinfo.component.css']
})
export class MyinfoComponent implements OnInit {

  constructor(private userService:UserService) { }

  user:User;
  acno=localStorage.getItem("acnoemail");
 email=localStorage.getItem("email");
  ngOnInit(): void 
  {
this.myinfo();
  }

  myinfo(){
    this.userService.getUser(this.acno).subscribe((data)=>{
      //alert(JSON.stringify(data));
      this.user=data["data"];
      //alert(JSON.stringify(this.user));

    },(error)=>{



    });
  }

}
