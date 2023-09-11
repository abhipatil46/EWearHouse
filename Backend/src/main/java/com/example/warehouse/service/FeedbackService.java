package com.example.warehouse.service;

import java.util.List;

import com.example.warehouse.model.Feedback;

public interface FeedbackService {

	List<Feedback> getFeedbackDetails();

	String addFeedback(Feedback feedback);

}
