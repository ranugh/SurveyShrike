package com.sg.surveyshrike.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sg.surveyshrike.model.User;
import com.sg.surveyshrike.repository.UserRepository;

@Service
public class JwtUserDetailsService {

	@Autowired
	private UserRepository userRepo;
	
	public User loadUserByEmailId(String emailId) {
		
		Optional<User> user =  userRepo.findById(emailId);
		return user.isPresent()? user.get(): null;
	}

}
