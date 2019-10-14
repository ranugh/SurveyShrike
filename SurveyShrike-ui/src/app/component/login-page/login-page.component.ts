import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtRequest } from 'src/app/model/JwtRequest';
import { UserService } from 'src/app/service/UserService.service';
import { AppDataProvider } from 'src/app/global/AppDataProvider';
import { CacheStore } from 'src/app/global/CacheStore';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  public jwtRequest : JwtRequest; 
  constructor(
    public router:Router,
    public userService : UserService,
    public data : AppDataProvider,
    public cacheStore : CacheStore
  ) { }

  ngOnInit() {
    this.jwtRequest = new JwtRequest();
    this.cacheStore.removeItem(CacheStore.TOKEN);
    this.cacheStore.removeItem(CacheStore.USER_DETAILS);

  }

  registration(){
      this.router.navigate(['./registration-page']);
  }

  login(){
      this.userService.login(this.jwtRequest).subscribe(response => {
        this.data.token = response['jwttoken'];
        this.data.user = response['userDetails'];

        this.cacheStore.storeData(CacheStore.TOKEN,  this.data.token);
        this.cacheStore.storeData(CacheStore.USER_DETAILS,  this.data.user);
        if(this.data.user.admin){
          this.router.navigate(['./admin-page']);
        }else {
          this.router.navigate(['./survey-list-page']);
        }

      },error => {
        if(error['status'] === 401){
          window.alert("invalid credentials");
        }
      }
      );
  }

}
