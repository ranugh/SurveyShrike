import { Component, OnInit } from '@angular/core';
import { SurveyService } from 'src/app/service/SurveyService';
import { SurveyModel } from 'src/app/model/SurveyModel';
import { AppDataProvider } from 'src/app/global/AppDataProvider';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servey-list-page',
  templateUrl: './servey-list-page.component.html',
  styleUrls: ['./servey-list-page.component.css']
})
export class ServeyListPageComponent implements OnInit {

  surveyList:SurveyModel[];

  constructor(
    public surveyService: SurveyService,
    public data:AppDataProvider,
    public router: Router
  ) { }

  ngOnInit() {
    this.loadSurveyList();

  }

  loadSurveyList(){
      this.surveyService.getSurveyList().subscribe(response => {
          this.surveyList = response['_embedded']['surveys'];
          console.log(this.surveyList);
      });

  }

  openSurvey(survey:SurveyModel){
    this.data.userServey = survey;
    this.router.navigate(['./app-user-survey-page']);




  }

}
