import { Injectable } from '@angular/core';
import { CommonDataService } from './CommonDataService';
import { SurveyModel } from '../model/SurveyModel';
import { RestEndPoints } from '../global/RestEndPoints';


export class SurveyService extends CommonDataService{

    submitSurvey(survey:SurveyModel){
        const url: string =
        RestEndPoints.getBaseURL() +
        RestEndPoints.SURVEYS ;
      return super.getEntityWithPayloadAsArg(url, survey);
    }


}