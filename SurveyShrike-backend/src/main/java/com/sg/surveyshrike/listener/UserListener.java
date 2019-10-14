package com.sg.surveyshrike.listener;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.mapping.event.AbstractMongoEventListener;
import org.springframework.data.mongodb.core.mapping.event.BeforeConvertEvent;
import org.springframework.stereotype.Component;

import com.sg.surveyshrike.model.User;
import com.sg.surveyshrike.model.User.CompositeKey;
import com.sg.surveyshrike.service.SequenceGenerator;

@Component
public class UserListener extends AbstractMongoEventListener<User> {
	@Autowired
	private SequenceGenerator sequenceService;

	@Override
	public void onBeforeConvert(BeforeConvertEvent<User> event) {

		User attrs = event.getSource();

		CompositeKey sequenceNumber = attrs.getId();

		if (null == sequenceNumber) {
			int sequence = sequenceService.getNextSequence(User.SEQUENCETYPE).intValue();
			CompositeKey comp = new CompositeKey(attrs.getEmailId());
			attrs.setUserId(sequence);
			attrs.setId(comp);
		}

	}

}
