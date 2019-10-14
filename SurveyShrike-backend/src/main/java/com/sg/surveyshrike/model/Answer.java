package com.sg.surveyshrike.model;

import org.springframework.data.annotation.Transient;

import lombok.Data;

@Data
public class Answer {
	
	@Transient
	public static final String SEQUENCETYPE = "ANSWER_ID";
	
	private int answerId;
	private String answerStr;
	private boolean checked;

}
