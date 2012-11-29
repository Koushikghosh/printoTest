package com.printo.dao;

import java.util.List;

import com.printo.model.ProductCategory;

/**
 * @author soft-koushik
 *
 */
public interface ProductCategoryDAO {

	
	public void addProductCategory(ProductCategory productCategory);
	
	public List<ProductCategory> listProductCategory();
	
	public void removeProductCategory(Integer id);
}
