package com.example.warehouse.service;

import java.util.List;
import java.util.Map;

import com.example.warehouse.model.Customer;

public interface CustomerService {

	Customer getCustomerProfile(int id);

	String addCustomer(Customer customer);

	List<Customer> getCustomerDetails();

	Customer getCustomerData(int id);

	String editCustomerData(Customer customer);

	String deleteCustomerData(int id);

	String restCustomerPassword(Map<String, String> passMap, int id);
}
