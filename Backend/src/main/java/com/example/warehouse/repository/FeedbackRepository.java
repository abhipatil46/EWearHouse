package com.example.warehouse.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.warehouse.model.Feedback;
@Repository
public interface FeedbackRepository extends JpaRepository<Feedback, Integer>{

}
