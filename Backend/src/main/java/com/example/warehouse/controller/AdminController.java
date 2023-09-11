package com.example.warehouse.controller;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.example.warehouse.model.Admin;
import com.example.warehouse.model.Customer;
import com.example.warehouse.model.Feedback;
import com.example.warehouse.model.Product;
import com.example.warehouse.repository.AdminRepository;
import com.example.warehouse.repository.CustomerRepository;
import com.example.warehouse.repository.ProductRepository;
import com.example.warehouse.service.CustomerService;
import com.example.warehouse.service.FeedbackService;
import com.example.warehouse.service.ProductService;

@RestController
@RequestMapping("warehouse")
public class AdminController {

	@Autowired
	AdminRepository adminRepository;

	@Autowired
	CustomerRepository customerRepository;

	@Autowired
	ProductRepository productRepository;

	@Autowired
	CustomerService customerService;

	@Autowired
	ProductService productService;

	@Autowired
	FeedbackService feedbackService;

	// For redirect to Admin Dashboard
	@GetMapping("/dashboard")
	public ModelAndView eadminDashboard() {
		return new ModelAndView("AdminDashboard.jsp");
	}

	// For redirect to profile page
	@GetMapping("/profile/admin/{id}")
	public Optional<Admin> profileData(@PathVariable("id") int id) {
		Optional<Admin> admin = adminRepository.findById(id);
		return admin;
	}

	@GetMapping("/profile/customer/{id}")
	public Customer profileDataCustomer(@PathVariable("id") int id) {
		return customerService.getCustomerProfile(id);
	}

	@PostMapping("/customer/add")
	public String addCustomer(@RequestBody Customer customer) {
		return customerService.addCustomer(customer);
	}

	@GetMapping("/customer/data")
	@CrossOrigin(origins = "http://localhost:3000")
	public List<Customer> customerDetails() {
		return customerService.getCustomerDetails();
	}

	@GetMapping("/customer/data/{id}")
	public Customer customerData(@PathVariable("id") int id) {
		return customerService.getCustomerData(id);
	}

	// For update customer details
	@PutMapping("customer/update")
	public String editCustomer(@RequestBody Customer customer) {
		return customerService.editCustomerData(customer);
	}

	@DeleteMapping("customer/delete/{id}")
	public String deleteCustomer(@PathVariable("id") int id) {
		return customerService.deleteCustomerData(id);
	}

	@PostMapping("/product/add")
	public String addProduct(@RequestBody Product product) {
		return productService.addProductDetails(product);
	}

	// For update product details
	@PutMapping("product/update")
	public String editProduct(@RequestBody Product product) {
		return productService.editProductDetails(product);
	}

	@DeleteMapping("product/delete/{id}")
	public String deleteProduct(@PathVariable("id") int id) {
		return productService.deleteProductDetails(id);
	}

	@GetMapping("/product/data")
	public List<Product> productDetails() {
		return productService.getProductDetails();
	}

	@GetMapping("/product/data/{id}")
	public List<Product> productData(@PathVariable("id") int id) {
		return productService.getProductData(id);
	}

	@PostMapping("/resetpass/{id}")
	public String resetPassA(@RequestBody Map<String, String> passMap, @PathVariable("id") int id) {
		return customerService.restCustomerPassword(passMap, id);
	}

	@GetMapping("/availablespace")
	public long availableSpace() {
		return productService.availableProductSpace();
	}
	
	@PostMapping("/customer/feedback/add")
	public String addFeedback(@RequestBody Feedback feedback) {
		return feedbackService.addFeedback(feedback);
	}
	
	@GetMapping("/customer/feedback/data")
	public List<Feedback> feedbackDetails() {
		return feedbackService.getFeedbackDetails();
	}

}
