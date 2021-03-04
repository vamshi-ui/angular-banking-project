import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

revAccno:string;
revName:string;
revMobileno:number;
revEmail:string;
amount:number;



public getData()
{
this.showalert=false;
  let senderAccno=localStorage.getItem("accno");

  if(senderAccno!=this.revAccno)
  {

this.userService.getUser(this.revAccno).subscribe((data)=>{

 // alert(JSON.stringify(data));

 let user=data["data"];
 this.revName=user["name"];
 this.revMobileno=user["mobileno"];
 this.revEmail=user["email"];
},(error)=>{


});
  }
  else
  {

    this.msg="Please Enter another accno";
    this.showalert=true;

  }

}
msg:string;
showalert;
  public transferAmount()
  {
this.showalert=false;
let senderAccno=localStorage.getItem("accno");
let senderEmail=localStorage.getItem("email");

this.userService.transfer(senderEmail,this.revEmail,this.amount).subscribe((data)=>{

  this.msg=data;
  this.showalert=true;
  this.revAccno=undefined;
  this.revName="";
  this.revMobileno=undefined;
  this.revEmail="";
  this.amount=undefined;

},(error)=>{

  this.msg=error;
  this.showalert=true;

});





  }

}
