package com.pauljean.presentation.controller;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.pauljean.service.ChatService;
import com.pauljean.service.JmsConsumer;
import com.pauljean.service.JmsProducer;



@Controller
public class IndexController {
	
	//@Autowired
	//ChatService chatservice;
	
	@Autowired
	HttpServletResponse response;
	//, HttpServletResponse response
	
	Logger LOGGER = LoggerFactory.getLogger(IndexController.class);

	@RequestMapping(value = {"/", "/index"})
	public ModelAndView index(HttpServletRequest request) throws IOException {
		
		LOGGER.info("in index");
					
		ModelAndView model;
		model = new ModelAndView(); 
		//model.addObject("chat", chatResponse);
		
		model.addObject("title", "index");
		model.addObject("message", "This is index page!");
	

		model.setViewName("index");
		
		
		return model;

	}

}
