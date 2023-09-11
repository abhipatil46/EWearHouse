package com.example.warehouse.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.warehouse.model.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer> {

	Customer getReferenceByEmailAndPassword(String username, String password);

	Customer findById(int id);

	Customer getReferenceByIdAndPassword(int id, String password);

}
