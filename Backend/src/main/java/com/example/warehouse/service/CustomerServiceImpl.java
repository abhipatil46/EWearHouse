package com.example.warehouse.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.warehouse.model.Customer;
import com.example.warehouse.repository.CustomerRepository;

@Service
public class CustomerServiceImpl implements CustomerService {

	@Autowired
	CustomerRepository customerRepository;

	@Override
	public Customer getCustomerProfile(int id) {
		Customer customer = customerRepository.findById(id);
		return customer;
	}

	@Override
	public String addCustomer(Customer customer) {
		try {
			customerRepository.save(customer);

			return "customer add success";
		} catch (Exception e) {

			return "failed to add customer";
		}
	}

	@Override
	public List<Customer> getCustomerDetails() {
		List<Customer> customer = customerRepository.findAll();
		return customer;
	}

	@Override
	public Customer getCustomerData(int id) {
		Customer customer = customerRepository.findById(id);
		return customer;
	}

	@Override
	public String editCustomerData(Customer customer) {
		Customer customer1 = customerRepository.getReferenceById(customer.getId());
		customer.setPassword(customer1.getPassword());
		try {
			customerRepository.save(customer);
		} catch (Exception e) {
			return "failed to update customer data !";
		}
		return "customer data updated !";
	}

	@Override
	public String deleteCustomerData(int id) {
		try {
			customerRepository.deleteById(id);
		} catch (Exception e) {
			return "failed to delete customer data !";
		}
		return "customer data deleted !";

	}

	@Override
	public String restCustomerPassword(Map<String, String> passMap, int id) {
		String opass = passMap.get("opass");
		String npass = passMap.get("npass");

		Customer customer = customerRepository.getReferenceByIdAndPassword(id, opass);
		if (customer == null) {
			return "*old password is wrong";
		} else {
			customer.setPassword(npass);
			customerRepository.save(customer);

			return "password changed successfully";

		}

	}
}
