import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  constructor(private router:Router,private userService:UserService) { }
  public acnoemail='';
  result:string='';

  ngOnInit(): void {
  }
  sendemail(){
    this.userService.forgotPassword(this.acnoemail).subscribe((data)=>{

      this.result=data;
      this.acnoemail='';
      alert("password sent to your email please check it!!");
    
    
    },(error)=>{
    
    this.result=error;
    alert(this.result);
    });
    
    
    this.acnoemail=undefined;
  }
  revertback(){
this.router.navigate(['userlogin']);
  }

}
