package com.printo.services;

import java.util.List;

import com.printo.model.ProductCategory;

/**
 * @author soft-koushik
 *
 */
public interface ProductCategoryService {

	
	public void addProductCategory(ProductCategory productCategory);
	
	public List<ProductCategory> listProductCategory();
	
	public void removeProductCategory(Integer id);
}
