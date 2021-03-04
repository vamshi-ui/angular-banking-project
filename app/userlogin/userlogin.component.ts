import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  constructor(private router:Router,private activateRoute:ActivatedRoute,private userService:UserService) { }
// public acnoemail='';
// public password='';
msg:string;

  navtoregister(){
   
this.router.navigate(["userregister"]);
  }

  public forgotpassword()
{

  this.router.navigate(['forgotpassword']);

}

  ngOnInit() {
   
  }
  showalert;
  public userLoginCheck(obj)
{

 this.showalert=false;
 
this.userService.userLogin(obj.acnoemail,obj.password).subscribe((data)=>{


  if(data=="Login Success")
  {


   this.userService.checkPermission(obj.acnoemail).subscribe((data1)=>{


    if(data1=="Permission Granted")
    {
  this.router.navigate(["userhome"]);

this.msg=data;
this.showalert=true;
localStorage.setItem("acnoemail",obj.acnoemail);

  }
    else
    {
    

      this.msg=data1;  
    this.showalert=true;
   

    }

   },(error1)=>{
    

    this.msg=JSON.stringify(error1.text);
    this.showalert=true;
   

   }); 


  }
  else
  {
  

    this.msg=data;    
    this.showalert=true;
   

  }
  
},(error)=>{
  

this.msg=JSON.stringify(error.text);
this.showalert=true;


});
}
}
