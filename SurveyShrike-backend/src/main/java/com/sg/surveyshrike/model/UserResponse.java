package com.sg.surveyshrike.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Document(collection = "user-survey-response")
@Data
public class UserResponse {
	
	@Id
	private int userId;
	private String emailId;
	private List<Survey> surveyResponse;

}
