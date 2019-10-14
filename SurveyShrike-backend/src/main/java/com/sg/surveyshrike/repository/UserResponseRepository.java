package com.sg.surveyshrike.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.sg.surveyshrike.model.UserResponse;

@RepositoryRestResource(collectionResourceRel = "userResponse", path = "userResponse")
public interface UserResponseRepository extends MongoRepository<UserResponse, Integer> {

}
