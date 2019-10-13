package com.sg.surveyshrike.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.sg.surveyshrike.config.JwtTokenUtil;
import com.sg.surveyshrike.model.JwtRequest;
import com.sg.surveyshrike.model.JwtResponse;
import com.sg.surveyshrike.model.User;
import com.sg.surveyshrike.service.JwtUserDetailsService;

@RestController
@CrossOrigin
public class JwtAuthenticationController {
	@Autowired
	private AuthenticationManager authenticationManager;
	@Autowired
	private JwtTokenUtil jwtTokenUtil;
	@Autowired
	private JwtUserDetailsService userDetailsService;

	@RequestMapping(value = "/authenticate", method = RequestMethod.POST)
	public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtRequest authenticationRequest) throws Exception {
		//authenticate(authenticationRequest.getUsername(), authenticationRequest.getPassword());
		final User userDetails = userDetailsService.loadUserByEmailId(authenticationRequest.getUsername());
		if(userDetails != null) {
			if(authenticationRequest.getPassword().equals(userDetails.getPassword())) {
				final String token = jwtTokenUtil.generateToken(userDetails);
				return ResponseEntity.ok(JwtResponse.builder().jwttoken(token).userDetails(userDetails).build());
			}
		}
		return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
		
	}

	private void authenticate(String username, String password) throws Exception {
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
		} catch (DisabledException e) {
			throw new Exception("USER_DISABLED", e);
		} catch (BadCredentialsException e) {
			throw new Exception("INVALID_CREDENTIALS", e);
		}
	}
}