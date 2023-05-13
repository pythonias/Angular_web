import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {

  constructor(private activatedroute: ActivatedRoute,private userService: UserService) { }

  userId="";
  isEditUser = false;
  editUserData:any;

  ngOnInit(): void {
    this.userId = this.activatedroute.snapshot.params["id"];

    if(this.userId != "" && this.userId != undefined)
    {
      this.isEditUser = true;
      this.userService.getUserData(+this.userId).subscribe(res=>{
       this.editUserData = res[0];
      })
    }

    
  }

}
