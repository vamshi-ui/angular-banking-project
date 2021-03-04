import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  constructor(private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void 
  {
    this.router.navigate(['users'],{relativeTo:this.activatedRoute});

  }

  public users()
  {
this.router.navigate(['users'],{relativeTo:this.activatedRoute});
  }
  public transactions()
  {
    this.router.navigate(['trasactions'],{relativeTo:this.activatedRoute});
  
  }

  public delete()
  {
    this.router.navigate(['delete'],{relativeTo:this.activatedRoute});
  }

  public logout(){
if(confirm("are u sure u want to logout")){
  this.router.navigate(['adminlogin']);
}
}

}
