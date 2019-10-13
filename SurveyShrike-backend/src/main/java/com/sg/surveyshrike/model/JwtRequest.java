package com.sg.surveyshrike.model;

import java.io.Serializable;

import lombok.Builder;
import lombok.Data;
@Data @Builder
public class JwtRequest implements Serializable {
private static final long serialVersionUID = 5926468583005150707L;
private String username;
private String password;
}
