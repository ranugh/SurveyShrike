package com.sg.surveyshrike.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
	public Map<String,List<UserResponse>> getUserResponse() {
		Map<String,List<UserResponse>> userResponseList = new HashMap<>();
		userResponseList.put("USER_RESPONSE_LIST",userResponseService.getUserResponse());
		return userResponseList;
	}

}
