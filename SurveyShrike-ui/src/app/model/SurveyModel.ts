
export class SurveyModel{
    surveyName:string;
    surveyId:number;
    questions:Question[];
}

export class Question{
    questionId:string;
    surveyId:string;
    questionName: string;
    answerType:AnswerType;
    answers:Answer[];


}

export class Answer{
    questionId: string;
    answerId:string;
    answer:string;
}

export enum AnswerType{

    TEXTBOX = 1,
    RADIO = 2,
    CHECKBOX=3,


}