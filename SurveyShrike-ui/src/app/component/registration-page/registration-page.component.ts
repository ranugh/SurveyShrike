import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/service/UserService.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {

  user:User;
  constructor(
    public userService : UserService,
    public router:Router
  ) { }

  ngOnInit() {
    this.user = new User();
  }

  registration(){
    console.log(this.user);
    if(this.user.name && this.user.emailId && this.user.password){
        this.userService.registerUser(this.user).subscribe(response => {
            this.router.navigate(['./login-page']);

        })
    } else {

      window.alert('wrong input');
    }

  }

  onChange(event){
    console.log(event);
  }

}
