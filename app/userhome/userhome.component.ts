import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {

  name:string;

  constructor(private userService:UserService,private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void 
  {
 let name=localStorage.getItem("ename");
// alert(name);
// this.userService.namedata=new Observable(observer=>{
//   observer.next(name);
// })
// this.userService.namedata.subscribe(val=>{
//     console.log(val);
    
//   })
    this.router.navigate(['myinfo'],{relativeTo:this.activatedRoute});

    let acnoemail:string=localStorage.getItem("acnoemail");
    this.userService.getUser(acnoemail).subscribe((data)=>{
     
      //alert(JSON.stringify(data));
let user=data["data"];
this.name=user["name"];

    let accno=user["accno"];
    let email=user["email"];
    let ename=user["name"];
    //alert(accno);
    //alert(email);
    //sessionStorage.removeItem("acnoemail");
    localStorage.setItem("accno",accno);
    localStorage.setItem("email",email);
    localStorage.setItem("ename",ename);



    });

  }

  public logout()
  {

    this.router.navigate(['../userlogin'],{relativeTo:this.activatedRoute});
  

  }


}
