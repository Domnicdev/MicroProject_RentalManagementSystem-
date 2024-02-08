import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string = "http://localhost:7070";

  constructor(private http:HttpClient) { 

  }

login(user: any) {
   return  this.http.post(this.url+"/login", user);
  }

  insertUser(user: User) {
    this.http.post(this.url + "/PerformUserInsert", user).subscribe();
    return "Record Registered";
  }
  updateUser(user: User) {
    this.http.put(this.url + "/PerformUserUpdate", user).subscribe();
    return "Record Updated";
  }
  deleteTenant(user:User){
    this.http.delete(this.url+"/PerformUserDelete/"+user.userId).subscribe();
    return "Record Deleted";
   }
   deleteHouseOwner(user:User){
    this.http.delete(this.url+"/PerformUserDelete/"+user.userId).subscribe();
    return "Record Deleted";
   }
  getAllTenants(){
    return this.http.get<User[]>(this.url+"/ViewAllTenants");
    
  }
  getAllHouseOwners(){
    return this.http.get<User[]>(this.url+"/ViewAllHouseOwners");
    
  }
}
