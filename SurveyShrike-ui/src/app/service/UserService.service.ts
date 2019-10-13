import { CommonDataService } from './CommonDataService';
import { User } from '../model/User';
import { RestEndPoints } from '../global/RestEndPoints';

export class UserService extends CommonDataService{


    registerUser(user:User){
        const url: string =
      RestEndPoints.getBaseURL() +
      RestEndPoints.USERS ;
    return super.getEntityWithPayloadAsArg(url, user);

    }
}