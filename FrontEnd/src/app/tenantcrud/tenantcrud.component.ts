import { Component } from '@angular/core';
import { User } from '../model/User';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-tenantcrud',
  templateUrl: './tenantcrud.component.html',
  styleUrls: ['./tenantcrud.component.css']
})
export class TenantcrudComponent {
  user:User;
  result:string="";
  tenantList: User[] = [];
  myform:FormGroup;
  constructor(private service:UserService){
    this.user=new User;
    this.getAllTenants();

    this.myform=new FormGroup({
      userId:new FormControl('',[Validators.required,Validators.pattern('[0-9]+')]),
      userName:new FormControl('',[Validators.required]),
      userPassword:new FormControl('',[Validators.required]),
      userEmail:new FormControl('',[Validators.required]),
      userContact:new FormControl('',[Validators.required]),
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

  updateUser(data:any){
  this.user.userId=data.userId;
  this.user.userName=data.userName;
  this.user.userPassword=data.userPassword;
  this.user.userEmail=data.userEmail;
  this.user.userContact=data.userContact;
  this.user.userType=data.userType;


  this.result=this.service.updateUser(this.user);

  
  }

  deleteTenant(data:any){
    this.user.userId=data.userId;
  
    this.result=this.service.deleteTenant(this.user);
  
  }
  getAllTenants() {
    this.service.getAllTenants().subscribe(tenants => this.tenantList = tenants);
  }


}
