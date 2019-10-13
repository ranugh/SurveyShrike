import { CommonDataService } from './CommonDataService';
import { User } from '../model/User';
import { RestEndPoints } from '../global/RestEndPoints';
import { JwtRequest } from '../model/JwtRequest';

export class UserService extends CommonDataService{


    registerUser(user:User){
        const url: string =
      RestEndPoints.getBaseURL() +
      RestEndPoints.USERS ;
    return super.getEntityWithPayloadAsArg(url, user);

    }

    login(jwtRequest:JwtRequest){
        const url: string =
        RestEndPoints.getBaseURL() +
        RestEndPoints.AUTHENTICATE ;
      return super.getEntityWithPayloadAsArg(url, jwtRequest);
    }
}