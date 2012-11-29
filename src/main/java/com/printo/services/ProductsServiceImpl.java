package com.printo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import com.printo.dao.ProductsDAO;
import com.printo.model.Products;

/**
 * @author soft-koushik
 *
 */
public class ProductsServiceImpl implements ProductsService {
	
	@Autowired
	private ProductsDAO productsDAO;


	@Transactional
	public void addProducts(Products products) {
		// TODO Auto-generated method stub
		productsDAO.addProducts(products);
	}

	
	@Transactional
	public List<Products> listProducts() {
		// TODO Auto-generated method stub
		return productsDAO.listProducts();
	}


	@Transactional
	public void removeProducts(Integer id) {
		// TODO Auto-generated method stub
		productsDAO.removeProducts(id);
	}
	

}
