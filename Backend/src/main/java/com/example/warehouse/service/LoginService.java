package com.example.warehouse.service;

import java.util.Map;

import com.example.warehouse.model.Customer;

public interface LoginService {

	Customer loginAuth(Map<String, String> authdata);

}
