import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private userService:UserService) { }

  accountnos:[];

  acno:string;
  
  user:User=null;
  

  ngOnInit():void 
  {

this.getAccnos();

  }
  
  public getAccnos()
  {


    this.userService.getAccountNos().subscribe((data)=>{
 
      // alert(JSON.stringify(data));
       this.accountnos=data;
       //alert(this.accountnos);
     },(error)=>{
     
     });

  }


  public getUser()
  {
if(this.acno!="")
{

this.userService.getUser(this.acno).subscribe((data)=>{

  this.user=data["data"];
  

},(error)=>{



}); 

}
else
{
  this.user=null;
}


  }
  msg:string;
  showalert;

public deleteUser(accno,email)
{
this.showalert=false;
this.userService.deleteAccount(accno,email).subscribe((data)=>{
this.accountnos=[];
this.getAccnos();
this.msg=data;
this.user=null;
this.showalert=true;

},(error)=>{



});

}


}
