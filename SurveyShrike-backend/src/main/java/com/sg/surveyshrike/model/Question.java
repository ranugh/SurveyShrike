package com.sg.surveyshrike.model;

import java.util.List;

import org.springframework.data.annotation.Transient;

import lombok.Data;

@Data
public class Question {
	
	@Transient
	public static final String SEQUENCETYPE = "QUESTION_ID";
	
	private	int questionId;
	 private String questionName;
	 private int answerType;
	 private List<Answer> answers;
	 private String userResponseAnswer;
	 private int userResponseAnswerId;

}
