import { Component, OnInit } from '@angular/core';
import { SurveyService } from 'src/app/service/SurveyService';
import { Router } from '@angular/router';
import { AppDataProvider } from 'src/app/global/AppDataProvider';
import { SurveyModel } from 'src/app/model/SurveyModel';

@Component({
  selector: 'app-user-survey-list',
  templateUrl: './user-survey-list.component.html',
  styleUrls: ['./user-survey-list.component.css']
})
export class UserSurveyListComponent implements OnInit {

  surveyList:SurveyModel[];
  constructor(

    public surveyService : SurveyService,
    public router: Router,
    public data: AppDataProvider
  ) { }

  ngOnInit() {

    this.surveyList = this.data.userServeyList;
  }

  openSurvey(survey:SurveyModel){
    this.data.userServey = survey;
    this.router.navigate(['./app-user-survey-page']);




  }




}
