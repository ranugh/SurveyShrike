import { Component, OnInit, ViewChild, Input, EventEmitter, Output } from '@angular/core';
import { SurveyModel, Question, AnswerType, Answer } from 'src/app/model/SurveyModel';
import { SurveyService } from 'src/app/service/SurveyService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-survey-page',
  templateUrl: './create-survey-page.component.html',
  styleUrls: ['./create-survey-page.component.css']
})
export class CreateSurveyPageComponent implements OnInit {

  survey:SurveyModel;
  question:Question;
  AnswerType = AnswerType;
  answers:string[] = [];
  checkBoxAnswer:string;
  @Output() eventEmitter = new EventEmitter<any>();
  constructor(
    public surveyService: SurveyService,
    public router:Router
  ) { }

  ngOnInit() {
    this.survey = new SurveyModel();
    this.question = new Question();
  }

  addQuestion(){
    if(!this.question.answerType){
      window.alert("Answer Type is mandatory");
      return;
    }

    if(this.question.answerType == AnswerType.CHECKBOX){
      if(this.answers.length < 2){
        window.alert("Atleast two answers are needed");
        return;
      }
      
    }

    if(this.question.answerType == AnswerType.RADIO){
      if(this.answers.length != 2){
        window.alert("Two answers are needed");
        return;
      }
      
    }
    this.answers.forEach(ans => {
        let answer = new Answer();
        answer.answerStr = ans;

        this.question.answers.push(answer);

    });
    this.answers = [];
    this.survey.questions.push(this.question);

    this.question = new Question();

    console.log(this.survey);
  }

  addCheckBoxAnswer(){
    if(this.checkBoxAnswer){
      this.answers.push(this.checkBoxAnswer);
      this.checkBoxAnswer = '';
    }
  }

  submitSurvey(){

    if(!this.survey.surveyName){
      window.alert("Survey name is mandatory");
      return;
    }
    if(this.survey.questions.length == 0){
      window.alert("Atleast one question is mandatory");
      return;
    }

    this.surveyService.submitSurvey(this.survey).subscribe(response => {

      console.log("survey submited");
       this.eventEmitter.emit("success");
        window.alert("Survey got saved successfully");


    })

  }

}
