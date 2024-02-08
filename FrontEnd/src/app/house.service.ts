import { Injectable } from '@angular/core';
import { House } from './model/House';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  private url: string = "http://localhost:7070";

  constructor(private http:HttpClient) { }

  insertHouse(house: House) {
    this.http.post(this.url + "/PerformHouseInsert", house).subscribe();
    return "House Inserted";
  }
  updateHouse(house: House) {
    this.http.put(this.url + "/PerformHouseUpdate", house).subscribe();
    return "House Details Updated";
  }
  deleteHouse(house: House){
    this.http.delete(this.url+"/PerformHouseDelete/"+house.houseId).subscribe();
    return "House Deleted";
   }
  getAllHouseDetails(){
    return this.http.get<House[]>(this.url+"/ViewAllHouse");
    
  }
}
