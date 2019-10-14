import { Component, OnInit } from '@angular/core';
import { SurveyService } from 'src/app/service/SurveyService';
import { UserResponse } from 'src/app/model/UserResponseModel';
import { Router } from '@angular/router';
import { AppDataProvider } from 'src/app/global/AppDataProvider';

@Component({
  selector: 'app-view-user-survey',
  templateUrl: './view-user-survey.component.html',
  styleUrls: ['./view-user-survey.component.css']
})
export class ViewUserSurveyComponent implements OnInit {

  userResponses :UserResponse[] ;
  constructor(

    public surveyService : SurveyService,
    public router: Router,
    public data: AppDataProvider
  ) { }

  ngOnInit() {
    this.loadUserResponseSurveys();
  }


  loadUserResponseSurveys(){
    this.userResponses = [];
    this.surveyService.getUserSurveyResponses().subscribe(response => {
      this.userResponses = response['USER_RESPONSE_LIST'];
      console.log(this.userResponses);
      
    });
  }

  openSurvey(userSurvey){
    this.data.userServeyList = userSurvey['surveyResponse'];
    this.router.navigate(['./app-user-survey-list']);

  }

}
