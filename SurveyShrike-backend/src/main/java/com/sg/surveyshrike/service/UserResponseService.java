package com.sg.surveyshrike.service;

import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mongodb.client.model.Collation;
import com.sg.surveyshrike.model.Survey;
import com.sg.surveyshrike.model.UserResponse;
import com.sg.surveyshrike.repository.UserResponseRepository;

@Service
public class UserResponseService {
	
	@Autowired
	UserResponseRepository userResponseRepo;

	public UserResponse submitUserResponse(UserResponse userResponse) {
		
		Optional<UserResponse> existingResponse = userResponseRepo.findById(userResponse.getUserId());
		
		Survey newSurvey = userResponse.getSurveyResponse().get(0);
		if(existingResponse.isPresent()) {
			
			UserResponse userResp = existingResponse.get();
			
			if(userResp.getSurveyResponse().stream().anyMatch(surveyResp -> surveyResp.getSurveyId() == newSurvey.getSurveyId())) {
				
				Survey existingSurvey = userResp.getSurveyResponse().stream().filter(surveyResp -> surveyResp.getSurveyId() == newSurvey.getSurveyId()).findAny().get();
				Collections.replaceAll(userResp.getSurveyResponse(), existingSurvey, newSurvey);
			}
			
			else {
				userResp.getSurveyResponse().add(newSurvey);
			}
			return userResponseRepo.save(userResp);
		}
		
		return userResponseRepo.save(userResponse);
	}

	public List<UserResponse> getUserResponse() {
		
		return userResponseRepo.findAll();
	}
	
	

}
