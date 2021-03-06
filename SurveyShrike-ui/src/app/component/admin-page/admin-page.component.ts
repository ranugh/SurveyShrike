import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  public createSurvayFlag = false;
  constructor() { }

  ngOnInit() {
  }

  createSurvay(){
    this.createSurvayFlag = true;
  }

  createSurvaySuccess(event){
    console.log("Create Survey Successful in admin");
    this.createSurvayFlag = false;
  }

}
