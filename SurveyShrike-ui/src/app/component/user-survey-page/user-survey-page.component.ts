import { Component, OnInit } from '@angular/core';
import { AppDataProvider } from 'src/app/global/AppDataProvider';
import { SurveyModel, AnswerType } from 'src/app/model/SurveyModel';
import { UserResponse} from 'src/app/model/UserResponseModel';
import { CacheStore } from 'src/app/global/CacheStore';
import { User } from 'src/app/model/User';
import { SurveyService } from 'src/app/service/SurveyService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-survey-page',
  templateUrl: './user-survey-page.component.html',
  styleUrls: ['./user-survey-page.component.css']
})
export class UserSurveyPageComponent implements OnInit {

  public userSurvey: SurveyModel;
  public AnswerType = AnswerType;

  userResponse: UserResponse;
  
  constructor(
    public data: AppDataProvider,
    public cacheStore:CacheStore,
    public surveyService: SurveyService,
    public router: Router
  ) {
    
   }

  ngOnInit() {
    console.log("user Survey begin");

    this.userSurvey = this.data.userServey;

    this.userResponse = new UserResponse();
    const userDetails:User = this.cacheStore.getData(CacheStore.USER_DETAILS);
    this.userResponse.userId = userDetails.userId;
    this.userResponse.emailId = userDetails.emailId;
    this.userResponse.surveyResponse = [];

    console.log(this.userSurvey);
    console.log(this.userResponse);
  }

  submitSurvey(){

    this.userResponse.surveyResponse.push(this.userSurvey);

    console.log(this.userResponse);
    this.surveyService.submitUserResponse(this.userResponse).subscribe(response => {
      this.router.navigate(['./survey-list-page']);
    })
  }






}
