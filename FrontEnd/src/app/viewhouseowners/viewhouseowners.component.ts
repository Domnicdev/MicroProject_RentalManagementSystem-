import { Component } from '@angular/core';
import { User } from '../model/User';
import { FormGroup } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-viewhouseowners',
  templateUrl: './viewhouseowners.component.html',
  styleUrls: ['./viewhouseowners.component.css']
})
export class ViewhouseownersComponent {
  user:User;
  result:string="";
  houseownerList: User[] = [];
  constructor(private service:UserService){
    this.user=new User;
    this.getAllHouseOwners();

   

  }
  register(data : any){
  
  }


  getAllHouseOwners() {
    this.service.getAllHouseOwners().subscribe(houseowner => this.houseownerList = houseowner);
  }
}
