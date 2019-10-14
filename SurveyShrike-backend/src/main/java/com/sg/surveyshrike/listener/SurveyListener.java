package com.sg.surveyshrike.listener;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.mapping.event.AbstractMongoEventListener;
import org.springframework.data.mongodb.core.mapping.event.BeforeConvertEvent;
import org.springframework.stereotype.Component;

import com.sg.surveyshrike.model.Answer;
import com.sg.surveyshrike.model.Question;
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
			attrs.setSurveyId(attrs.getId());
			
			attrs.getQuestions().forEach(ques -> {
				
				int quesSeq = ques.getQuestionId();
				
				if(quesSeq == 0) {
					ques.setQuestionId(sequenceService.getNextSequence(Question.SEQUENCETYPE).intValue());
				}
				
				ques.getAnswers().forEach(ans -> {
					
					int ansSeq = ans.getAnswerId();
					if(ansSeq == 0) {
						ans.setAnswerId(sequenceService.getNextSequence(Answer.SEQUENCETYPE).intValue());
					}
				});
				
			});
			
		}
		
		
	}

}

