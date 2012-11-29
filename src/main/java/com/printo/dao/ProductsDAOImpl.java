package com.printo.dao;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.printo.model.Products;
import com.printo.model.State;

/**
 * @author soft-koushik
 *
 */
@Repository
@Transactional
public class ProductsDAOImpl implements ProductsDAO {
	
	@Autowired
	@Qualifier("sessionFactory")
	private SessionFactory sessionFactory;

	
	/* (non-Javadoc)
	 * @see com.printo.dao.ProductDAO#addProduct(com.printo.model.Product)
	 */
	public void addProducts(Products products) {
		// TODO Auto-generated method stub
		sessionFactory.getCurrentSession().save(products);
	}

	/* (non-Javadoc)
	 * @see com.printo.dao.ProductDAO#listProduct()
	 */
	public List<Products> listProducts() {
		// TODO Auto-generated method stub
		return sessionFactory.getCurrentSession().createQuery("from products").list();
	}

	/* (non-Javadoc)
	 * @see com.printo.dao.ProductDAO#removeProduct(java.lang.Integer)
	 */
	public void removeProducts(Integer id) {
		// TODO Auto-generated method stub
		Products products = (Products) sessionFactory.getCurrentSession().load(Products.class, id);
        if (null != products) {
		sessionFactory.getCurrentSession().delete(products);
        }
		
	}
	
}
