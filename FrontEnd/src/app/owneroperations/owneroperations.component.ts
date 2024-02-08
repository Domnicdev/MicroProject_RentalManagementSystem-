import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { House } from '../model/House';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HouseService } from '../house.service';
import { User } from '../model/User';
@Component({
  selector: 'app-owneroperations',
  templateUrl: './owneroperations.component.html',
  styleUrls: ['./owneroperations.component.css']
})
export class OwneroperationsComponent 
  {
    house:House;
    result:string="";
    hoList: House[] = [];
    user:User;
    myform:FormGroup;
    // InitialTabIndex=1;
    
    
    constructor(private service:HouseService){
      this.house=new House;
      this.getAllHouses();
      this.myform=new FormGroup({
        houseId:new FormControl('',[Validators.required,Validators.pattern('[0-9]+')]),
        houseType:new FormControl('',[Validators.required]),
        houseRent:new FormControl('',[Validators.required]),
        houseAddress:new FormControl('',[Validators.required]),
        userId:new FormControl('',[Validators.required,Validators.pattern('[0-9]+')])
  
      })
      this.user = new User();
    }
  
  register(data : any){
  
  }
  
  insertHouse(data:any){
    this.house.houseId=data.houseId;
  this.house.houseType=data.houseType;
  this.house.houseRent=data.houseRent;
  this.house.houseAddress=data.houseAddress;
  this.house.userId=data.userId;

  this.result=this.service.insertHouse(this.house);

  

  
  }
  
    updateHouse(data:any){
      this.house.houseId=data.houseId;
      this.house.houseType=data.houseType;
      this.house.houseRent=data.houseRent;
      this.house.houseAddress=data.houseAddress;
      this.house.userId=data.userId;
      this.result=this.service.updateHouse(this.house);

    
    }
    deleteHouse(data:any){
      this.house.houseId=data.houseId;
    
      this.result=this.service.deleteHouse(this.house);
    
    }
    getAllHouses() {
      this.service.getAllHouseDetails().subscribe(houses => this.hoList = houses);
    }
    }
    
  
  
  
  

