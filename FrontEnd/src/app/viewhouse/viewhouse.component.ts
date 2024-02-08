import { Component } from '@angular/core';
import { HouseService } from '../house.service';
import { House } from '../model/House';

@Component({
  selector: 'app-viewhouse',
  templateUrl: './viewhouse.component.html',
  styleUrls: ['./viewhouse.component.css']
})
export class ViewhouseComponent {

  house: House;
  result: string = "";
  hosList: House[] = [];
  constructor(private service: HouseService) {
    this.house = new House;
    this.getAllHouse();
  }
  register(data : any){

  }
  getAllHouse() {
    this.service.getAllHouseDetails().subscribe(houses => this.hosList = houses);

  }

}
