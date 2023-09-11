package com.example.warehouse.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.warehouse.model.Customer;
import com.example.warehouse.service.LoginService;

@RestController
@RequestMapping("/warehouse")
public class LoginController {

	@Autowired
	LoginService loginService;

	// For redirct to login page
//	@GetMapping("/")
//	public String welcome() {
//		System.out.println("hello");
//		return "login.jsp";
//	}

	// For authenticate username, password and login the user
	@PostMapping("/login")
	public Customer loginUser(@RequestBody Map<String, String> authdata) {
		return loginService.loginAuth(authdata);
	}

}
