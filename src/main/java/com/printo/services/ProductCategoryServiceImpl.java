/**
 * 
 * @author soft-koushik
 *
 *
 */
package com.printo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.printo.dao.ProductCategoryDAO;
import com.printo.dao.StateDAO;
import com.printo.model.ProductCategory;

/**
 * @author soft-koushik
 *
 */
public class ProductCategoryServiceImpl implements ProductCategoryService {
	
	@Autowired
	private ProductCategoryDAO productCategoryDAO;

	/* (non-Javadoc)
	 * @see com.printo.services.ProductCategoryService#addProductCategory(com.printo.model.ProductCategory)
	 */
	public void addProductCategory(ProductCategory productCategory) {
		// TODO Auto-generated method stub
		productCategoryDAO.addProductCategory(productCategory);
	}

	/* (non-Javadoc)
	 * @see com.printo.services.ProductCategoryService#listProductCategory()
	 */
	public List<ProductCategory> listProductCategory() {
		// TODO Auto-generated method stub
		return productCategoryDAO.listProductCategory();
	}

	/* (non-Javadoc)
	 * @see com.printo.services.ProductCategoryService#removeProductCategory(java.lang.Integer)
	 */
	public void removeProductCategory(Integer id) {
		// TODO Auto-generated method stub
		productCategoryDAO.removeProductCategory(id);
	}

}
