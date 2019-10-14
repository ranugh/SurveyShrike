
export class SurveyModel{
    surveyName:string;
    surveyId:number;
    questions:Question[] = [];
}

export class Question{
    questionId:string;
    questionName: string;
    answerType:AnswerType;
    answers:Answer[] = [];
    userResponseAnswer:string;
    userResponseAnswerId:number;


}

export class Answer{
    answerId:string;
    answerStr:string;
    checked:boolean;
}

export enum AnswerType{

    TEXTBOX = 1,
    RADIO = 2,
    CHECKBOX=3,


}