package com.sg.surveyshrike.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sg.surveyshrike.model.UserResponse;
import com.sg.surveyshrike.service.UserResponseService;

@RestController
@RequestMapping("/userResponse")
public class UserResponseController { 
	
	@Autowired
	UserResponseService userResponseService;
	
	@PostMapping
	public UserResponse submitUserResponse(@RequestBody UserResponse userResponse) {
		return userResponseService.submitUserResponse(userResponse);
	}
	
	
	@GetMapping
	public List<UserResponse> getUserResponse() {
		return userResponseService.getUserResponse();
	}

}
