package com.example.warehouse.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.warehouse.model.Customer;
import com.example.warehouse.model.Feedback;
import com.example.warehouse.repository.FeedbackRepository;

@Service
public class FeedbackServiceImpl implements FeedbackService{
	
	@Autowired
	FeedbackRepository feedbackRepository;
	
	@Override
	public String addFeedback(Feedback feedback) {
		try {
			feedbackRepository.save(feedback);

			return "feedback add success";
		} catch (Exception e) {

			return "feedback to add customer";
		}
	}

	@Override
	public List<Feedback> getFeedbackDetails() {
		List<Feedback> feedback = feedbackRepository.findAll();
		return feedback;
	}
}
