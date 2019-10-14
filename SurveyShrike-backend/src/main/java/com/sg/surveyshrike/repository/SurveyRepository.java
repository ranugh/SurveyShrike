package com.sg.surveyshrike.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.sg.surveyshrike.model.Survey;

@RepositoryRestResource(collectionResourceRel = "surveys", path = "surveys")
public interface SurveyRepository extends MongoRepository<Survey, Long>{

}
