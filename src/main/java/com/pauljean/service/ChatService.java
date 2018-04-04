package com.pauljean.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class ChatService {
	
	@Autowired
	JmsConsumer jmsConsumer;
	
	@Autowired
	JmsProducer JmsProducer;
	
	
	Logger LOGGER = LoggerFactory.getLogger(ChatService.class);
	
	
	public String receive() {
		
		String msg=jmsConsumer.receive();
		
		LOGGER.info(" receive message  : {}",msg);
		
		return msg;
	}
	
	
	public void send(String msg) {
		
		LOGGER.info(" send message  : {}",msg);
		
		JmsProducer.send(msg);
		
	}

}
