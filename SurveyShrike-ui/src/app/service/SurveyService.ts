import { Injectable } from '@angular/core';
import { CommonDataService } from './CommonDataService';
import { SurveyModel } from '../model/SurveyModel';
import { RestEndPoints } from '../global/RestEndPoints';
import { UserResponse } from '../model/UserResponseModel';


export class SurveyService extends CommonDataService{

  getSurveyList() {
    const url: string =
        RestEndPoints.getBaseURL() +
        RestEndPoints.SURVEYS ;
      return super.getEntity(url);
  }

    submitSurvey(survey:SurveyModel){
        const url: string =
        RestEndPoints.getBaseURL() +
        RestEndPoints.SURVEYS ;
      return super.getEntityWithPayloadAsArg(url, survey);
    }

    submitUserResponse(userResponse:UserResponse){
      const url: string =
        RestEndPoints.getBaseURL() +
        RestEndPoints.USER_RESPONSE ;
      return super.getEntityWithPayloadAsArg(url, userResponse);
    }

    getUserSurveyResponses(){
      const url: string =
        RestEndPoints.getBaseURL() +
        RestEndPoints.USER_RESPONSE ;
      return super.getEntity(url);
    }

}