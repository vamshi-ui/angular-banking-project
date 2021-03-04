import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserregisterComponent implements OnInit {

  public accno:number;
  public name:string;
  public gender:string;
  public mobileno:string;
  public email:string;
  public balance:number=500;
  public state:string="---------Select State---------";
  public city:string="----------Select City----------";

public result='';


  constructor(private router:Router,private userService:UserService) { }

  ngOnInit(): void
   {

   this.getMaxId();
    

  }


 

cities:string[]=[];

  public getCities(state:string)
  {

  if(state!="")
  {  
let allCities=[

{"Andhra Pradesh":["Visakhapatnam","Vijayawada","Guntur","Nellore","Kakinada"]},
{"Telangana":["Hyderabad","Warangal","Nizamabad","Khammam","Karimnagar"]},
{"Tamilnadu":["Chennai","Coimbatore","Madurai","Tiruchirappalli","Tiruppur"]}

];

for(let st of allCities)
{
if((Object.keys(st)[0])==state)
{

  this.cities=st[state];
  break;
  
}  
}
  }
else
{
  this.cities=[];
}


  }


showalert;

  public userRegister()
  {

this.showalert=false;
    let user:User =new User();
    user.accno=this.accno;
    user.name=this.name;
    user.balance=this.balance;
    user.city=this.city;
    user.email=this.email;
    user.gender=this.gender;
    user.mobileno=this.mobileno;
    user.state=this.state;
    user.permission=false;

this.userService.userRegister(user).subscribe((success)=>{

  this.result=success;
  this.showalert=true;
  this.clearForm();
  this.getMaxId();



},(error)=>{


  this.result=error;
  this.showalert=true;


});

}



public clearForm()
{

  this.name='';
  this.gender='';
  this.mobileno='';
  this.email='';
  this.balance=500;
  this.state='---------Select State---------';
  this.city='----------Select City----------';


}



public getMaxId()
{

  this.userService.userMaxId().subscribe((sucObj)=>{
     
    let id=sucObj["id"];

   if(id==null)
   {
     this.accno=501011;
   }
   else
   {

    id++;
    this.accno=id;

   }



 
  },(error)=>{

  });



}






}
