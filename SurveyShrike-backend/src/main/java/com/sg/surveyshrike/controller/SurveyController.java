package com.sg.surveyshrike.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sg.surveyshrike.model.Survey;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/surveys")
@Slf4j
public class SurveyController {
	
//	@PostMapping
//	public void submitSurvey(@RequestBody Survey survey) {
//		log.info("Survey list recieved {}" + survey);
//		
//	}

}
