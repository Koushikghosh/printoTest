/**
 * 
 * @author soft-koushik
 *
 *
 */
package com.printo.dao;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.printo.model.ProductCategory;

/**
 * @author soft-koushik
 *
 */
@Repository
@Transactional
public class ProductCategoryDAOImpl implements ProductCategoryDAO {
	
	@Autowired
	@Qualifier("sessionFactory")
	private SessionFactory sessionFactory;
	

	/* (non-Javadoc)
	 * @see com.printo.dao.ProductCategoryDAO#addProductCategory(com.printo.model.ProductCategory)
	 */
	public void addProductCategory(ProductCategory productCategory) {
		// TODO Auto-generated method stub
		sessionFactory.getCurrentSession().save(productCategory);
	}

	/* (non-Javadoc)
	 * @see com.printo.dao.ProductCategoryDAO#listProductCategory()
	 */
	public List<ProductCategory> listProductCategory() {
		// TODO Auto-generated method stub
		return sessionFactory.getCurrentSession().createQuery("from productcategory").list();
	}

	/* (non-Javadoc)
	 * @see com.printo.dao.ProductCategoryDAO#removeProductCategory(java.lang.Integer)
	 */
	public void removeProductCategory(Integer id) {
		// TODO Auto-generated method stub
		ProductCategory productCategory = (ProductCategory) sessionFactory.getCurrentSession().load(ProductCategory.class, id);
        if (null != productCategory) {
            sessionFactory.getCurrentSession().delete(productCategory);
        }
 
	}

}
