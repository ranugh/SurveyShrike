package com.sg.surveyshrike.listener;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.mapping.event.AbstractMongoEventListener;
import org.springframework.data.mongodb.core.mapping.event.BeforeConvertEvent;
import org.springframework.stereotype.Component;

import com.sg.surveyshrike.model.Survey;
import com.sg.surveyshrike.service.SequenceGenerator;

@Component
public class SurveyListener extends AbstractMongoEventListener<Survey>{
	@Autowired
	private SequenceGenerator sequenceService;

	@Override
	public void onBeforeConvert(BeforeConvertEvent<Survey> event) {

		Survey attrs = event.getSource();


		Integer sequenceNumber =  attrs.getId();

		if (null == sequenceNumber || sequenceNumber == 0) {
			attrs.setId(sequenceService.getNextSequence(Survey.SEQUENCETYPE).intValue());
		}
		
		
	}

}

