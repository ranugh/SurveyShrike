package com.sg.surveyshrike.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection = "Survey-info")
public class Survey {
	
	@Transient
	public static final String SEQUENCETYPE = "SURVEY_ID";
	
	@Id
	private int id;
	private int surveyId;
	private String surveyName;
	private List<Question> questions;
	
}
