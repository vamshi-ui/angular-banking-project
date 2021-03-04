import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'bankingproject';
  constructor(private route:Router,private userService:UserService){}
  z
  ngOnInit(){
    
  }
  name=localStorage.getItem("ename");

  logout(){
    let acno=localStorage.getItem("acnoemail");
    if(acno!=null){
    localStorage.clear();
  alert("logged out sucssesfully..");
this.route.navigate(['userlogin']);
    }
  }
}
