package com.sg.surveyshrike.service;
import static org.springframework.data.mongodb.core.FindAndModifyOptions.options;
import static org.springframework.data.mongodb.core.query.Criteria.where;
import static org.springframework.data.mongodb.core.query.Query.query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import com.sg.surveyshrike.model.Sequence;

@Service
public class SequenceGenerator {

	@Autowired
	private MongoTemplate mongoTemplate;
	
	public synchronized Integer getNextSequence(String sequenceType) {
		if(!mongoTemplate.collectionExists(Sequence.class)) {
			mongoTemplate.createCollection(Sequence.class);
		}
		return (int) mongoTemplate.findAndModify(query(where("sequenceType").is(sequenceType)), new Update().inc("sequenceNumber",1), options().returnNew(true).upsert(true),
                Sequence.class).getSequenceNumber();
	}	
}

