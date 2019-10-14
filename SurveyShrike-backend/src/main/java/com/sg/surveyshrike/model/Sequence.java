package com.sg.surveyshrike.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Document(collection = "counters")
public class Sequence {
	@Id
	private String id;
	private String sequenceType;
	private long sequenceNumber;
	
	public Sequence() {
	}

	public Sequence(String sequenceType, long sequenceNumber) {
		this.sequenceType = sequenceType;
		this.sequenceNumber = sequenceNumber;
	}
	public String getSequenceType() {
		return sequenceType;
	}
	public void setSequenceType(String sequenceType) {
		this.sequenceType = sequenceType;
	}

	public long getSequenceNumber() {
		return sequenceNumber;
	}

	public void setSequenceNumber(long sequenceNumber) {
		this.sequenceNumber = sequenceNumber;
	}

	
	
}


