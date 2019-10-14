import { User } from '../model/User';
import { SurveyModel } from '../model/SurveyModel';

export class AppDataProvider{
    token:string;
    user:User;
    userServey:SurveyModel;
    userServeyList:SurveyModel[];
    

}