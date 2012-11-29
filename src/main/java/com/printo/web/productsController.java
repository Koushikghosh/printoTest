package com.printo.web;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.printo.model.Products;
import com.printo.services.ProductsService;

/**
 * @author soft-koushik
 *
 */

public class ProductsController {

	@Autowired
	private ProductsService productsService;
	
	@RequestMapping("/products")
	public String listProducts(Map<String, Object> map) {
		 
        map.put("products", new Products());
        map.put("productsList", productsService.listProducts());
 
        return "products";
    }
	
	
	
}
