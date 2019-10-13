import { Component, OnInit } from '@angular/core';
import { SurveyModel, Question } from 'src/app/model/SurveyModel';

@Component({
  selector: 'app-create-survey-page',
  templateUrl: './create-survey-page.component.html',
  styleUrls: ['./create-survey-page.component.css']
})
export class CreateSurveyPageComponent implements OnInit {

  survey:SurveyModel;
  question:Question;
  constructor() { }

  ngOnInit() {
    this.survey = new SurveyModel();
    this.question = new Question();
  }

}
