package com.example.warehouse.service;

import java.util.List;
import java.util.Optional;

import com.example.warehouse.model.Product;

public interface ProductService {

	String addProductDetails(Product product);

	String editProductDetails(Product product);

	String deleteProductDetails(int id);

	List<Product> getProductDetails();

	List<Product> getProductData(int id);

	long availableProductSpace();

}
