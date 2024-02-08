import { Component } from '@angular/core';
import { User } from '../model/User';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user:User;
  result:string="";
  userList: User[] = [];
  myform:FormGroup;
  constructor(private service:UserService){
    this.user=new User;
    this.myform=new FormGroup({
      userId:new FormControl('',[Validators.required,Validators.pattern('[0-9]+')]),
      userName:new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z ]+")]),
      userPassword:new FormControl('',[Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
      userEmail:new FormControl('',[Validators.required]),
      userContact:new FormControl('',[Validators.required,Validators.pattern('[0-9]+')]),
      userType:new FormControl('',[Validators.required])
    })

  }
  register(data : any){
  
  }

  insertUser(data:any){
    this.user.userId=data.userId;
  this.user.userName=data.userName;
  this.user.userPassword=data.userPassword;
  this.user.userEmail=data.userEmail;
  this.user.userContact=data.userContact;
  this.user.userType=data.userType;


  this.result=this.service.insertUser(this.user);

  

  
  }
}
