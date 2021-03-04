import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {

  constructor(private userService:UserService) { }
  name=localStorage.getItem("ename");

  ngOnInit(): void {
  }

  amount:number;
  msg:string;
  showalert;
  public depositAmount()
  {
this.showalert=false;
    let accno=localStorage.getItem("accno");
let email=localStorage.getItem("email");
this.userService.deposit(email,this.amount).subscribe((data)=>{

  this.msg=data;
  this.showalert=true;
  this.amount=undefined;

},(error)=>{

  this.msg=error;
  this.showalert=true;

});

  }

}
