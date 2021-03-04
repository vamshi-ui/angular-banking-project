import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  constructor(private userService:UserService) { }

  accountnos:[];
  acno:string;

  depositInfo=[];
  moneyTransferInfo=[];
  ngOnInit():void 
  {

this.getAccnos();
console.log(this.depositInfo[0]);
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


public getDepositInfoAndTransferInfo()
{

this.userService.getDepositInfoAndTransferInfo(this.acno).subscribe((data)=>{

//alert(JSON.stringify(data));

this.depositInfo=data["depositinfo"];
this.moneyTransferInfo=data["moneytransferinfo"];

//alert(JSON.stringify(this.depositInfo));
//alert(JSON.stringify(this.moneyTransferInfo));

},(error)=>{
});
}



}
