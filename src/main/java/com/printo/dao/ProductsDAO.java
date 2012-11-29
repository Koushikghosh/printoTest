package com.printo.dao;

import java.util.List;

import com.printo.model.Products;

/**
 * @author soft-koushik
 *
 */
public interface ProductsDAO {

	public void addProducts(Products products);
	public List<Products> listProducts();
	public void removeProducts(Integer id);
	
}
