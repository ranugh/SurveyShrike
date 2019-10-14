package com.sg.surveyshrike.model;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Document(collection = "user-info")
@Data
public class User {
	
	
	private long id;

	private String name;
	private String password;
	
	@Id
	private String emailId;
	private boolean admin = false;
	
}
