import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../model/User';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logincomp',
  templateUrl: './logincomp.component.html',
  styleUrls: ['./logincomp.component.css']
})
export class LogincompComponent {
  user: User;
  myform: FormGroup;
  result: string = "";


  constructor(private service: UserService, private router: Router) {
    this.user = new User;
    // this.getAlldetails();
    this.myform = new FormGroup(
      {
        userEmail: new FormControl('', [Validators.required]),
        userPassword: new FormControl('', [Validators.required]),
      }
    );
  }


  login(data: any) {
    this.user.userEmail = data.userEmail;
    this.user.userPassword = data.userPassword;
    this.service.login(this.user).subscribe((resultdata: any) => {
      console.log(resultdata);




      if (resultdata.message == 'Admin Success') {
        this.router.navigate(['/admin'])
      } else if (resultdata.message == 'HouseOwner Success') {
        this.router.navigate(['/owner']);
      } else if (resultdata.message == 'Tenant Success') {
        this.router.navigate(['/tenantoperations']);
      }
    });
  }


}


