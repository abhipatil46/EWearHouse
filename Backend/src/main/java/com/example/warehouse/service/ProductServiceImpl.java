package com.example.warehouse.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.warehouse.model.Product;
import com.example.warehouse.repository.ProductRepository;
import com.example.warehouse.util.Constants;

@Service
public class ProductServiceImpl implements ProductService {

	@Autowired
	ProductRepository productRepository;

	@Override
	public String addProductDetails(Product product) {
		try {
			if (null != product.getFacilityType() && "AC".equalsIgnoreCase(product.getFacilityType())) {
				product.setCharges(Constants.AC_RATE * product.getQuantity());
			} else if (null != product.getFacilityType() && "Non-AC".equalsIgnoreCase(product.getFacilityType())) {
				product.setCharges(Constants.NON_AC_RATE * product.getQuantity());
			}
			productRepository.save(product);
			return "product add success";
		} catch (Exception e) {
			return "failed to add product";
		}
	}

	@Override
	public String editProductDetails(Product product) {
		try {
			productRepository.save(product);
		} catch (Exception e) {
			return "failed to update product data !";
		}
		return "product data updated !";
	}

	@Override
	public String deleteProductDetails(int id) {
		try {
			productRepository.deleteById(id);
		} catch (Exception e) {
			return "failed to delete product data !";
		}
		return "product data deleted !";
	}

	@Override
	public List<Product> getProductDetails() {
		List<Product> product = productRepository.findAll();
		return product;
	}

	@Override
	public List<Product> getProductData(int id) {
		List<Product> product = productRepository.findAllByCustomerId(id);
		return product;
	}
	
	@Override
	public long availableProductSpace() {
		long space = productRepository.sumOfQuantity();
		return Constants.TOTAL_WAREHOUSE_SPACE-space;
	}
}
