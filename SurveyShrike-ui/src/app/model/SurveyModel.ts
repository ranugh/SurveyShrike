
export class SurveyModel{
    surveyName:string;
    id:number;
    questions:Question[] = [];
}

export class Question{
    questionId:string;
    questionName: string;
    answerType:AnswerType;
    answers:Answer[] = [];


}

export class Answer{
    answerId:string;
    answerStr:string;
}

export enum AnswerType{

    TEXTBOX = 1,
    RADIO = 2,
    CHECKBOX=3,


}