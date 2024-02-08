import { Component } from '@angular/core';
import { User } from '../model/User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-viewtenants',
  templateUrl: './viewtenants.component.html',
  styleUrls: ['./viewtenants.component.css']
})
export class ViewtenantsComponent {

  user: User;
  result: string = "";
  tenantList: User[] = [];
  constructor(private service: UserService) {
    this.user = new User;
    this.getAllTenants();
  }
  register(data : any){

  }
  getAllTenants() {
    this.service.getAllTenants().subscribe(tenants => this.tenantList = tenants);

  }

}
