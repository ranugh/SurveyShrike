package com.sg.surveyshrike.model;

public enum AnswerType {
	
	TEXTBOX(1),RADIO(2),CHECKBOX(3);
	
	int value;
	
	AnswerType(int value){
		this.value = value;
	}
	
	public int getValue() {
		return value;
	}
	
	public static AnswerType getAnswerType(int val) {
		AnswerType[] values = AnswerType.values();
		for(AnswerType status : values) {
			if(status.value ==val ) {
				return status;
			}
		}
		return null;
	}
		
	
}
