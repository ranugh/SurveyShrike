package com.sg.surveyshrike.model;

import java.util.List;

import lombok.Data;

@Data
public class Question {
	
	 private String questionName;
	 private int answerType;
	 private List<Answer> answers;

}
