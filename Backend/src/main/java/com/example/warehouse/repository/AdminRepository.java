package com.example.warehouse.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.warehouse.model.Admin;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Integer> {

	Admin getReferenceByEmailAndPassword(String email, String password);

}
