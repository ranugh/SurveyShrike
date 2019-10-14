package com.sg.surveyshrike.model;

import java.io.Serializable;

import lombok.Builder;
import lombok.Data;

@Data @Builder
public class JwtResponse implements Serializable {
	private static final long serialVersionUID = -8091879091924046844L;
	private  String jwttoken;
	private  User userDetails;

	
}
