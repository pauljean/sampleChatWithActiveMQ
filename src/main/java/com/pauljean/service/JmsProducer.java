package com.pauljean.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.stereotype.Service;

import com.pauljean.constant.AppConstant;

@Service
public class JmsProducer {
	
	Logger LOGGER = LoggerFactory.getLogger(JmsProducer.class);
	
	@Autowired
	JmsTemplate jmsTemplate;		
	
	String destinationQueue=AppConstant.JMS_QUEUE_WEB_APP;
	
	public void send(String msg){
		jmsTemplate.convertAndSend(destinationQueue, msg);
	}

}
