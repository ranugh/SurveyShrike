package com.sg.surveyshrike.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;

@Entity
@Data
public class User {
	
	
	@GeneratedValue
	private long id;

	private String name;
	private String password;
	
	@Id
	private String emailId;
	private boolean admin = false;
	
}
