package com.sg.surveyshrike.model;


import java.io.Serializable;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;
import lombok.Value;

@Document(collection = "user-info")
@Data
public class User {
	
	@Transient
	public static final String SEQUENCETYPE = "USERID_SEQUENCE";
	
	@Id 
	private CompositeKey id;
	private int userId;
	private String name;
	private String password;
	private String emailId;
	private boolean admin = false;
	
	
	
	@Value
	public static class CompositeKey implements Serializable {
		
		private static final long serialVersionUID = 7010807921593067114L;
		private String emailId;
	}
	
}
