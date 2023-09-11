package com.example.warehouse.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.warehouse.model.Product;

import jakarta.transaction.Transactional;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {

	List<Product> findAllByCustomerId(int customerId);

	@Query(value="select SUM(e.quantity) from Product e")
	long sumOfQuantity();

}
